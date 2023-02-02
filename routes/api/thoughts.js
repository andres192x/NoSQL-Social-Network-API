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

     // /api/thoughts/:thoughtId/reactions

     router
     .route('/:thoughtId/reactions')
      .post(addReaction);

    // /api/thoughts/:thoughtId/reactions/:reactionId

    router
    .route('/:thoughtId/reactions/:reactionId')
     .delete(deleteReaction);


  
  module.exports = router;