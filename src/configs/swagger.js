const swaggerJsDoc = require("swagger-jsdoc");

const { port } = require("./env");

const swagger = {
  swaggerDefinition: {
    host: `${process.env.BT_GATEWAY_MS_BASE_URL}/auth`,
    info: {
      version: "2.0.0",
      title: "BleauTech School Service API",
      contact: { name: "Amadi Austin Chukwuemeka" },
      servers: [{ url: `http://localhost:${port}` }],
    },
  },
  apis: ["./src/swaggerDocs/**/*.yml"],
};

module.exports = swaggerJsDoc(swagger);
