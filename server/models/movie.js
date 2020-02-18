const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
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
    cast: [String],
    comingSoon: {type: Boolean, default: false},
    addedAt: {type: Date, default: Date.now()},
    addedBy: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Movie', movieSchema);
