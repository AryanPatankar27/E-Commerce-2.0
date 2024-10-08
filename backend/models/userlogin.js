const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userLoginSchema = new Schema({
    email: {
        type: String,
        required: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email address'],
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    }
}, { timestamps: true });

const UserLogin = mongoose.model('UserLogin', userLoginSchema);

module.exports = UserLogin;
