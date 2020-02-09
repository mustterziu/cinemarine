const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    description: String,
    releaseYear: Number,
    image: {
        data: Buffer,
        contentType: String,
        fileName: String,
        encoding: String
    },
    trailerVideoUrl: String,
    director: String,
    genres: [String],
    cast: [{
        name: String,
    }],
    //todo move to another collection
    schedule: [{
        date: Date,
        slot: Number,
        room: String,
        hasRoom: Boolean,
        hasFinished: Boolean
    }],
    addedBy: {type: Schema.Types.Object, ref: 'User'}
});

module.exports = mongoose.model('Movie', movieSchema);
