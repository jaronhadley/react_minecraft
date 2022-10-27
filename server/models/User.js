const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true, trim: true},
    email: {type: String, required: true, unique: true},
    password: {},
    worlds: {},
});

const User = mongoose.model('User', userSchema);

module.exports = User;