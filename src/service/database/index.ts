import { Pool, types } from "pg";
import { database } from "../../config/Var";

const dbConfig = {
  user: database.user,
  password: database.password,
  host: database.host,
  port: database.port,
  database: database.database,
  max: 80,
  ssl: false,
  // ssl: {
  //   rejectUnauthorized: false,
  // },

  connectionTimeoutMillis: 30000, // How long (in milliseconds) the client will wait when first trying to connect before giving up. 30 seconds
  idleTimeoutMillis: 900000, // How long a client in the connection pool can sit idle (unused) before being closed. (15 minutes X 60 seconds X 1000 milliseconds == 15 minutes)
  statement_timeout: 30000, // Tells PostgreSQL to cancel any SQL statement that takes longer than this time. 30 seconds.
  query_timeout: 30000, //Client-side timeout — if the query doesn’t return in this time, the client will abort it. 30 seconds.
};
types.setTypeParser(1700, (val) => parseFloat(val));

export const pool = new Pool(dbConfig);
pool.on("connect", () => {
  console.log("Database connected successfully");
});
