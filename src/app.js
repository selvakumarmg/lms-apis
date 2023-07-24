// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const specs = require('../swagger'); // Path to your swagger.js file
const db = require('./config/db');

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
const register = require('./routes/register');
app.use('/api/auth', register);

const agentRoutes = require('./routes/agentRoutes');
app.use('/api', agentRoutes);

// Serve Swagger UI at /api-docs
app.use('/', swaggerUi.serve, swaggerUi.setup(specs));

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
