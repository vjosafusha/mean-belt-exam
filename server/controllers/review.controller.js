const Review = require('mongoose').model('Review');
const { Http } = require('@status/codes');

module.exports = {
  show(req, res) {
    const { review_id: ReviewId } = req.params;
    Review.findById(ReviewId)
      .then(review => res.json(review))
      .catch(error => res.status(Http.NoContent).json(error));
  },
  createReview(req, res) {
    req.body.movie = req.params.movie_id
    Review.create(req.body)
      .then(review => res.json(review))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        res.status(Http.UnprocessableEntity).json(errors);
      });
  },
  destroyReview(req, res) {
    const { review_id: ReviewId } = req.params;
    Review.findByIdAndRemove(ReviewId)
      .then(review => res.json(review))
      .catch(error => res.status(Http.UpgradeRequired).json(error));
  },

  getReviewsByMovieId(req, res) {
    const movie_id = req.params.movie_id;
    Review.find({ movie: movie_id })
      .then(reviews => res.json(reviews))
      .catch(error => res.status(Http.InternalServerError).json(error));
  }
}
