const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

exports.signupUser = async (req, res) => {
    const { firstName, lastName, username, email, password, role } = req.body;

    try {
        //check if user exists
        const user_exists = await User.findOne({ email });
        if (user_exists) return res.status(400).json({ message: 'User already exists' });

        //hash user password
        const hashed_password = await bcrypt.hash(password, 10);

        //create new user

        const user = new User({
            firstName,
            lastName,
            username,
            email,
            password: hashed_password,
            role
        });
        user.save();

        res.status(200).json({ message: 'User created successfully', user: {
            firstName, lastName, username, email, role
        } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        //check if user exists
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'User does not exist' });

        //check if password is correct
        const password_correct = await bcrypt.compare(password, user.password);
        if (!password_correct) return res.status(400).json({ message: 'Invalid credentials' });

        //save session


        //send response
        res.status(200).json({ message: 'User logged in successfully', user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json({ message: 'Users fetched successfully', "length": users.length, users: users });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}