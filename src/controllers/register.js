// controllers/register.js
const db = require('../config/db');

exports.createUser = (req, res) => {
  // Implement user registration logic here
  // Extract user data from req.body
  const { username, email, phone, otp, address, city, state, pincode, pancard, password, termsChecked } = req.body;
  const status = 'pending'; // Default status

  // Perform validation if required

  // Perform database insertion
  const sql = `INSERT INTO agents (username, email, phone, otp, address, city, state, pincode, pancard, password, termsChecked, status) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [username, email, phone, otp, address, city, state, pincode, pancard, password, termsChecked, status];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error creating user:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.status(201).json({ message: 'User registration successful!' });
    }
  });
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const [results] = await db.query('SELECT * FROM agents WHERE email = ?', [email]);
      const user = results[0];
  
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      if (user.password !== password) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // You can use more secure password hashing like bcrypt in production.
      // For this example, we are just comparing plaintext passwords.
  
      res.status(200).json({ message: 'Login successful', user });
    } catch (err) {
      console.error("Error Login",err);
      console.warn("Error Login",err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
