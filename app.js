var express = require('express')
  , app = express()
  , routes = require('./routes')

// static files setting
app.use(process.env.NODE_ENV === 'production' ? express.static('public/dist') : express.static('public/dev'));

// router
app.use('/', routes.home);
app.use('/user', routes.user);

// view engine
app.set('views', './view');
app.set('view engine', 'jade');

module.exports = app;
