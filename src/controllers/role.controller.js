const RoleService = require('../services/role.service');

const createRole = async (req, res, next) => {
    try {
        const role = await RoleService.createRole(req.body);
        res.status(201).json(role);
    } catch (err) {
        next(err);
    }
};

const getRoles = async (req, res, next) => {
    try {
        const roles = await RoleService.getAllRoles();
        res.json(roles);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createRole,
    getRoles
};
