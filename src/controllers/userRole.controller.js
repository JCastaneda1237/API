const UserRoleService = require('../services/userRole.service');

const assignRoleToUser = async (req, res, next) => {
    try {
        const result = await UserRoleService.assignRole(req.body.user_id, req.body.role_id);
        res.status(201).json(result);
    } catch (err) {
        next(err);
    }
};

const getUserRoles = async (req, res, next) => {
    try {
        const roles = await UserRoleService.getUserRoles(req.params.userId);
        res.json(roles);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    assignRoleToUser,
    getUserRoles
};
