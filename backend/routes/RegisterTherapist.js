const express = require('express');
const router = express.Router();
const  registerTherapist  = require('../controllers/therapistControllerSW.js');


router.post('/therapist/register', registerTherapist);


module.exports = router;
