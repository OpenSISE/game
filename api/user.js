var User = require('../models').user;

var passwordHash = require('password-hash');

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
        if (passwordHash.verify(password, signInUser.password)) {
          res.send('Success');
        } else {
          res.json({
            signInUserPassword: signInUser.password,
            password: password
          })
        }
      }
    })
  }
}

module.exports = methods;
