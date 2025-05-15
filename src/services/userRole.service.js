const UserRole = require("../models/userRole.model");
const Role = require("../models/role.model");
const User = require("../models/user.model");

const assignRole = async (user_id, role_id) => {
    return await UserRole.create({ user_id, role_id });
};

const getUserRoles = async (userId) => {
    const user = await User.findByPk(userId, {
        include: {
            model: Role,
            through: { attributes: [] }
        }
    });

    if (!user) throw new Error("User not found");
    return user.Roles;
};

module.exports = {
    assignRole,
    getUserRoles
};
