const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 6,
        max: 16
    },
    email: {
        type: String,
        unique: true,
        required: true,
        min: 8,
        max: 255
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    role: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now()
    },
    config: {
        navbarColor: {
            type: String,
            default: '#FFFFFF'
        },
        navbarPosition: {
            type: String,
            default: 'fixed'
        },
        container: {
            type: String,
            default: 'container'
        }
    }
});

/**
 *
 * @type {Model<Document>}
 */
module.exports = mongoose.model('User', userSchema);
