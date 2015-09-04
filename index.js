var app = require('./app.js')
  , config = require('./config');

var env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

// socket.io
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  socket.on('join', function(info){
    socket.join(info.room);
  })
  socket.on('chat', function(msg){
    console.log(msg);
    socket.in(msg.room).emit('chat', msg);
  })
})

http.listen(config[env].port,function(){
  console.log('Run at', config[env].port);
})
