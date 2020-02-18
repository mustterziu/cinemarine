import {authorize, admin} from "../helpers/verifyToken";

import express from "express";

import Movie from "../models/movie";
import validateMovie from '../validatiors/movieValidator';

const router = express.Router();
router.get('/', async (req, res, next) => {
    try {
        res.send(await Movie.find());
    } catch (e) {
        res.status(400).json({msg: 'error getting movies'})
    }
});

router.get('/latest', (req, res, next) => {
    Movie.find({comingSoon: false}).sort({addedAt: 'desc'}).limit(10)
        .then(value => {
            res.send(value);
        }).catch(reason => {
        console.log(reason)
    });
});

router.get('/upcoming', (req, res, next) => {
    console.log('upcoming route');
    Movie.find({comingSoon: true}).sort({addedAt: 'desc'}).limit(10)
        .then(value => {
            res.send(value);
        })
        .catch(reason => {
            console.log(reason)
        });
});

router.post('/', authorize, admin, (req, res, next) => {
    console.log(req.body);
    const {error} = validateMovie(req.body);
    if (error) {
        console.log('movie post route');
        res.status(422);
        return res.send(error.details[0].message);
    }
    let file = req.files.file;

    const movie = new Movie({
        image: {
            data: file.data,
            contentType: file.mimetype,
            fileName: file.name,
            encoding: file.encoding
        },
        title: req.body.title,
        description: req.body.description,
        releaseYear: req.body.releaseYear,
        trailerVideoUrl: req.body.trailerVideoUrl,
        director: req.body.director,
        comingSoon: req.body.comingSoon,
        genres: req.body.genres,
        cast: req.body.cast
    });

    movie.save()
        .then(movie => {
            res.status(201).json({msg: 'movie was saved successfully', movie});
        })
        .catch(reason => {
            res.status(400).json({msg: 'error creating movie'});
        });
});

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;

    Movie.findById(id).then(movie => {
        if (movie == null) {
            res.status(200).json({msg: `movie with id: ${id} was not found`});
        }
        res.json(movie);
    }).catch(reason => {
        res.status(400).json({msg: 'error'});
    });
});

router.put('/:id', authorize, admin, (req, res) => {
    const {error} = validateMovie(req.body);
    if (error) {
        res.status(422);
        return res.send(error.details[0].message);
    }

    const id = req.params.id;

    Movie.findById(id)
        .then(movie => {
            if (req.files !== null) {
                let file = req.files.file;
                movie.image = {
                    data: file.data,
                    contentType: file.mimetype,
                    fileName: file.name,
                    encoding: file.encoding
                }
            }
            movie.title = req.body.title;
            movie.description = req.body.description;
            movie.releaseYear = req.body.releaseYear;
            movie.trailerVideoUrl = req.body.trailerVideoUrl;
            movie.director = req.body.director;
            movie.comingSoon = req.body.comingSoon;
            movie.genres = req.body.genres;
            movie.cast = req.body.cast;
            return movie.save();
        })
        .then(updatedMovie => {

            res.status(200).json({msg: 'movie was updated', updatedMovie});
        })
        .catch(reason => {
            res.status(400).json({msg: 'error updating movie'})
            console.log(reason);
        });
});

router.put('/changeStatus/:id', authorize, admin, (req, res) => {
    const id = req.params.id;
    Movie.findById(id)
        .then(movie => {
            movie.comingSoon = req.body.value;
            return movie.save();
        })
        .then(updatedMovie => {
        res.send({msg: 'status changed', updatedMovie})
        })
        .catch(reason => {
            res.status(400).send({msg: 'error updating movie'});
            console.log(reason);
        });
});

router.delete('/:id', authorize, admin, (req, res, next) => {
    const id = req.params.id;
    Movie.deleteOne({_id: id})
        .then(value => {
            res.status(200).json({msg: `movie with id: ${id} was deleted`});
        }).catch(reason => {
        res.status(400).json({msg: `error deleting movie with id: ${id}`})
    });
});

module.exports = router;
