const express = require('express');
const router = express.Router();
const { Patient, Therapist, MatchingResult } = require('../models/MatchSW');

// Fetch a specific patient
router.get('/patients/:id', async (req, res) => {
  try {
    console.log("Fetching patient");
    const patient = await Patient.findOne({ patientId: req.params.id });
    console.log(patient);
    if (!patient) return res.status(404).json({ error: 'Patient not found' });
    res.json(patient).status(200);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching patient' });
  }
});

// Fetch all therapists
router.get('/therapists', async (req, res) => {
  try {
    console.log("helllllllllllllllooooooo");
    const therapists = await Therapist.find();
    console.log(therapists);
    res.json(therapists);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching therapists' });
  }
});

// Get matching result for a specific patient and therapist
router.get('/matching-results', async (req, res) => {
  try {
    const { patientId, therapistId } = req.query;
    const result = await MatchingResult.findOne({ patientIds: patientId, therapistId });
    res.json(result || null);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching matching result' });
  }
});

// Create or update a matching result
router.post('/matching-results', async (req, res) => {
  try {
    const { patientIds, therapistId, score } = req.body;

    // Check if the matching result for this therapist already exists
    let existingResult = await MatchingResult.findOne({ therapistId });

    if (existingResult) {
      // Update existing result by adding new patient IDs
      existingResult.patientIds = [...new Set([...existingResult.patientIds, ...patientIds])]; // Add new patient IDs if they are not already present
      existingResult.score = score; // Update the score (if needed)
      const updatedResult = await existingResult.save();
      res.status(200).json(updatedResult);
    } else {
      // Create new matching result
      const newResult = new MatchingResult({ patientIds, therapistId, score });
      await newResult.save();
      res.status(201).json(newResult);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error creating or updating matching result' });
  }
});

// Update an existing matching result
router.put('/matching-results/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { patientIds, score } = req.body;

    // Update existing result by adding new patient IDs
    const updatedResult = await MatchingResult.findByIdAndUpdate(
      id,
      { $addToSet: { patientIds }, score },
      { new: true }
    );
    res.json(updatedResult);
  } catch (error) {
    res.status(500).json({ error: 'Error updating matching result' });
  }
});

module.exports = router;
