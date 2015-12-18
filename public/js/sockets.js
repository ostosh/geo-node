(function(window) {

  function initSocket(){
    var socket = io();
    var id;

    socket.on('connect', function(){
      id	= socket.io.engine.id;
      if(!Types.isString(id))
        throw "Error: sockets.io connection failure.";
      console.log(id);
    });

    window.onbeforeunload = function(e){
      socket.close();
    };

    return{
      socket : socket,
      id : socket.io.engine.id
    }
  }

  function initController(){
    var socketWrapper = initSocket();

    function getSessionID(){
      return socketWrapper.socket.io.engine.id;		
    }

    function registerListener(messageid, callback){
      if(!Types.isString(messageid))
        throw "Error: cannot register socket.io listener with invalid messageid.";

      if(!Types.isFunction(callback))
        throw "Error: cannot register socket.io listener with invalid callback.";

      socketWrapper.socket.on(messageid, function(data){
        callback(data);
      });
    }

     function emit(messageid, data){
      if(!Types.isString(messageid))
        throw "Error: cannot emit socket.io event with invalid messageid.";
						
      if(Types.isUndefined(data) || Types.isNull(data))
        throw "Error: cannot emit socket.io event with invalid data.";

      socketWrapper.socket.emit(messageid, data);
    }

    return{
      getSessionID : getSessionID,
      registerListener : registerListener,
      emit : emit
    }
  }

  window.SocketController = initController();

}(window));
