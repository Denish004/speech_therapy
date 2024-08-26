const mongoose =require('mongoose');
const PatientModel = require('../models/PatientModelDS.js');
// Get all patient data
const getPatientData = async (req, res) => {
    try {
        const patient = await PatientModel.findById(req.params.id);
        res.json(patient);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update patient progress
const updateProgress = async (req, res) => {
    try {
        const { sessionDate, activities, progress } = req.body;
        const patient = await Patient.findById(req.params.id);
        patient.progress.push({ sessionDate, activities, progress });
        await patient.save();
        res.json(patient);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Add feedback
const addFeedback = async (req, res) => {
  
    try {
        const { feedback } = req.body;
        const patient = await PatientModel.findById(req.params.id);
       
        patient.feedback = feedback;
        await patient.save();
        res.json(patient);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { getPatientData, addFeedback, updateProgress};