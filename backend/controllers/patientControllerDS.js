const mongoose =require('mongoose');

// Get all patient data
const {Patient} = require('../models/MatchSW');

const registerPatient = async (req, res) => {
  try {
    const patientData = req.body;
    const newPatient = new Patient(patientData);
    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  registerPatient,
};