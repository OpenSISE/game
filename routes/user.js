var express = require('express')
  , router = express.Router()
  , controllers = require('../controllers')

router
  .get('/signin', controllers.user.getSignin)

module.exports = router;
