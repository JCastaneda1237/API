const { DataTypes } = require("sequelize");
const sequelize = require("../db/db");
const User = require("./user.model");
const Role = require("./role.model");

const UserRole = sequelize.define("UserRole", {
    user_id: {
        type: DataTypes.UUID,
        references: {
            model: User,
            key: "id"
        }
    },
    role_id: {
        type: DataTypes.UUID,
        references: {
            model: Role,
            key: "id"
        }
    }
}, 
{
    timestamps: false
});

User.belongsToMany(Role, { through: UserRole, foreignKey: "user_id" });
Role.belongsToMany(User, { through: UserRole, foreignKey: "role_id" });

module.exports = UserRole;
