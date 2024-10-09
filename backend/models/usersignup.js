const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSignupSchema = new Schema({
    email: {
        type: String,
        required: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email address'],
        unique: true, // Ensure email is unique
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    }
}, { timestamps: true });

const UserSignup = mongoose.model('UserSignup', userSignupSchema);

module.exports = UserSignup;
