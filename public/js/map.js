
var map = L.map('map').setView([40.7127, -74.0059], 14);
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
  updateMapPoint(updateObject);
  SocketController.emit('map-point-add', updateObject);
});

SocketController.registerListener('map-point-update', updateMapPoint);



