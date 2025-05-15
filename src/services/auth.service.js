const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const Auth = require('../models/auth.model');

const register = async ({ first_name, last_name, username, telephone, email, password, avatar, bio }) => {
    const existingUser = await Auth.findOne({ where: { email } });
    if (existingUser) throw new Error('Email already registered');

    const user = await User.create({ first_name, last_name, username, telephone, email, avatar, bio });
    const hashedPassword = await bcrypt.hash(password, 10);

    await Auth.create({
        id: user.id,
        email,
        password: hashedPassword
    });

    return { message: 'User registered successfully' };
};

const login = async (email, password) => {
    const auth = await Auth.findOne({ where: { email }, include: User });
    if (!auth) throw new Error('Invalid credentials');

    const isMatch = await bcrypt.compare(password, auth.password);
    if (!isMatch) throw new Error('Invalid credentials');

    const token = jwt.sign({ id: auth.id, email }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return token;
};

module.exports = {
    register,
    login
};