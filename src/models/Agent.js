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
      const results = await db.query('SELECT * FROM agents WHERE id = ?', [agentId]);
      const agentDetails = results[0];
      return agentDetails[0];
    } catch (err) {
      console.error(err);
      throw new Error('Failed to update agent status');
    }
  }

  static async getAgent(agentId) {
    try {
      const results = await db.query('SELECT * FROM agents WHERE id = ?', [agentId]);
      const agentDetails = results[0];
      return agentDetails[0];
    } catch (err) {
      console.error(err);
      throw new Error('Failed to get agent details');
    }
  }
}

module.exports = Agent;
