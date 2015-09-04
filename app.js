var express = require('express')
  , app = express()
  , cors = require('cors')
  , bodyParser = require('body-parser')
  , morgan = require('morgan')
  , routes = require('./routes')
  , models = require('./models')
  , mongoose = require('mongoose')
  , privateConfig = require('./_config')

// mongodb
var db = mongoose.createConnection('localhost','sisegame');
db.on('error', function(err){
  console.log(err)
})

app.set('secretKey', privateConfig.auth.secretKey);
app.use(cors(privateConfig.cors));

// utils
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// static files setting
app.use('/assets', process.env.NODE_ENV === 'production' ? express.static('public/dist') : express.static('public/build'));

// router
app.use('/', routes.home);
app.use('/api/user', routes.api.user);
app.use('/api/show', routes.api.show);
// view engine
// app.set('views', './view');
// app.set('view engine', 'jade');

module.exports = app;
