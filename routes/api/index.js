const router = require('express').Router();
const user = require('./user');
const thoughts = require('./thoughts');

router.use('/users', user);
router.use('/thoughts', thoughts);

module.exports = router;
