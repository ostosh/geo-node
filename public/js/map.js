(function(window) {

  var map = L.map('map').setView([40.85341922702844,-73.93471162766218], 18);
  var activeMapMarkers = {};
  var mapOpts = {
    maxZoom: 22,
    maxNativeZoom: 20,
    attribution: '',
    id: 'mapbox.streets'
  };

  var apiToken = '<your token here';
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + apiToken, mapOpts).addTo(map);

  function updateMapPoint(data){
    if(data['id'] in activeMapMarkers)
      activeMapMarkers[data['id']].setLatLng(data['latlng']);
    else
      activeMapMarkers[data['id']] = new L.marker(data['latlng']).addTo(map);
  }
  
  map.on('click', function(e) {
    var updateObject = {id: SocketController.getSessionID(), latlng: e.latlng};
    console.log(e.latlng);
    updateMapPoint(updateObject);
    SocketController.emit('user-point-move', updateObject);
  });
  
  SocketController.registerListener('map-point-update', updateMapPoint);

  window.MapController = {
    updateMapPoint : updateMapPoint
  };

}(window));


