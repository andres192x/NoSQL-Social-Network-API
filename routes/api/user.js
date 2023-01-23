const router = require('express').Router();

const {
    getUsers,
    getSingleUsers,
    createUsers,
    updateUsers,
    deleteUsers,
  } = require('../../controllers/userController');
  
  // /api/users
  router.route('/').get(getUsers).post(createUsers);
  
  // /api/users/:userId
  router
    .route('/:userId')
    .get(getSingleUsers)
    .put(updateUsers)
    .delete(deleteUsers);
  
  module.exports = router;