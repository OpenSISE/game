var User = require('../models').user;

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
      password: password
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

  }
}

module.exports = methods;
