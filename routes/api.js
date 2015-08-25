var express = require('express')
  , router = express.Router()
  , api = require('../api')

router
  .post('/auth/signin', api.auth.signin)
  .post('/auth/signup', api.auth.signup)

module.exports = router;
