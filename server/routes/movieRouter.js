const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movie.controller');

router.get('/', movieController.getAllMovies);

//todo validation
router.post('/', movieController.postMovie);

router.get('/:id', movieController.getMovieById);

//todo validation
router.put('/:id', movieController.updateMovie);

router.delete('/:id', movieController.deleteMovieById);

module.exports = router;
