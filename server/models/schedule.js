const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//todo implementation
const scheduleSchema = new Schema({
    date: Date,
    slot: Number,
    room: String,
    hasRoom: Boolean,
    hasFinished: Boolean,
    movie: {type: Schema.Types.ObjectId, ref: 'Movie'},
    addedBy: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Schedule', scheduleSchema);
