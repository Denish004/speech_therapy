import React, { useState, useRef } from 'react';
import { FaVolumeUp, FaMicrophone } from 'react-icons/fa';
import SpeechTherapyCard from './SpeechTherapyCard';

const API_URL = "https://api-inference.huggingface.co/models/openai/whisper-base";
const headers = {"Authorization": "Bearer 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"};

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
                const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
                mediaRecorder.addEventListener('dataavailable', (event) => {
                    chunks.push(event.data);
                });

                mediaRecorder.addEventListener('stop', () => {
                    const blob = new Blob(chunks, { type: 'audio/webm' });
                    setRecordedAudio(blob);
                    setIsRecording(false);
                    if (blob) {
                        setProcessing(true);
                        convertToWavAndProcess(blob);
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

    const convertToWavAndProcess = async (webmBlob) => {
        const audioContext = new AudioContext();
        const arrayBuffer = await webmBlob.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        
        const wavBuffer = audioBufferToWav(audioBuffer);
        const wavBlob = new Blob([wavBuffer], { type: 'audio/wav' });
        
        processRecording(wavBlob);
    };

    const audioBufferToWav = (buffer) => {
        const numOfChan = buffer.numberOfChannels;
        const length = buffer.length * numOfChan * 2 + 44;
        const wavBuffer = new ArrayBuffer(length);
        const view = new DataView(wavBuffer);
        const channels = [];
        let i;
        let sample;
        let offset = 0;
        let pos = 0;

        // write WAVE header
        setUint32(0x46464952);
        setUint32(length - 8);
        setUint32(0x45564157);
        setUint32(0x20746d66);
        setUint32(16);
        setUint16(1);
        setUint16(numOfChan);
        setUint32(buffer.sampleRate);
        setUint32(buffer.sampleRate * 2 * numOfChan);
        setUint16(numOfChan * 2);
        setUint16(16);
        setUint32(0x61746164);
        setUint32(length - pos - 4);

        for (i = 0; i < buffer.numberOfChannels; i++)
            channels.push(buffer.getChannelData(i));

        while (pos < length) {
            for (i = 0; i < numOfChan; i++) {
                sample = Math.max(-1, Math.min(1, channels[i][offset]));
                sample = (0.5 + sample < 0 ? sample * 32768 : sample * 32767) | 0;
                view.setInt16(pos, sample, true);
                pos += 2;
            }
            offset++;
        }

        return wavBuffer;

        function setUint16(data) {
            view.setUint16(pos, data, true);
            pos += 2;
        }

        function setUint32(data) {
            view.setUint32(pos, data, true);
            pos += 4;
        }
    };

    const checkModelStatus = async () => {
        const response = await fetch(API_URL, { headers });
        return response.json();
    };

    const query = async (audioBlob) => {
        const formData = new FormData();
        formData.append('file', audioBlob, 'recording.wav');
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: headers,
            body: formData
        });
        return response.json();
    };

    const processRecording = async (audioBlob) => {
        const MAX_RETRIES = 5;
        const DELAY = 20000; // 20 seconds

        for (let i = 0; i < MAX_RETRIES; i++) {
            try {
                const status = await checkModelStatus();
                if (!status.error) {
                    const result = await query(audioBlob);
                    console.log('Transcription result:', result);
                    setProcessing(false);
                    return;
                }
                console.log(`Model status: ${status.error}. Retrying in ${DELAY/1000} seconds...`);
                await new Promise(resolve => setTimeout(resolve, DELAY));
            } catch (error) {
                console.error('Error processing recording:', error);
            }
        }

        console.error('Failed to query model after several retries');
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
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">User Exercise</h3>
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