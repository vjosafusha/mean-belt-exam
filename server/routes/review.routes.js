const { ReviewController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/:movie_id/reviews', ReviewController.getReviewsByMovieId)
  .get('/:review_id', ReviewController.show)
  .post('/:movie_id/reviews', ReviewController.createReview)
  .delete('/:movie_id/reviews/:review_id', ReviewController.destroyReview)
