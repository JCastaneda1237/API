const { body, validationResult } = require("express-validator");

const registerValidation = [
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
    body("username").notEmpty().withMessage("Username is required"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
        registerValidation
};
