const express = require('express');
const router = express.Router();
const { submitEnvironmentForm } = require('../controllers/enviormentcontroller');

router.post('/environment-form', submitEnvironmentForm);

module.exports = router;
