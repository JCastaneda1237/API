const Role = require("../models/role.model");

const createRole = async (data) => {
    return await Role.create(data);
};

const getAllRoles = async () => {
    return await Role.findAll();
};

module.exports = {
    createRole,
    getAllRoles
};
