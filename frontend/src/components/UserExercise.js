import React, { useState, useRef } from 'react';
import { FaVolumeUp, FaMicrophone } from 'react-icons/fa';
import SpeechTherapyCard from './SpeechTherapyCard';

export default function UserExercise({ specificSound }) {
    const [selectedSound, setSelectedSound] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [showSpeechTherapyCard, setShowSpeechTherapyCard] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [recordedAudio, setRecordedAudio] = useState(null);
    const audioRef = useRef(null);
  
    const handlePracticeClick = (sound) => {
      setSelectedSound(sound);
      setShowSpeechTherapyCard(true);
    };
  
    const handleGoBack = () => {
      setShowSpeechTherapyCard(false);
      setRecordedAudio(null);
    };
  
    const handleRecordClick = () => {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
          const audioElement = new Audio();
          audioElement.srcObject = stream;
          audioElement.controls = false;
          audioElement.autoplay = true;
          audioRef.current = audioElement;
          setIsRecording(true);
  
          const chunks = [];
          const mediaRecorder = new MediaRecorder(stream);
          mediaRecorder.addEventListener('dataavailable', (event) => {
            chunks.push(event.data);
          });
  
          mediaRecorder.addEventListener('stop', () => {
            const blob = new Blob(chunks, { type: 'audio/wav' });
            setRecordedAudio(blob);
            setIsRecording(false);
            if (recordedAudio) {
              setProcessing(true);
              processRecording(recordedAudio);
            }
          });
  
          mediaRecorder.start();
  
          audioElement.addEventListener('click', () => {
            mediaRecorder.stop();
            setIsRecording(false);
          });
        });
      }
    };
  
    const stopRecording = () => {
      if (audioRef.current) {
        audioRef.current.srcObject.getTracks().forEach(track => track.stop());
        setIsRecording(false);
      }
    };
  
    const processRecording = async (audioBlob) => {
      const formData = new FormData();
      formData.append('file', audioBlob, 'recording.wav');
  
      const MAX_RETRIES = 20;
      let retryCount = 0;
  
      while (retryCount < MAX_RETRIES) {
        try {
          let response = await fetch('https://api-inference.huggingface.co/models/distil-whisper/distil-large-v3', {
            method: 'POST',
            headers: {
              'Authorization': 'Bearer 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',
            },
            body: formData,
          });
  
          let result = await response.json();
  
          if (!result.error) {
            console.log('Transcription result:', result);
            setProcessing(false);
            return;
          } else if (result.error.includes("Model distil-whisper/distil-large-v3 is currently loading")) {
            console.log('Model is loading, retrying in 10 seconds...');
            await new Promise(resolve => setTimeout(resolve, 10000));
            retryCount++;
          } else {
            console.error('Error processing recording:', result.error);
            setProcessing(false);
            return;
          }
        } catch (error) {
          console.error('Error processing recording:', error);
          retryCount++;
        }
      }
  
      console.error('Unable to process the recording after multiple retries. Please try again later.');
      setProcessing(false);
    };
  const sounds = ["er", "na", "p", "o"];

  return (
    <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 shadow-xl rounded-lg p-6 flex flex-col h-[auto]">
      {showSpeechTherapyCard ? (
        <>
          <SpeechTherapyCard defaultSound={selectedSound} />
          <button
            onClick={handleGoBack}
            className="mt-4 bg-blue-500 text-black px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Go Back
          </button>
          <div className="mt-4 flex gap-4">
            <button
              className="bg-blue-500 text-black px-6 py-3 rounded-lg hover:bg-blue-600"
              onClick={handleRecordClick}
              disabled={isRecording}
            >
              <FaMicrophone className="mr-2" /> {isRecording ? 'Recording...' : 'Record'}
            </button>
            {isRecording && (
              <button
                className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
                onClick={stopRecording}
              >
                Stop
              </button>
            )}
          </div>
          {processing && <p className="mt-4 text-blue-500">Processing... Please wait.</p>}
        </>
      ) : (
        <>
          <h3 className="text-2xl md:text-3xl mb-5 font-semibold text-gray-800 text-center">Prescribed Exercise</h3>
          <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center">
            <p className="text-lg font-semibold">Score: 85</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h4 className="text-lg font-semibold mb-2 flex items-center">
              <FaVolumeUp className="text-blue-500 mr-2" /> Sounds to Practice
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {sounds.map((sound, index) => (
                <div
                  key={index}
                  className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg shadow-md flex items-center cursor-pointer"
                  onClick={() => handlePracticeClick(sound)}
                >
                  <FaVolumeUp className="text-blue-400 mr-2" />
                  <span>{sound}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}