
var map = L.map('map').setView([51.505, -0.09], 13);
var activeMapMarkers = {};
var mapOpts = {
		maxZoom: 22,
		maxNativeZoom: 20,
		attribution: '',
		id: 'mapbox.streets'
};

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', mapOpts).addTo(map);

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



