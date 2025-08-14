import path from "path";

require("dotenv").config({
  path: path.join(__dirname, "../../.env"),
  override: true,
});

const env = {
  port: process.env.SERVER_PORT || 3007,
  serviceName: process.env.SERVICE_NAME || "ts_demo",

  // Database
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbDatabase: process.env.DB_NAME,
};

module.exports = env;
