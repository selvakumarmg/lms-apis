const OTPModel = require('../models/OTPModel');

exports.generateOTP = async (req, res) => {
    const { phoneNumber } = req.body;
    console.log("body", req.body)
    try {
        const otp = await OTPModel.generateAndSaveOTP(phoneNumber);

        // In a real-world scenario, you would send this OTP to the user's phone number via SMS or other channels
        console.log(`Generated OTP for ${phoneNumber}: ${otp}`);

        res.json({ message: 'OTP generated successfully!', data: otp });
    } catch (error) {
        console.error('Error generating OTP:', error);
        res.status(500).json({ error: 'Failed to generate OTP' });
    }
};

exports.verifyOTP = async (req, res) => {
    const { phoneNumber, OTP } = req.body;
  
    try {
      const verificationResult = await OTPModel.verifyOTP(phoneNumber, OTP);
      if (verificationResult.isValid) {
        res.json({ status:200,message: verificationResult.message,});
      } else {
        res.status(400).json({ status:400,message: verificationResult.message,});
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      res.status(500).json({ error: 'Failed to verify OTP' });
    }
  };
