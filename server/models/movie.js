const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    description: String,
    releaseYear: Number,
    imageUrl: String,
    trailerVideoUrl: String,
    director: String,
    genres: [String],
    cast: [{
        name: String,
    }],
    schedule: [{
        time: Date,
        room: String,
        //roomId todo relation
        hasRoom: Boolean,
        hasFinished: Boolean
    }],
    addedBy: {type: Schema.Types.Object, ref: 'User'}
});

/**
 *
 * @type {Model}
 */
module.exports = mongoose.model('Movie', movieSchema);
