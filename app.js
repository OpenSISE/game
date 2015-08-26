var express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , morgan = require('morgan')
  , routes = require('./routes')
  , models = require('./models')
  , mongoose = require('mongoose')

// mongodb
var db = mongoose.createConnection('localhost','sisegame');
db.on('error', function(err){
  console.log(err)
})

// utils
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// static files setting
app.use('/assets', process.env.NODE_ENV === 'production' ? express.static('public/dist') : express.static('public/build'));

// router
app.use('/', routes.home);
app.use('/api/user', routes.api.user);

// view engine
// app.set('views', './view');
// app.set('view engine', 'jade');

module.exports = app;
