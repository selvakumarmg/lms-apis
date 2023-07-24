// routes/register.js
const express = require('express');
const router = express.Router();
const registerController = require('../controllers/register');

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication endpoints
 */

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: User registration
 *     description: Register a new user.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               otp:
 *                 type: string
 *               address:
 *                 type: string
 *               city:
 *                 type: string
 *               state:
 *                 type: string
 *               pincode:
 *                 type: string
 *               pancard:
 *                 type: string
 *               password:
 *                 type: string
 *               termsChecked:
 *                 type: boolean
 *             required:
 *               - username
 *               - email
 *               - phone
 *               - otp
 *               - address
 *               - city
 *               - state
 *               - pincode
 *               - pancard
 *               - password
 *               - termsChecked
 *     responses:
 *       '201':
 *         description: User registration successful
 *       '500':
 *         description: Internal server error
 *       '400':
 *         description: Bad request
 */
router.post('/signup', registerController.createUser);


/**
 * @swagger
 * /api/auth/signin:
 *   post:
 *     summary: User login
 *     description: Login with user credentials.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       '200':
 *         description: Login successful
 *       '401':
 *         description: Unauthorized - Invalid credentials
 *       '500':
 *         description: Internal server error
 */
router.post('/signin', registerController.loginUser);

module.exports = router;

