var express = require('express')
  , router = express.Router()
  , api = require('../../api')
  , jwtMiddleware = require('../../middlewares/jwt')

router
  .get('/', api.user.all)
  .get('/count', api.user.count)
  
  .post('/signin', api.user.signin)
  .post('/signup', api.user.signup)

  .get('/:username', api.user.userInfo)
  .put('/:username', jwtMiddleware, api.user.userUpdate)


module.exports = router;
