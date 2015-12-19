(function(window) {  

  var simulator = {};
  var observers = [];
  var path = [];
  var positionIndex= 0;
  var running = false;
 

  function isCoord(coord){
    if(!Types.isObject(coord))
      return false;
    if(!Types.isArray(coord['latlng']))
      return false;
    if(!Types.isNumber(coord['latlng'][0]))
      return false;
    if(!Types.isNumber(coord['latlng'][1]))
      return false;
    if(!Types.isNumber(coord['dur']))
      return false;
    return true;
  }
  
  
  function update(){
    if(!running)
      clearTimeout(wait);

    positionIndex++;
    for(var observer in observers)
      observer(path[positionIndex]['latlng']);
    
    var wait = setTimeout(update, path[positionIndex]['dur']);
  }

  function addCoordinates(coords){
   if(!Types.isArray(coords))
     throw "Error: invalid coordinates array given.";

    for(var i in coords){
      if(!isCoord(coords[i]))
        throw "Error: invalid coordinate object given.";
    }
    path = path.concat(coords);
  }
  
  function addObservers(observer){
      if(Types.isFunction(observer))
        observers.push(observer);
      else if(Types.isArray(observer) || Types.isObject(observer)){
        for(var child in observer)
          addObservers(child);
      }else 
        throw "Error: cannot register sim observer with invalid callback.";
   }

  function start(coords, observers){
    running = true;    
    update();
  } 

  function stop(coords, observers){
    running = false;
  }     

  window.geo_simulator = {
    addCoordinates : addCoordinates,
    addObservers : addObservers,
    start : start,
    stop : stop
  };

}(window));

path=[];
path.push({ latlng: [-73.93542834472656, 40.85339308567513], dur:200 });
path.push({ latlng: [-73.93562834472656, 40.85319308567513], dur:200 });	
path.push({ latlng: [-73.93572834472656, 40.85349308567513], dur:200 });	
path.push({ latlng: [-73.93582834472656, 40.85339308567513], dur:200 });	
path.push({ latlng: [-73.93592834472656, 40.85329308567513], dur:200 });	
path.push({ latlng: [-73.93102834472656, 40.85319308567513], dur:200 });	
path.push({ latlng: [-73.93522834472656, 40.85349308567513], dur:200 });	
path.push({ latlng: [-73.93532834472656, 40.85369308567513], dur:200 });	
path.push({ latlng: [-73.93542834472656, 40.85379308567513], dur:200 });			
path.push({ latlng: [-73.93552834472656, 40.85389308567513], dur:200 });			
path.push({ latlng: [-73.93562834472656, 40.85399308567513], dur:200 });			
path.push({ latlng: [-73.93572834472656, 40.85319308567513], dur:200 });			

var exampleObserver = function(){                
  var updateObject = {id: Date.now(), latlng: e.latlng};
  SocketController.emit('user-point-move', updateObject);
};
           
geo_simulator.addCoordinates(path);
geo_simulator.addObservers(exampleObserver);



