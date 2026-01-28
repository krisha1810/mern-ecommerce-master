const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MERN Ecommerce API',
      version: '1.0.0',
      description: 'API documentation for MERN Ecommerce application',
      contact: {
        name: 'MERN Ecommerce Support',
        email: 'support@example.com'
      }
    },
    servers: [
      {
        url: '/api',
        description: 'API Server'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            email: { type: 'string' },
            firstName: { type: 'string' },
            lastName: { type: 'string' },
            role: { type: 'string', enum: ['ROLE_MEMBER', 'ROLE_ADMIN', 'ROLE_MERCHANT'] },
            provider: { type: 'string' }
          }
        },
        Product: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            sku: { type: 'string' },
            name: { type: 'string' },
            slug: { type: 'string' },
            imageUrl: { type: 'string' },
            imageKey: { type: 'string' },
            description: { type: 'string' },
            quantity: { type: 'number' },
            price: { type: 'number' },
            taxable: { type: 'boolean' },
            isActive: { type: 'boolean' },
            brand: { type: 'string' } // Simplified for now
          }
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: ['./routes/api/*.js'] // Path to the API docs
};

const specs = swaggerJsdoc(options);

module.exports = specs;
