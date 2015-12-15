var express = require('express');
var app = express();
var http = require('http').Server(app);
var routes = require('./routes');
var io = require('socket.io')(http);

app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.get('/', routes.index);

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(msg){
    console.log('broadcasting message: ' + msg);
    socket.broadcast.emit('chat message', msg);
  });
  socket.on('disconnect', function(){
  		console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
