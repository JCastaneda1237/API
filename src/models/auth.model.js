const { DataTypes } = require("sequelize");
const sequelize = require("../db/db");
const User = require("./user.model");

const Auth = sequelize.define("Auth", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        references: {
            model: User,
            key: "id"
        }
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: DataTypes.STRING
});

User.hasOne(Auth, { foreignKey: "id" });
Auth.belongsTo(User, { foreignKey: "id" });

module.exports = Auth;
