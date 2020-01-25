const Movie = require('../models/movie');

exports.getAllMovies = async (req, res, next) => {
    try {
        res.json(await Movie.find());
    } catch (e) {
        res.status(400).json({msg: 'error getting movies'})
    }
};

exports.getMovieById = async (req, res, next) => {
    const id = req.params.id;

    Movie.findById(id).then(movie => {
        if (movie == null) {
            res.status(200).json({msg: `movie with id: ${id} was not found`});
        }
        res.json(movie);
    }).catch(reason => {
        res.status(400).json({msg: 'error'});
    });
};

exports.postMovie = (req, res, next) => {
    const movie = new Movie(req.body);
    movie.save()
        .then(movie => {
            res.status(201).json(movie);
        })
        .catch(reason => {
            res.status(400).json({msg: 'error creating movie'});
        });
};

exports.updateMovie = (req, res, next) => {
    const id = req.params.id;
    Movie.findById(id)
        .then(movie => {
            movie.title = req.body.title;
            movie.genres = req.body.genres;
            return movie.save();
        })
        .then(updatedMovie => {
            res.status(200).json({msg: 'movie was updated', updatedMovie});
        })
        .catch(reason => {
        res.status(400).json({msg: 'error updating movie'})
    });
};

exports.deleteMovieById = (req, res, next) =>{
  const id = req.params.id;
  Movie.deleteOne({_id: id})
      .then(value => {
          res.status(200).json({msg: `movie with id: ${id} was deleted`});
      }).catch(reason => {
      res.status(400).json({msg: `error deleting movie with id: ${id}`})
  });
};
