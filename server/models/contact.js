const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: Number, required: true},
    message: {type: String, required: true},
    date: {type: Date, default: Date.now()}
});

/**
 *
 * @type {Model<Document>}
 */
module.exports = mongoose.model('message', contactSchema);
