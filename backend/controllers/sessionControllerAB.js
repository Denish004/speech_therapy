const Session = require('../models/SessionAB.js');

exports.createSession = async (req, res) => {
    // res.send("request successfull")
  try {
    const { patientId, therapyStartDate, numberOfWeeks, therapyTitles, TherapistId } = req.body;
    console.log(req.body)
    const newSession = new Session({
      patientId,
      therapyStartDate,
      numberOfWeeks,
      therapyTitles,
      TherapistId,
    });

    await newSession.save();
    res.status(201).json({ message: 'Session created successfully', session: newSession });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Additional functions for retrieving, updating, and deleting sessions can be added here.
