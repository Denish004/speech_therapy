const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionControllerAB');

// Create a session
router.post('/sessions', sessionController.createSession);

// Additional routes can be added for fetching, updating, and deleting sessions

module.exports = router;
