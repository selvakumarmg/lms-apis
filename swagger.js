// swagger.js
const swaggerJsDoc = require('swagger-jsdoc');

// Swagger JSDoc configuration options
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SPFINNACLE LMS',
      version: '1.0.0',
      description: 'Your API description',
    },
    servers: [
      {
        url: 'http://localhost:4000', // Replace this with your API server URL
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Replace with the path to your route files
};

const specs = swaggerJsDoc(options);
module.exports = specs;
