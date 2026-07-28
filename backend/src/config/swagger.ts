import swaggerJsdoc from 'swagger-jsdoc';
import path from 'path';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'Innomine API Documentation',
      version: '1.0.0',
      description: 'API documentation for the Innomine premium innovation marketplace.',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development Server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [
    path.join(__dirname, '../modules/**/*.swagger.{ts,js}'),
    path.join(__dirname, '../modules/**/*.routes.{ts,js}'),
    path.join(__dirname, '../modules/**/*.controller.{ts,js}'),
    path.join(__dirname, '../modules/**/*.{ts,js}'),
  ],
};

export const swaggerSpec = swaggerJsdoc(options);
