const AuthService = require("../services/auth.service");

const register = async (req, res, next) => {
    try {
        const result = await AuthService.register(req.body);
        res.status(201).json(result);
    } catch (err) {
        next(err);
    }
    };

const login = async (req, res, next) => {
    try {
        const token = await AuthService.login(req.body.email, req.body.password);
        res.json({ token });
    } catch (err) {
        next(err);
    }
    };

module.exports = {
    register,
    login
};