const express = require('express');
const { getAllMatchResults} = require('../controllers/supervisorControllerDS');
const router = express.Router();



router.get('/supervisor/getAll', getAllMatchResults);

module.exports = router;
