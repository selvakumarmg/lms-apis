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
    const agents = await Agent.updateAgentStatus(agentId, newStatus);
    res.json({status:200, message: 'Agent status updated successfully',data:agents});
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAgent = async (req, res) => {
  const { agentId } = req.body;
  try {
    const agents = await Agent.getAgent(agentId);
    res.json({status:200, data:agents});
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


