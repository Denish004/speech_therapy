const express = require('express');
const router = express.Router();
const { Patient, Therapist, MatchingResult } = require('../models/MatchSW');

// Fetch a specific patient
router.get('/patientmodels', async (req, res) => {
  try {
    console.log("Fetching patient");
    const patient = await Patient.find({});
    console.log(patient);
    if (!patient) return res.status(404).json({ error: 'Patient not found' });
    res.json(patient).status(200);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching patient' });
  }
});