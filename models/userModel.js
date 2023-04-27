const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user', enum: ['user', 'admin', 'superadmin'] },
}, { timestamps: true });

const User = mongoose.model('user', userSchema);

module.exports = User;
