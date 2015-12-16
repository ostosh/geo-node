var express = require('express');
var app = express();
var http = require('http').Server(app);
var routes = require('./routes');
var io = require('socket.io')(http);

app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.get('/', routes.index);

var userCount = 0;
var mapPoints = [];

io.on('connection', function(socket){
  console.log('user login');
		io.sockets.emit('user-count-update', ++userCount);

  
		socket.on('disconnect', function(){
				console.log('user logout');
				io.sockets.emit('user-count-update', --userCount);
  });

		socket.on('map-point-add', function(data) {
				console.log('user add point');
  		mapPoints.push(data);
    socket.broadcast.emit('map-point-update', data);
		});  

});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
