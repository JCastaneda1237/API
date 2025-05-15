const express = require("express");
const app = express();

app.use(express.json());

const userRoutes = require("./routes/user.route");
const authRoutes = require("./routes/auth.route");
const roleRoutes = require("./routes/role.route");
const userRoleRoutes = require("./routes/userRole.route");
const errorHandler = require("../middlewares/error");

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/user-roles", userRoleRoutes);
app.use(errorHandler);
module.exports = app;