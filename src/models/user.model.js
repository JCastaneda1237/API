const { DataTypes } = require("sequelize");
const sequelize = require("../db/db");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: {
        type: DataTypes.STRING,
        unique: true
    },
    telephone: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    avatar: DataTypes.TEXT,
    bio: DataTypes.TEXT
});

module.exports = User;

