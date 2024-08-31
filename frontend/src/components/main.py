import os
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import librosa
import numpy as np
import pandas as pd
import joblib
import uvicorn
import tempfile

app = FastAPI()

# Handle CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3001"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

feature_columns = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

def load_and_predict(file_path: str) -> float:
    try:
        audio, sample_rate = librosa.load(file_path, res_type='kaiser_fast', sr=None)
        mfccs = np.mean(librosa.feature.mfcc(y=audio, sr=sample_rate, n_mfcc=13).T, axis=0)
        features = mfccs
        new_sample = pd.DataFrame([features], columns=feature_columns)

        
        model_filename = 'backend/stutter_sep28k_model.joblib'
        clf = joblib.load(model_filename)
        print(f'Loaded model from {model_filename}')

        y_pred=0
        y_pred = clf.predict(new_sample)
        print(y_pred)
        predictions = y_pred[0]  # Return the first prediction if multiple are returned
        predictions = [f"{num:.2f}" for num in predictions]
        predictions.insert(0, 0)

    except Exception as e:
        print(f"Error occurred while predicting with the model: {e}")
        predictions = "Error in prediction"  

    return predictions

@app.post("/predict/")
async def predict(file: UploadFile = File(...)) -> str:
    with tempfile.TemporaryDirectory() as temp_dir:
        file_path = os.path.join(temp_dir, file.filename)
        
        with open(file_path, "wb") as buffer:
            buffer.write(await file.read())

        prediction = load_and_predict(file_path)
        
    return str(prediction)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
