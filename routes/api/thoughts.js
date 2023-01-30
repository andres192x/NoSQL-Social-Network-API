const router = require('express').Router();

const {
    getThoughts,
    getSingleThoughts,
    createThoughts,
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction,
  } = require('../../controllers/thoughtController');
  
  // /api/thoughts
  router.route('/').get(getThoughts).post(createThoughts);
  
  // /api/thoughts/:userId
  router
    .route('/:thoughtId')
    .get(getSingleThoughts)
    .put(updateThoughts)
    .delete(deleteThoughts);

     // /api/thougthts/:thoughtId/reactions

     router
     .route('/:thoughtId/reactions')
      .post(addReaction);

    // /api/thougthts/:thoughtId/reactions/:reactionId

    router
    .route('/:thoughtId/reactions/:reactionId')
     .delete(deleteReaction);


  
  module.exports = router;