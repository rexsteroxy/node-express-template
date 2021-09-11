const { Router } = require("express");
const { forward } = require("../middlewares");

const routes = Router();

const {
  BT_AUTHENTICATION_MS_BASE_URL,
  BT_ADMIN_MS_BASE_URL,
  BT_SCHOOOL_MS_BASE_URL,
  BT_TEACHER_MS_BASE_URL,
  BT_STUDENT_MS_BASE_URL,
} = process.env;


console.log(BT_AUTHENTICATION_MS_BASE_URL);

//CURRENTLY VALID 
routes.use("/auth", forward(BT_AUTHENTICATION_MS_BASE_URL));
routes.use("/bt-admin", forward(BT_ADMIN_MS_BASE_URL));
routes.use("/school", forward(BT_SCHOOOL_MS_BASE_URL));
routes.use("/student", forward(BT_STUDENT_MS_BASE_URL));
routes.use("/teacher", forward(BT_TEACHER_MS_BASE_URL));

//ENDS HERE for now








module.exports = routes;
