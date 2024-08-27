const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientControllerDS');

router.get('/:id', patientController.getPatientData);
router.post('/:id/progress', patientController.updateProgress);
router.patch('/:id/feedback', patientController.addFeedback);

module.exports = router;
