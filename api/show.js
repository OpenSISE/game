var User = require('../models').user
  , _ = require('lodash')

var methods = {
  all: function(req,res){
    var query = {
      'room.show': true
    }
    User.find(query, 'room', function(err,shows){
      if (err) {
        res.json(err)
      } else {
        res.json(_.groupBy(shows, 'room.game'));
      }
    })
  }
}

module.exports = methods;
