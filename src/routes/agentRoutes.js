// routes/agentRoutes.js
const express = require('express');
const router = express.Router();
const agentController = require('../controllers/agentController');

router.get('/agents', agentController.getAllAgents);
router.put('/agents/:id/status', agentController.updateAgentStatus);

module.exports = router;
