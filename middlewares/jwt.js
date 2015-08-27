var jwt = require('jsonwebtoken')
  , privateConfig = require('../_config')

// 用于验证 token 的中间件
module.exports = function(req,res,next){
  var token = req.body.token || req.query.token;
  if (!token) {
    res.send({
      code: '400',
      message: 'token is required'
    })
  } else {
    jwt.verify(token, privateConfig.auth.secretKey, function(err,user){
      if (err) {
        res.json({
          code: '401',
          message: err.message
        })
      } else {
        req.user = user;
        next();
      }
    })
  }
}
