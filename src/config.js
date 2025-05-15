require("dotenv").config();

module.exports = {
    app: {
        port: process.env.PORT || 3000,
    },
    JWT: {
        secret: process.env.JWT_SECRET || "tallerApi",
        expireIn: process.env.JWT_EXPIRES_IN || "1h",
    },
    mysql: {
        host: process.env.MYSQL_HOST || "localhost",
        user: process.env.MYSQL_USER || "root",
        pasword: process.env.MYSQL_PASSWORD || "",
        database: process.env.MYSQL_DB || "apiAPI",
        port: process.env.MYSQL_PORT || 3306,
        dialect: process.env.MYSQL_DIALECT || "mysql",
    },
}