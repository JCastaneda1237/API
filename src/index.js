const app = require("./app/app");
const sequelize = require("./db/db");
require("dotenv").config();

const Auth = require("./models/auth.model");
const User = require("./models/user.model");
const Role = require("./models/role.model");
const UserRole = require("./models/userRole.model");

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully.");

        await sequelize.sync({ alter: true }); // usar { force: true } solo si quieres borrar todo y crear de nuevo

        app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};

startServer();
