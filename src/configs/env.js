const Joi = require("joi");

require("dotenv").config();

const schema = Joi.object({
  NODE_ENV: Joi.string()
    .valid("development", "production", "test", "provision")
    .default("development"),
  PORT: Joi.number().required(),
  BT_AUTHENTICATION_MS_BASE_URL: Joi.string().uri().required(),
  BT_ADMIN_MS_BASE_URL: Joi.string().uri().required(),
  BT_SCHOOOL_MS_BASE_URL: Joi.string().uri().required(),
  BT_TEACHER_MS_BASE_URL: Joi.string().uri().required(),
  BT_STUDENT_MS_BASE_URL: Joi.string().uri().required(),
  SECRET: Joi.string().required(),
})
  .unknown()
  .required();

const { error, value: env } = schema.validate(process.env);

if (error) {
  console.error(`Config validation error: ${error.message}`);
  return;
}

const config = {
  env: env.NODE_ENV,
  port: env.PORT,
  dbURL: env.DB_URL,
};

module.exports = config;
