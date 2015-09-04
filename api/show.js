var User = require('../models').user
  , _ = require('lodash')

var methods = {
  all: function(req,res){
    var query = {
      'room.show': true
    }
    User.find(query, 'room username', function(err,shows){
      if (err) {
        res.json(err)
      } else {
        res.json(_.groupBy(shows, 'room.game'));
      }
    })
  },

  event: function(req,res){
    var query = {
      'room.onScreen': true
    }
    User.findOne(query, 'room username', function(err,event){
      if (err) {
        res.json(err);
      } else {
        res.json(event);
      }
    })
  }
}

module.exports = methods;
