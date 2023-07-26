const express = require('express');
const router = express.Router();
const agentController = require('../controllers/agentController');

// Routes with Swagger annotations
/**
 * @swagger
 * tags:
 *   name: Agents
 *   description: API endpoints for managing agents
 */

/**
 * @swagger
 * /agents:
 *   get:
 *     summary: Get all agents
 *     tags: [Agents]
 *     responses:
 *       200:
 *         description: Array of agents
 *       500:
 *         description: Internal Server Error
 */
router.get('/agents', agentController.getAllAgents);

/**
 * @swagger
 * /agents/status:
 *   put:
 *     summary: Update agent status
 *     tags: [Agents]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               agentId:
 *                 type: number
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Agent status updated successfully
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
router.put('/agents/status', agentController.updateAgentStatus);

/**
 * @swagger
 * /agents/getdetails:
 *   post:
 *     summary: Get agent details by ID
 *     tags: [Agents]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               agentId:
 *                 type: number
 *             required:
 *               - agentId
 *     responses:
 *       200:
 *         description: Agent details retrieved successfully
 *       404:
 *         description: Agent not found
 *       500:
 *         description: Internal Server Error
 */
router.post('/agents/getdetails', agentController.getAgent);

module.exports = router;
