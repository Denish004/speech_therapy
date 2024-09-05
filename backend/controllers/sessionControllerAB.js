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
 // Adjust the path as needed

// Function to get all sessions


exports.getSessionsByPatientId = async (req, res) => {
  try {
    console.log(req.params);
    const  patientId  = req.params.id;
    console.log(patientId)
    // Fetch all sessions for the given patientId from the database
    const sessions = await Session.find({ patientId });
    
    // Check if any sessions exist for the given patientId
    if (!sessions || sessions.length === 0) {
      return res.status(404).json({ message: 'No sessions found for this patient' });
    }

    // Send the sessions as the response
    res.status(200).json(sessions);
  } catch (error) {
    // Handle errors
    console.error('Error fetching sessions:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
  // try {
  //   const  patientId  = req.params.id;

  //   // Fetch all sessions for the given patientId from the database
  //   const sessions = await Session.find({ patientId });

  //   // Check if any sessions exist for the given patientId
  //   if (!sessions || sessions.length === 0) {
  //     return res.status(404).json({ message: 'No sessions found for this patient' });
  //   }
  //   console.log(sessions)
  //   // Send the sessions as the response
  //   res.status(200).json(sessions);
  // } catch (error) {
  //   // Handle errors
  //   console.error('Error fetching sessions:', error);
  //   res.status(500).json({ message: 'Server error', error: error.message });
  // }

// You can add this function to your route handlers, for example:
// router.get('/sessions/patient/:patientId', getSessionsByPatientId);

// Additional functions for retrieving, updating, and deleting sessions can be added here.
