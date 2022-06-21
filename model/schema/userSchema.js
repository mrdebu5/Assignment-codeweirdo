const mongoose = require('mongoose');

const Schema = mongoose.Schema(
    {
        fname: String,
        lname: String,
        email: String,
        state: String,
        password: String,
        city: String,
        country: String
    }
);

const userSchema = mongoose.model('users', Schema);
module.exports = userSchema;