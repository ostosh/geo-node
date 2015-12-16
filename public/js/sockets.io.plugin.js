var socket = io();

$(window).on('beforeunload', function(){
   socket.close();
});

