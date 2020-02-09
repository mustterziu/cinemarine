import {authorize} from "../helpers/verifyToken";

const express = require('express');
const router = express.Router();

const Movie = require('../models/movie');

router.get('/', async (req, res, next) => {
    try {
        res.send(await Movie.find());
    } catch (e) {
        res.status(400).json({msg: 'error getting movies'})
    }
});

//todo validation
router.post('/', authorize, (req, res, next) => {
    const movie = new Movie(req.body);

    movie.save()
        .then(movie => {
            res.status(201).json(movie);
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

//todo validation
router.put('/:id', authorize, (req, res) => {
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
});

router.delete('/:id', authorize, (req, res, next) =>{
    const id = req.params.id;
    Movie.deleteOne({_id: id})
        .then(value => {
            res.status(200).json({msg: `movie with id: ${id} was deleted`});
        }).catch(reason => {
        res.status(400).json({msg: `error deleting movie with id: ${id}`})
    });
});

module.exports = router;
