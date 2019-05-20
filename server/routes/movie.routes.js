const { MovieController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/', MovieController.index)
  .post('/', MovieController.create)
  .get('/:movie_id', MovieController.show)
  .put('/:movie_id', MovieController.update)
  .delete('/:movie_id', MovieController.destroy)

