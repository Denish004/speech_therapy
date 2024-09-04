
import React, { useState } from 'react';
import axios from 'axios';

const ChatBot = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [context, setContext] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleQuery = async () => {
    setLoading(true);
    try {
      const result = await axios.post('http://localhost:8001/query/', { question });
      setResponse(result.data.response);
      setContext(result.data.context);
    } catch (error) {
      console.error('Error querying:', error);
      setResponse('Error occurred while querying.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Document Q&A</h1>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter your question here"
        rows={5}
        cols={50}
      />
      <button onClick={handleQuery} disabled={loading}>
        {loading ? 'Loading...' : 'Get Answer'}
      </button>
      {response && (
        <div>
          <h2>Answer:</h2>
          <pre>{response}</pre>
        </div>
      )}
      {context.length > 0 && (
        <div>
          <h2>Document Context:</h2>
          {context.map((doc, index) => (
            <div key={index}>
              <h3>Document {index + 1}:</h3>
              <pre>{doc}</pre>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatBot;