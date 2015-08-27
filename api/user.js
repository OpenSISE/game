var User = require('../models').user
  , privateConfig = require('../_config')

var passwordHash = require('password-hash')
  , jwt = require('jsonwebtoken')

var methods = {

  all: function(req,res){
    User.find({}, function(err,users){
      res.json(users);
    })
  },

  signup: function(req,res){
    console.log('post singup')
    var username = req.body.username
      , password = req.body.password

    var user = new User({
      username: username,
      password: passwordHash.generate(password)
    })

    user.save(function(err,newUser){
      if (err) {
        console.log('Error in signUp:', err)
      } else {
        console.log('Success signUp for', newUser)
      }
    })
    res.send('fuck')
  },

  signin: function(req,res){
    var username = req.body.username
      , password = req.body.password

    User.findOne({
      username: req.body.username
    }, function(err, signInUser){
      if (err) {
        res.json(err)
      } else {
        signInUser = signInUser || '';
        if (signInUser !== '' && passwordHash.verify(password, signInUser.password)) {
          var token = jwt.sign({userId: signInUser._id, username: signInUser.username}, privateConfig.auth.secretKey, {expiresInMinutes: 10800});
          res.json({
            code: '200',
            token: token
          })
        } else {
          res.json({
            code: '400' // 用户名或密码错误
          })
        }
      }
    })
  },

  userInfo: function(req,res){
    var username = req.params.username;
    User.findOne({username: username}, function(err, user){
      if (err) {
        res.json(err);
      } else {
        if (user) {
          res.json({
            code: '200',
            id: user._id,
            username: user.username,
            room: user.room
          })
        } else {
          res.json({
            code: '400',
            message: 'user not found'
          })
        }
      }
    })
  }

  // invalid signature - 无效token
  // jwt expired - token 过期
}

module.exports = methods;
