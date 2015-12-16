socket.on('user-count-update', function(data) {
		$('#user-count').text(data); 
});
 
socket.on('map-point-update', function(data) {
		new L.marker(data).addTo(map);
});

map.on('click', function(e) {
		alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng);
		new L.marker(e.latlng).addTo(map);
		socket.emit('map-point-add', e.latlng);
});
