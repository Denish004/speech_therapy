const express = require('express');
const { registerPatient } = require('../controllers/patientControllerDS');
const router = express.Router();



router.post('/patient/register', registerPatient);

module.exports = router;
