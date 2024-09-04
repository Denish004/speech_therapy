import React, { useState } from 'react';
import axios from 'axios';
import './ChatBot.css';
import { FaRobot } from 'react-icons/fa';

const ChatBot = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [context, setContext] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="chatbot-wrapper">
      {!isOpen && (
        <div className="chatbot-icon-container" onClick={() => setIsOpen(true)}>
          <div className="chatbot-icon">
            <FaRobot size={30} />
          </div>
          <div className="chatbot-label">Doubts? Ask our AI !</div>
        </div>
      )}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h1 className="chatbot-title">Ask Your Doubts.</h1>
            <button onClick={() => setIsOpen(false)} className="close-chatbot-button">X</button>
          </div>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter your question"
            rows={3}
            className="chatbot-textarea"
          />
          <button onClick={handleQuery} disabled={loading} className="chatbot-button">
            {loading ? 'Loading...' : 'Get Answer'}
          </button>
          {response && (
            <div className="chatbot-response">
              <h2>Answer:</h2>
              <pre>{response}</pre>
            </div>
          )}
          {context.length > 0 && (
            <div className="chatbot-context">
              <h2>Context:</h2>
              {context.map((doc, index) => (
                <div key={index}>
                  <h3>Document {index + 1}:</h3>
                  <pre>{doc}</pre>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatBot;
