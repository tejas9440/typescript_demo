import "reflect-metadata";
const express = require("express");
const { AppDataSource } = require("./TypeORM_Demo/config/db");
import typrORMUserRoute from "./TypeORM_Demo/Routes/user.route";
const userRoutes = require("./src/Routes/user.route");
const app = express();
const PORT = process.env.SERVER_PORT || 4444;

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/typeorm/user", typrORMUserRoute);

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err: any) => console.error("DB Connection Error:", err));
