const express = require('express');
const router = express.Router();
const  registerTherapist  = require('../controllers/therapistControllerSW.js');
const { Therapist } = require('../models/MatchSW.js');


router.post('/therapist/register', registerTherapist);

router.get('/therapist/:id', async (req, res) => {
  try {
    console.log("1");
    
    const therapist = await Therapist.findById(req.params.id);
    console.log("11");
    if (!therapist) return res.status(404).json({ error: 'Therapist not found' });
    res.json(therapist);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching therapist' });
  }
});


module.exports = router;
