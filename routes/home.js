var express = require('express')
  , router = express.Router()
  , controllers = require('../controllers')

router
  .get('/', controllers.home.getHome)

module.exports = router;
