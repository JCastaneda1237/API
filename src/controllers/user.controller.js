const UserService = require("../services/user.service");

const createUser = async (req, res, next) => {
    try {
        const user = await UserService.createUser(req.body);
        res.status(201).json(user);
    } catch (err) {
        next(err);
    }
};

const getUsers = async (req, res, next) => {
    try {
        const users = await UserService.getAllUsers();
        res.json(users);
    } catch (err) {
        next(err);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const user = await UserService.getUserById(req.params.id);
        res.json(user);
    } catch (err) {
        next(err);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const updated = await UserService.updateUser(req.params.id, req.body);
        res.json(updated);
    } catch (err) {
        next(err);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        await UserService.deleteUser(req.params.id);
        res.status(204).send();
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};
