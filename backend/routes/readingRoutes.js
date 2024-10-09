const express = require('express');
const router = express.Router();
const { submitReadingForm } = require('../controllers/readingcontroller');

router.post('/reading-form', submitReadingForm);

module.exports = router;