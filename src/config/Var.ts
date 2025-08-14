const env = require("./env");

export const PORT = env.port;
export const database = {
  host: env.dbHost,
  port: env.dbPort,
  user: env.dbUser,
  password: env.dbPassword,
  database: env.dbDatabase,
};
