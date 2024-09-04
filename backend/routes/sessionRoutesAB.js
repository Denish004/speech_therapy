const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionControllerAB');

// Create a session
router.post('/sessions', sessionController.createSession);
router.get('/Allsessions/:id', sessionController.getSessionsByPatientId);

// Additional routes can be added for fetching, updating, and deleting sessions

module.exports = router;
