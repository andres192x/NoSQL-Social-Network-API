const router = require('express').Router();

const {
    getThoughts,
    getSingleThoughts,
    createThoughts,
    updateThoughts,
    deleteThoughts,
  } = require('../../controllers/thoughtController');
  
  // /api/thoughts
  router.route('/').get(getThoughts).post(createThoughts);
  
  // /api/Thoughts/:userId
  router
    .route('/:thoughtId')
    .get(getSingleThoughts)
    .put(updateThoughts)
    .delete(deleteThoughts);
  
  module.exports = router;