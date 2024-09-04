from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
import os
import time
from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate
from langchain.chains import create_retrieval_chain
from langchain_community.vectorstores import FAISS
from langchain_community.document_loaders import PyPDFDirectoryLoader
from langchain_google_genai import GoogleGenerativeAIEmbeddings
import os
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import librosa
import numpy as np
import pandas as pd
import joblib
import uvicorn
import tempfile

# Load environment variables
load_dotenv()

# Load API keys
groq_api_key = os.getenv('GROQ_API_KEY')
google_api_key = os.getenv('GOOGLE_API_KEY')

# Configure API keys
os.environ["GOOGLE_API_KEY"] = google_api_key

# Initialize the model
llm = ChatGroq(groq_api_key=groq_api_key, model_name="Llama3-8b-8192")

# Define the prompt template
prompt = ChatPromptTemplate.from_template(
    """
    Answer the questions based on the provided context only.
    Please provide the most accurate response based on the question.
    Do not use the words Based on the provided context
    <context>
    {context}
    </context>
    Questions: {input}
    """
)

app = FastAPI()

# Handle CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Path to the PDF file
PDF_PATH = "/frontend/src/components/ilovepdf"

# Global variables
embeddings = None
vectors = None

def vector_embedding():
    global embeddings, loader, docs, text_splitter, final_documents, vectors

    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    loader = PyPDFDirectoryLoader("/home/labhansh/Downloads/ilovepdf")  # Data Ingestion
    docs = loader.load()  # Document Loading
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)  # Chunk Creation
    final_documents = text_splitter.split_documents(docs[:20])  # Splitting
    vectors = FAISS.from_documents(final_documents, embeddings)  # Vector OpenAI embeddings


vector_embedding()

class QueryRequest(BaseModel):
    question: str

@app.post("/query/")
async def query(request: QueryRequest):
    global vectors

    if vectors is None:
        raise HTTPException(status_code=500, detail="Vectors not initialized")

    try:
        document_chain = create_stuff_documents_chain(llm, prompt)
        retriever = vectors.as_retriever()
        retrieval_chain = create_retrieval_chain(retriever, document_chain)

        start = time.process_time()
        response = retrieval_chain.invoke({'input': request.question})
        end = time.process_time()

        return {
            "response": response['answer'],
            "context": [doc.page_content for doc in response.get("context", [])],
            "response_time": end - start
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8001)