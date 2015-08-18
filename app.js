var express = require('express')
  , app = express()
  , routes = require('./routes')

// static files setting
app.use(process.env.NODE_ENV === 'production' ? express.static('public/dist') : express.static('public/dev'));

// router
app.use('/', routes.home);

// view engine
app.set('views', process.env.NODE_ENV === 'production' ? './view/dist' : './view/dev')
app.set('view engine', 'jade');

module.exports = app;
