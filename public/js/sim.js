(function(window) {  

  var simulator = {};
  var observers = [];
  var path = [];
  var positionIndex = 0;
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

    positionIndex = positionIndex + 1;
    if(positionIndex >= path.length)
      reset();

    for(var i in observers)
      observers[i](path[positionIndex]['latlng']);
    
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
          addObservers(observer[child]);
      }else 
        throw "Error: cannot register sim observer with invalid callback.";
   }

  function start(){
    running = true;    
    update();
  } 

  function stop(){
    running = false;
  }

  function reset(){
   positionIndex = 0;
  }      

  window.geo_simulator = {
    addCoordinates : addCoordinates,
    addObservers : addObservers,
    start : start,
    stop : stop,
    reset : reset
  };

}(window));

var path = 

[
  {
    "latlng": [
      40.85341922702844,
      -73.93471162766218
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85342277740043,
      -73.93471799790859
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85342810295806,
      -73.93473241478205
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85343216052551,
      -73.93474213778973
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.853436471690614,
      -73.93475454300642
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.853440782855465,
      -73.93477097153664
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85344915158641,
      -73.93479209393263
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.8534554915334,
      -73.93481221050024
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85346005629484,
      -73.93482930958271
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85346690343643,
      -73.93485378473997
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.8534714681971,
      -73.93487356603146
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85347730094639,
      -73.93489133566618
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.853481104913044,
      -73.93490172922611
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85348541607499,
      -73.93491480499506
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85348998083437,
      -73.9349315688014
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.8534950961624,
      -73.93494062125683
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.853495052788894,
      -73.93495034426451
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.8534980959614,
      -73.9349664375186
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85350367511066,
      -73.93498253077269
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.853509761454774,
      -73.93499795347451
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.853513311821914,
      -73.93501337617636
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.853518130176994,
      -73.93503282219172
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85352142694609,
      -73.9350475743413
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.853525991703,
      -73.93506567925215
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85352928847167,
      -73.9350727505081
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85353436042319,
      -73.9350888133049
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.8535394323743,
      -73.93510222434998
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.853540446764455,
      -73.93511362373827
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.853548054690286,
      -73.93514178693295
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85355135145788,
      -73.93515486270189
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85355490182278,
      -73.93516793847084
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.853558705784984,
      -73.93518302589655
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85356048096725,
      -73.93519040197133
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.853562763344414,
      -73.93519710749388
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85356783529336,
      -73.93521420657633
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85357138565737,
      -73.93523063510655
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85357442882639,
      -73.93524169921875
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85357975437183,
      -73.93525511026382
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85358609430633,
      -73.93527388572693
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85359065905877,
      -73.93529299646616
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.853596745394896,
      -73.935311101377
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85360207093856,
      -73.93532451242208
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85360815727361,
      -73.9353372529149
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.853613736413585,
      -73.9353634044528
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.853619569150354,
      -73.93538720905781
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.853624641094946,
      -73.93541537225245
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85362590908104,
      -73.93542475998402
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85363224901111,
      -73.93543850630522
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85363782814907,
      -73.93545594066381
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85364467527228,
      -73.93547605723143
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.853650254409196,
      -73.9354958385229
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.853656847934054,
      -73.93551394343376
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85366318786115,
      -73.93553607165812
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.853670795772885,
      -73.93555585294962
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85367738929568,
      -73.93557731062174
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85368499720576,
      -73.93559843301773
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85369463389066,
      -73.93563095480204
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85370300258955,
      -73.93565442413092
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85370731373704,
      -73.935670517385
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85371137128736,
      -73.93568929284811
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85371872559671,
      -73.9357228204608
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85372329034001,
      -73.93573857843874
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85372886947031,
      -73.93576607108116
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.853737998955225,
      -73.9357895404504
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.853724811921055,
      -73.9358073504477
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.853718471999834,
      -73.93581233918667
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.853711117690466,
      -73.93582038581371
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85369945223256,
      -73.93583212047815
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.8536953946815,
      -73.93584083765745
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85368093965384,
      -73.93584754317999
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85367130296696,
      -73.93585860729218
    ],
    "dur": 50
  },
  {
    "latlng": [                      
      40.85366547023477,
      -73.93586833029985      
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.85365786232243,
      -73.93587537109852
    ],
    "dur": 50
  },
  {
    "latlng": [
      40.853648732826464,
      -73.93588241189718
    ],
    "dur": 50
  }
];


var simID = Date.now();
var exampleObserver = function(data){                
  var updateObject = {id: simID, latlng: data};
  MapController.updateMapPoint(updateObject);
  SocketController.emit('user-point-move', updateObject);
};
           
geo_simulator.addCoordinates(path);
geo_simulator.addObservers(exampleObserver);
geo_simulator.start();


