var app = require('./app.js')
  , config = require('./config');

var env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

app.listen(config[env].port,function(){
  console.log('Run at', config[env].port);
})
