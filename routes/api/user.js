var express = require('express')
  , router = express.Router()
  , api = require('../../api')

router
  .get('/', api.user.all)
  .get('/:username', api.user.userInfo)
  .post('/signin', api.user.signin)
  .post('/signup', api.user.signup)

module.exports = router;
