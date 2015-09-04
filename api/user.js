var User = require('../models').user
  , privateConfig = require('../_config')
  , _ = require('lodash')
  , jwt = require('jsonwebtoken')

var passwordHash = require('password-hash')
  , jwt = require('jsonwebtoken')

var methods = {

  all: function(req,res){
    User.find({}, function(err,users){
      res.json(users);
    })
  },

  count: function(req,res){
    User.count(function(err,count){
      if (err) {
        res.json(err);
      } else {
        res.json({
          count: count
        })
      }
    })
  },

  signup: function(req,res){
    var username = req.body.username
      , password = req.body.password

    var validate = /^\w{5,12}$/;

    if (username.match(validate)) {
      console.log('validate');
      var user = new User({
        username: username,
        password: passwordHash.generate(password),
        room: {
          name: username + '\'s Room',
          description: 'No description',
          game: 'unset',
          rtmp: '',
          show: false,
          onScreen: false
        }
      })

      user.save(function(err,newUser){
        if (err) {
          res.json({
            code: err.code
          })
        } else {
          var token = jwt.sign({userId: newUser._id, username: newUser.username}, privateConfig.auth.secretKey, {expiresInMinutes: 10800});
          res.json({
            code: '200',
            token: token,
            user: {
              id: newUser._id,
              username: newUser.username
            }
          })
        }
      })
    } else {
      // 用户名不合法
      res.json({
        code: '400'
      })
    }

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
            token: token,
            user: {
              id: signInUser._id,
              username: signInUser.username
            }
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
  },

  userUpdate: function(req,res){
    if (req.user.username === req.params.username) {
      var query = {
        room: {
          name: req.body.roomName,
          description: req.body.roomDescription,
          game: req.body.game,
          show: req.body.show
        }
      }
      User.findByIdAndUpdate(req.user.userId, query, function(err,user){
        if (err) {
          res.json(err)
        } else {
          res.json({
            code: '200',
            user: user
          })
        }
      })
    } else {
      res.json({
        code: '400',
        message: 'ACL'
      })
    }
  }
  // invalid signature - 无效token
  // jwt expired - token 过期
}

module.exports = methods;
