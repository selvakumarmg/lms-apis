const otpGenerator = require('otp-generator');
const db = require('../config/db');

class OTPModel {
  static async generateAndSaveOTP(phoneNumber) {
    const otp = otpGenerator.generate(6, {
      digits: true,
      alphabets: false,
      upperCase: false,
      specialChars: false,
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false
    });
    const expirationTime = new Date(Date.now() + 10 * 60 * 1000); // OTP will expire in 10 minutes

    const query = 'INSERT INTO otp_verification (phone_number, otp_code, expiration_time) VALUES (?, ?, ?)';
    const params = [phoneNumber, otp, expirationTime];

    await db.execute(query, params);

    return {phoneNumber, otp};
  }

  static verifyOTP(phoneNumber, otp) {
    const query =
      'SELECT * FROM otp_verification WHERE phone_number = ? AND otp_code = ? AND expiration_time > NOW()';
    const params = [phoneNumber, otp];

    return db.execute(query, params).then((results) => {
        console.log("results",results)

      if (results[0].length === 0) {
        return { isValid: false, message: 'Invalid OTP or OTP has expired', results };
      }else{
        return { isValid: true, message: 'OTP verified successfully!', results };
      }

    });
  }
}

module.exports = OTPModel;
