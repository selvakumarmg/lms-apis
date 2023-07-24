// models/User.js
const db = require('../config/db');

class User {
  static async createUser(user) {
    try {
      const [results] = await db.query('INSERT INTO users SET ?', user);
      return results.insertId;
    } catch (err) {
      console.error(err);
      throw new Error('Failed to create user');
    }
  }
}

module.exports = User;
