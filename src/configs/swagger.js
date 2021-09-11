const swaggerJsDoc = require("swagger-jsdoc");

const { port } = require("./env");

const swagger = {
  swaggerDefinition: {
    info: {
      version: "2.0.0",
      title: "Node Project Template",
      contact: { name: "Amadi Austin Chukwuemeka" },
      servers: [{ url: `http://localhost:${port}` }],
    },
  },
  apis: ["./src/swaggerDocs/**/*.yml"],
};

module.exports = swaggerJsDoc(swagger);
