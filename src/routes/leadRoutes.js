const express = require('express');
const leadController = require('../controllers/leadController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Leads
 *   description: Lead management operations
 */

/**
 * @swagger
 * path:
 *  /api/leads:
 *    post:
 *      summary: Create a new lead
 *      tags: [Leads]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/LeadInput'
 *      responses:
 *        '201':
 *          description: Successfully created a new lead
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/LeadResponse'
 *        '500':
 *          description: Failed to create a new lead
 */
router.post('/leads', leadController.createLead);

/**
 * @swagger
 * path:
 *  /api/leads/{agentId}:
 *    get:
 *      summary: Get all leads for a specific agent
 *      tags: [Leads]
 *      parameters:
 *        - in: path
 *          name: agentId
 *          required: true
 *          description: ID of the agent
 *          schema:
 *            type: integer
 *      responses:
 *        '200':
 *          description: List of leads for the specified agent
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/LeadResponseArray'
 *        '404':
 *          description: No leads found for the specified agentId
 *        '500':
 *          description: Failed to fetch leads
 */
router.get('/leads/:agentId', leadController.getAllLeadsByAgentId);

/**
 * @swagger
 * path:
 *  /api/leads/{agentId}/{leadId}:
 *    put:
 *      summary: Update lead data for a specific agent and lead
 *      tags: [Leads]
 *      parameters:
 *        - in: path
 *          name: agentId
 *          required: true
 *          description: ID of the agent
 *          schema:
 *            type: integer
 *        - in: path
 *          name: leadId
 *          required: true
 *          description: ID of the lead
 *          schema:
 *            type: integer
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/LeadInput'
 *      responses:
 *        '200':
 *          description: Lead updated successfully
 *        '404':
 *          description: Lead not found or not associated with the specified agentId
 *        '500':
 *          description: Failed to update lead
 */
router.put('/leads/:agentId/:leadId', leadController.updateLeadByAgentId);

module.exports = router;
