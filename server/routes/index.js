const movieRouter = require('./movie.routes')
const reviewRouter = require('./review.routes')
const router = require('express').Router();

module.exports = router.use('/movies', movieRouter, reviewRouter);

