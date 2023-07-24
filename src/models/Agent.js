// models/Agent.js
const db = require('../config/db');

class Agent {
  static async getAllAgents() {
    try {
      const [results] = await db.query('SELECT * FROM agents');
      return results;
    } catch (err) {
      console.error(err);
      throw new Error('Failed to fetch agents');
    }
  }

  static async updateAgentStatus(agentId, newStatus) {
    try {
      await db.query('UPDATE agents SET status = ? WHERE id = ?', [newStatus, agentId]);
    } catch (err) {
      console.error(err);
      throw new Error('Failed to update agent status');
    }
  }
}

module.exports = Agent;
