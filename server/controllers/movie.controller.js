const Movie = require('mongoose').model('Movie');
// const Review = require('mongoose').model('Review');

const { Http } = require('@status/codes');

module.exports = {
  index(_req, res) {
    Movie.find({})
      .then(movies => res.json(movies))
      .catch(error => res.status(Http.InternalServerError).json(error));
  },

  show(req, res) {
    const { movie_id: MovieId } = req.params;
    Movie.findById(MovieId)
      .then(product => res.json(product))
      .catch(error => res.status(Http.NoContent).json(error));
  },
  create(req, res) {
    Movie.create(req.body)
      .then(movie => res.json(movie))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        res.status(Http.UnprocessableEntity).json(errors);
      });
  },
  update(req, res) {
    const { movie_id: MovieId } = req.params;
    Movie.findByIdAndUpdate(MovieId, {
      name: req.body.name,
      review: req.body.review
    })
      .then(movie => res.json(movie))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        res.status(Http.UnprocessableEntity).json(errors);
      });
  },
  destroy(req, res) {
    const { movie_id: MovieId } = req.params;
    Movie.findByIdAndRemove(MovieId)
      .then(movie => res.json(movie))
      .catch(error => res.status(Http.UpgradeRequired).json(error));
  },


};
