const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//todo implementation
const scheduleSchema = new Schema({
    date: Date,
    slot: String,
    room: String,
    movie: {type: Schema.Types.ObjectId, ref: 'Movie'},
    addedBy: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Schedule', scheduleSchema);
