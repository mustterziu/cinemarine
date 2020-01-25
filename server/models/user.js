const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    email: Number,
    role: String,
    config:[{
        bgcolor: String,
        textcolor: String,
    }]
});

module.exports = mongoose.model('User', userSchema);
