const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//not used
const contactSchema = new Schema({
    title: String,
    image: { data: Buffer, contentType: String },
    mimeType: String,
    fileName: String,
    encoding: String
});

/**
 *
 * @type {Model<Document>}
 */
module.exports = mongoose.model('image', contactSchema);
