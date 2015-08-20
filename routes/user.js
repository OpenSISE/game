var express = require('express')
  , router = express.Router()
  , controllers = require('../controllers')

router
  .get('/sign', controllers.user.getSign)

module.exports = router;
