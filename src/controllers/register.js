// controllers/register.js
const db = require('../config/db');

exports.createUser = async (req, res) => {
  const {
    username,
    email,
    phone,
    otp,
    address,
    city,
    state,
    pincode,
    pancard,
    password,
    termsChecked,
  } = req.body;
    const status = 'pending'
  try {
    // Check if the agent already exists with the provided email
    const [existingAgent] = await db.query('SELECT * FROM agents WHERE email = ?', [email]);
    if (existingAgent.length > 0) {
      return res.status(400).json({ msg: 'Agent with this email already exists' });
    }
    
    // Insert the new agent's information into the database
    const insertQuery = `
      INSERT INTO agents (username, email, phone, otp, address, city, state, pincode, pancard, password, termsChecked, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    await db.query(insertQuery, [
      username,
      email,
      phone,
      otp,
      address,
      city,
      state,
      pincode,
      pancard,
      password,
      termsChecked,
      status
    ]);
    const [results] = await db.query('SELECT * FROM agents WHERE email = ?', [email]);
    const user = results[0];
    res.status(201).json({ status: 201, msg: 'Agent registered successfully', data:user });
  } catch (err) {
    console.error("Error Registering Agent", err);
    res.status(500).json({ msg: 'Internal server error' });
  }
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

    res.status(200).json({ status: 200, msg: 'Login successful', data: user });
  } catch (err) {
    console.error("Error Login", err);
    console.warn("Error Login", err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
