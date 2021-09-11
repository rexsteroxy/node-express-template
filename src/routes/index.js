const { Router } = require("express");
const { response } = require("../helpers");
const route = require("./bleautech-services");

const routes = Router();
routes.use("", route);

routes.use((_, res) => {
  response(res, { status: false, message: "Route not found" }, 404);
});

module.exports = routes;
