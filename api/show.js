var User = require('../models').user;

var methods = {
  all: function(req,res){
    var query = {
      'room.show': true
    }
    User.find(query, 'room', function(err,shows){
      if (err) {
        res.json(err)
      } else {
        res.json(shows);
      }
    })
  }
}

module.exports = methods;
