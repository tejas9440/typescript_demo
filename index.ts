const express = require("express");

const userRoutes = require("./src/Routes/user.route");
const app = express();
const PORT = process.env.SERVER_PORT || 4444;

app.use(express.json());
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
