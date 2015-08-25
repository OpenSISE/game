var express = require('express')
  , router = express.Router()
  , api = require('../../api')

router
  .get('/list', api.user.all)
  .post('/signin', api.user.signin)
  .post('/signup', api.user.signup)

module.exports = router;
