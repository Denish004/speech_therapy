
import React, { useState, useEffect } from 'react';
import './SpeechTherapyCard.css';

const PEXELS_API_KEY = `isg6Q1Z7CbTq6vgtzFYiw8373sQi1Xk7z4joK3umtFJq8lMx3buECDKz`;
const HF_API_KEY = `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`;

async function queryAIImage(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
    {
      headers: {
        Authorization: `Bearer ${HF_API_KEY}`,
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.blob();
  return URL.createObjectURL(result);
}

async function fetchPexelsImage(query) {
  const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=1`, {
    headers: {
      Authorization: PEXELS_API_KEY
    }
  });
  const data = await response.json();
  return data.photos.length > 0 ? data.photos[0].src.medium : null;
}

export default function SpeechTherapyCard() {
  const [query, setQuery] = useState('');
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [image, setImage] = useState(null);
  const [definition, setDefinition] = useState('');
  const [example, setExample] = useState('');
  const [audio, setAudio] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [isAIImage, setIsAIImage] = useState(false);

  const fetchWords = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`https://api.datamuse.com/words?sp=${query}*`);
      const data = await response.json();
      if (data.length > 0) {
        setWords(data.map(item => item.word));
        setCurrentWordIndex(0);
      } else {
        setError('No words found for this query.');
      }
    } catch (error) {
      console.error('Error fetching words:', error);
      setError('Failed to fetch words. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fetchWordData = async (word) => {
    setLoading(true);
    setError('');
    setImage(null);
    setIsAIImage(false);
    setImageLoading(true);
    try {
      const [dictResponse, pexelsImage] = await Promise.all([
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`),
        fetchPexelsImage(word)
      ]);
      const dictData = await dictResponse.json();
      console.log(dictData)
      setDefinition(dictData[0]?.meanings[0]?.definitions[0]?.definition || 'No definition available.');
      setExample(dictData[0]?.meanings[0]?.definitions[0]?.example || '');
      setAudio(dictData[0]?.phonetics[0]?.audio || '');
      
      if (pexelsImage) {
        setImage(pexelsImage);
        setIsAIImage(false);
      } else {
        const prompt = word+" Definition: "+definition;
        console.log(prompt)
        await generateAIImage(prompt);
      }
    } catch (error) {
      console.error('Error fetching word data:', error);
      setError('Failed to fetch word data. Please try again.');
    } finally {
      setLoading(false);
      setImageLoading(false);
    }
  };

  const generateAIImage = async (word) => {
    console.log(word)
    setImageLoading(true);
    setIsAIImage(true);
    try {
      const imageUrl = await queryAIImage({ inputs: word, options: { seed: Math.random() } });
      setImage(imageUrl);
    } catch (error) {
      console.error('Error generating AI image:', error);
      setError('Failed to generate AI image. Please try again.');
    } finally {
      setImageLoading(false);
    }
  };

  const handleNext = () => {
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentWordIndex > 0) {
      setCurrentWordIndex(currentWordIndex - 1);
    }
  };

  useEffect(() => {
    if (words.length > 0) {
      fetchWordData(words[currentWordIndex]);
    }
  }, [currentWordIndex, words]);

  return (
    <div style={{display:"flex",alignContent:"center"}}>
    <div className="speech-therapy-card">
      <div className="card-header">
        <h2 className="card-title">Try pronouncing the words for better understanding...</h2>
        <div className="search-container">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter a sound or letter"
            disabled={loading}
            className="input-field"
          />
          <button onClick={fetchWords} disabled={loading} className="search-button">
            {loading ? (
              <span className="loader small"></span>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {error && (
        <div className="error-message">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{error}</span>
        </div>
      )}

      {words.length > 0 && (
        <div className="card-content">
          <h3 className="current-word">{words[currentWordIndex]}</h3>
          <div className="content-grid">
            <div className="word-details">
              {definition && (
                <div className="detail-item">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <div>
                    <p className="detail-label">Definition:</p>
                    <p>{definition}</p>
                  </div>
                </div>
              )}
              {example && (
                <div className="detail-item">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div>
                    <p className="detail-label">Example:</p>
                    <p>{example}</p>
                  </div>
                </div>
              )}
              {audio && (
                <div className="detail-item">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                  <audio controls src={audio} className="audio-player">
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}
            </div>
            <div className="image-container">
              {imageLoading ? (
                <div className="loading-indicator">
                  <span className="loader"></span>
                  <span>Generating AI image...</span>
                </div>
              ) : image ? (
                <div className="image-wrapper">
                  <img src={image} alt="Generated" className="word-image" />
                  {!isAIImage && (
                    <button className="replace-image-button" onClick={() => generateAIImage(words[currentWordIndex]+" Definition:"+definition)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Replace with AI Image
                    </button>
                  )}
                </div>
              ) : null}
            </div>
          </div>
          <div className="navigation-buttons">
            <button onClick={handlePrevious} disabled={currentWordIndex === 0 } className="nav-button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>
            <button onClick={handleNext} disabled={currentWordIndex === words.length - 1 } className="nav-button">
              Next
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}