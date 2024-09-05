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
    // console.log("helllllllllllllllooooooo");
    const therapists = await Therapist.find();
    console.log(therapists);
    res.json(therapists);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching therapists' });
  }
});
router.get('/therapistsw/:id', async (req, res) => {
  try {
    const therapistId = req.params.id;
    console.log(therapistId);
    
    const therapist = await Therapist.find({ therapistId });

    if (!therapist) {
      return res.status(404).json({ error: 'Therapist not found' });
    }

    res.json(therapist);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching therapist' });
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
router.get('/therapist/:therapistId/patients', async (req, res) => {
  try {
    const therapistId = req.params.therapistId;
      console.log("pohocha");
      
    // Find matching results for the therapist
    const matchingResults = await MatchingResult.find({ therapistId });

    // Log the raw matching results to see what's being returned
    console.log("Matching Results:", JSON.stringify(matchingResults, null, 2));
    
    // Check if matchingResults is not empty
    if (matchingResults.length === 0) {
      console.log("No matching results found for the given therapistId.");
    } else {
      // Extract patient IDs safely, considering possible empty or undefined patientIds arrays
      const patientIds = matchingResults.flatMap(result => {
        if (Array.isArray(result.patientIds) && result.patientIds.length > 0) {
          return result.patientIds.map(patientId => patientId);
        }
        return []; // Return an empty array if patientIds is not an array or is empty
      });
    
      // Log the extracted patient IDs
      console.log("Extracted Patient IDs:", patientIds);
    

    // Fetch all patients based on IDs
    const patients = await Patient.find({ 
      patientId: { $in: patientIds } });
console.log(patients);
      res.json(patients).status(200);
    }
    
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching patients.' });
  }
});

module.exports = router;
