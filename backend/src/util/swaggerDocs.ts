import swaggerJsDoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Cálculo de Distância API',
      version: '1.0.0',
      description: 'API para cálculo de distância entre endereços',
      contact: {
        name: 'Antonio Carlos',
      },
      servers: ['http://localhost:3333'],
    },
  },
  apis: ['src/controllers/*.ts'],
};

export const swaggerDocs = swaggerJsDoc(swaggerOptions);
