const Lead = require('../models/leadModel');

exports.createLead = async (req, res) => {
  try {
    const result = await Lead.create(req.body);
    const newLeadId = result[0].insertId;
    res.status(201).json({ status:201, id: newLeadId, message: 'Lead created successfully' });
  } catch (error) {
    console.error('Error creating lead:', error);
    res.status(500).json({ error: 'Failed to create lead' });
  }
};

exports.getAllLeadsByAgentId = async (req, res) => {
    const agentId = req.params.agentId;
    try {
      const [rows] = await Lead.getAllLeadsByAgentId(agentId);
      if (rows.length === 0) {
        return res.status(404).json({ error: 'No leads found for the specified agentId' });
      }
      res.json({status:200,data:rows});
    } catch (error) {
      console.error('Error fetching leads:', error);
      res.status(500).json({ error: 'Failed to fetch leads' });
    }
  };

  exports.updateLeadByAgentId = async (req, res) => {
    const agentId = req.params.agentId;
    const leadId = req.params.leadId;
    try {
      // Check if the lead exists and is associated with the specified agent
      const [existingLeads] = await Lead.getAllLeadsByAgentId(agentId);
      const leadToUpdate = existingLeads.find((lead) => lead.id === parseInt(leadId));
  
      if (!leadToUpdate) {
        return res.status(404).json({ error: 'Lead not found for the specified agentId' });
      }
  
      // Update the lead data
      const result = await Lead.update(leadId,agentId, req.body);
  
      if (result[0].affectedRows === 0) {
        return res.status(404).json({ error: 'Lead not found' });
      }
  
      res.json({ message: 'Lead updated successfully' });
    } catch (error) {
      console.error('Error updating lead:', error);
      res.status(500).json({ error: 'Failed to update lead' });
    }
  };
  
  
