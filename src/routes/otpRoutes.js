const express = require('express');
const OTPController = require('../controllers/otpController');

const router = express.Router();

// Endpoint to generate OTP
router.post('/generate-otp', OTPController.generateOTP);

// Endpoint to verify OTP
router.post('/verify-otp', OTPController.verifyOTP);

module.exports = router;
