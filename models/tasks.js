const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    taskName: String,
    time: String,
    date: String,
})

const User = mongoose.model('User', userSchema);

module.exports = User;