var express = require('express')
  , router = express.Router()
  , api = require('../../api')
  , jwtMiddleware = require('../../middlewares/jwt')

router
  .get('/', api.show.all)
  .get('/event', api.show.event)

module.exports = router;
