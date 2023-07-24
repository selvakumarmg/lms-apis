// controllers/agentController.js
const Agent = require('../models/Agent');

exports.getAllAgents = async (req, res) => {
  try {
    const agents = await Agent.getAllAgents();
    res.json(agents);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateAgentStatus = async (req, res) => {
  const { agentId, newStatus } = req.body;

  try {
    await Agent.updateAgentStatus(agentId, newStatus);
    res.json({ message: 'Agent status updated successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

