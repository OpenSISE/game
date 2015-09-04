var mongoose = require('mongoose')
  , db = require('../db')
  , Schema = mongoose.Schema

var userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  room: {
    name: String,
    description: String,
    show: Boolean,
    rtmp: String,
    game: String,
    onScreen: Boolean,
    screenTitle: String,
    screenSubTitle: String
  }
})

var User = mongoose.model('User', userSchema);

module.exports = User;
