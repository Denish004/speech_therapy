const {Therapist} = require('../models/MatchSW');

const registerTherapist = async (req, res) => {
  try {
    const therapistData = req.body;
    const newTherapist = new Therapist(therapistData);
    await newTherapist.save();
    res.status(201).json(newTherapist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = registerTherapist