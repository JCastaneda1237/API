const { Sequelize } = require("sequelize");
const config = require("../config");

const sequelize = new sequelize(
    config.mysql.database,
    config.mysql.user,
    config.mysql.pasword,
    {
        host: config.mysql,host,
        dialect: config.mysql.dialect,
        port: config.mysql.port
    }
);

module.exports = sequelize;