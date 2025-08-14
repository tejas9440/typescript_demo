import { DataSource } from "typeorm";
import { database } from "../../src/config/Var";
import { User } from "../Entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: database.host,
  port: database.port,
  username: database.user,
  password: database.password,
  database: database.database,
  entities: [User],
  synchronize: true,
});
