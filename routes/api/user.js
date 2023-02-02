const router = require('express').Router();

const {
    getUsers,
    getSingleUsers,
    createUsers,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend,
  } = require('../../controllers/userController');
  
  // /api/users
  router.route('/').get(getUsers).post(createUsers);
  
  // /api/users/:userId
  router
    .route('/:userId')
    .get(getSingleUsers)
    .put(updateUsers)
    .delete(deleteUsers);

       // /api/users/:userId/friends

       router
       .route('/:userId/friends/:friendId')
        .post(addFriend);
  
     // /api/users/:userId/friends/:friendId
  
      router
      .route('/:userId/friends/:friendId')
       .delete(deleteFriend);
  
  module.exports = router;