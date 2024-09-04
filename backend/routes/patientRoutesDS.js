const express = require('express');
const router = express.Router();

const {Patient,Therapist,MatchingResult} = require('../models/MatchSW');

// Fetch a specific patient
router.get('/patients/:id', async (req, res) => {
  try {
    console.log("1");
    
    const patient = await Patient.findById(req.params.id);
    console.log("11");
    if (!patient) return res.status(404).json({ error: 'Patient not found' });
    res.json(patient);
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



router.post('/matching-results/:patientId', async (req, res) => {
  try {
    const { therapistId, score } = req.body;
    const patientId = req.params.patientId;

    // Log the incoming data for debugging
    console.log('Received data:', { therapistId, patientId, score });

    // Validate the result format
    // if (!therapistId || score === null || isNaN(score)) {
    //   return res.status(400).json({ error: 'Invalid result format' });
    // }

    // Convert null or NaN to 0
    const validScore = score === null || isNaN(score) ? 0 : score;

    // Clear existing results for the patient
    await MatchingResult.deleteMany({ patientId });

    // Insert the new result
    await MatchingResult.create({
      patientId,
      therapistId,
      score: validScore // Store the valid score
    });

    res.status(201).json({ message: 'Result stored successfully' });
  } catch (error) {
    console.error('Error storing result:', error);
    res.status(500).json({ error: 'Error storing result' });
  }
});



module.exports = router;
