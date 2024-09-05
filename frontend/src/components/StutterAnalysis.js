import React, { useState, useRef } from 'react';
import {paragraph} from 'txtgen';
import RecordRTC from 'recordrtc';
import './StutterAnalysis.css';

function StutterAnalysis() {
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const recorderRef = useRef(null);

  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [values, setValues] = useState({ v1: null, v2: null, v3: null, v4: null, v5: null });
  const [para, setPara] =useState(null);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recorderRef.current = new RecordRTC(stream, { type: 'audio' });
    recorderRef.current.startRecording();
    setRecording(true);
    setAudioBlob(null);
    setPrediction(null);
    setValues({ v1: null, v2: null, v3: null, v4: null, v5: null });
  };

  const stopRecording = () => {
    recorderRef.current.stopRecording(() => {
      const blob = recorderRef.current.getBlob();
      setAudioBlob(blob);
      setRecording(false);
    });
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const generateRandomParagraph = () => {
    const newParagraph = paragraph(5);
    setPara(newParagraph);
  };

  // console.log(str)
  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (!file) return;

    // const formData = new FormData();
    // formData.append('file', file);
    if (!audioBlob) return;

    const formData = new FormData();
    formData.append('file', audioBlob, 'recording.wav');

    try {
      const response = await fetch('http://localhost:8000/predict/', {
        method: 'POST',
        body: formData,
      });

      const data = await response.text();
      const str = String(data);

      const cleanStr = str.replace(/^\[|\]$/g, '')
                          .replace(/'/g, '')
                          .split(',')
                          .map(num => num.trim());

      const numbers = cleanStr.map(num => {
          const parsedNum = parseFloat(num);
          return isNaN(parsedNum) ? 0 : parsedNum;
      });

      const [value1, value2, value3, value4, value5] = numbers;
      console.log(value2);
      console.log(value3);
      console.log(value4);
      console.log(value5);

      setPrediction(data);
      setValues({
        v1: value1,
        v2: value2,
        v3: value3,
        v4: value4,
        v5: value5
      });

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (

    <div style={{display:"flex",justifyContent:"center"}}>
    <div className="App">
      <h2>Test Your Speech Progress</h2>
      <h4>Know how better you are speaking stastically with the help of AI</h4>
      <div className="button-group">
        <button className="record-button" onClick={recording ? stopRecording : startRecording}>
          {recording ? 'Stop Recording' : 'Start Recording'}
        </button>
        <button className="predict-button" onClick={handleSubmit} disabled={!audioBlob}>
          Upload and Predict
        </button>
      </div>
      <button className="generate-paragraph" onClick={generateRandomParagraph}>Generate New Paragraph</button>
      {para && (
        <div className="paragraph">
          {para}
        </div>
      )}
      {values.v1 !== null && (
        <div className="result">
          <h2>Result:</h2>
          <p>Prolongation: {values.v2 !== null ? (values.v2 * 100 - 40).toFixed(2) : 'N/A'} %</p>
          <p>Block: {values.v3 !== null ? (values.v3 * 100 - 30).toFixed(2) : 'N/A'} %</p>
          <p>Sound Repetition: {values.v4 !== null ? (values.v4 * 100 * 1.4).toFixed(2) : 'N/A'} %</p>
          <p>Word Repetition: {values.v5 !== null ? (values.v5 * 100 / 2).toFixed(2) : 'N/A'} %</p>
        </div>
      )}
    </div>
    </div>
  );
}

export default StutterAnalysis;
