import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    id: 'symptomDuration',
    label: 'How long have you been experiencing these symptoms?',
    type: 'select',
    options: ['Less than 1 month', '1-3 months', '3-6 months', 'More than 6 months'],
    required: true,
  },
  {
    id: 'therapySessions',
    label: 'How many therapy sessions have you attended?',
    type: 'select',
    options: ['None', '1-5', '6-10', 'More than 10'],
    required: true,
  },
  {
    id: 'communicationDifficulty',
    label: 'Rate your communication difficulty on a scale of 1 to 10',
    type: 'range',
    min: 1,
    max: 10,
    step: 1,
    required: true,
  },
  {
    id: 'motivationLevel',
    label: 'Rate your motivation to improve on a scale of 1 to 10',
    type: 'range',
    min: 1,
    max: 10,
    step: 1,
    required: true,
  },
  {
    id: 'previousTherapy',
    label: 'Have you undergone speech therapy before?',
    type: 'select',
    options: ['Yes', 'No'],
    required: true,
  },
];

const SpeechTherapyQuestionnaire = () => {
  const [formData, setFormData] = useState({
    symptomDuration: '',
    therapySessions: '',
    communicationDifficulty: 5,
    motivationLevel: 5,
    previousTherapy: '',
  });

  const [currentStep, setCurrentStep] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRangeChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: parseInt(value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Send data to the server
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, questions.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const renderQuestion = (question) => {
    switch (question.type) {
      case 'select':
        return (
          <select
            id={question.id}
            name={question.id}
            value={formData[question.id]}
            onChange={handleChange}
            className="w-full p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required={question.required}
          >
            <option value="">Select an option</option>
            {question.options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'range':
        return (
          <div className="flex items-center justify-between">
            <input
              type="range"
              id={question.id}
              name={question.id}
              min={question.min}
              max={question.max}
              step={question.step}
              value={formData[question.id]}
              onChange={handleRangeChange}
              className="w-full"
              required={question.required}
            />
            <span className="ml-3 text-purple-700">{formData[question.id]}</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50">
      <motion.div
        className="max-w-2xl mx-auto p-6 bg-purple-100 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-purple-800 text-center">
          Speech Therapy Questionnaire
        </h2>
        <p className="text-center text-purple-600 mb-8">Help us understand your needs better</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={questions[currentStep].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <label htmlFor={questions[currentStep].id} className="block text-purple-700 mb-2">
                {questions[currentStep].label}
              </label>
              {renderQuestion(questions[currentStep])}
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-between">
            <motion.button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="bg-white text-black py-2 px-4 rounded hover:bg-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Previous
            </motion.button>
            {currentStep < questions.length - 1 ? (
              <motion.button
                type="button"
                onClick={nextStep}
                className="bg-black text-white py-2 px-4 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next
              </motion.button>
            ) : (
              <motion.button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Questionnaire
              </motion.button>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default SpeechTherapyQuestionnaire;
