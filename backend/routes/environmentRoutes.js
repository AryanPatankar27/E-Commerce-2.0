const express = require('express');
const router = express.Router();
const { submitEnvironmentForm } = require('../controllers/environmentcontroller');

router.post('/environment-form', submitEnvironmentForm);

module.exports = router;