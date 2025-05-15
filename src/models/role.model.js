const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Role = sequelize.define('Role', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true
    },
    description: DataTypes.TEXT
});

module.exports = Role;
