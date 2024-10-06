const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontrollers');

// Route for user signup
router.post('/usersignup', userController.userSignup);

// Route for user login
router.post('/userlogin', userController.userLogin);

module.exports = router;
