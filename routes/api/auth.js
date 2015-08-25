var express = require('express')
  , router = express.Router()
  , api = require('../../api')

router
  .get('/list', api.auth.all)
  .post('/signin', api.auth.signin)
  .post('/signup', api.auth.signup)

module.exports = router;
