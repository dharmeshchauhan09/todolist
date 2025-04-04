const User = require('../models/User');

// Example function for user registration
exports.register = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Example function for user login
exports.login = async (req, res) => {
    // Implement login logic here
};
