google.maps.event.addDomListener(window, 'load', init);
function init() {
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	var isDraggable = w > 768 ? true : false;
    var mapOptions = {
        zoom: 16,
	    draggable: isDraggable,
        scrollwheel: false,
        panControl: false,
	    zoomControl: true,
	    mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
		center: new google.maps.LatLng(45.3985693,-71.9327213),
		styles: [ {
			"featureType":"all",
			"elementType":"all",
			"stylers":[
			    {"hue":"#000"},
			    {"saturation": "-100"},
			    {"lightness": "17"},
			    {"gamma": "1.15"}
			]
		}]
	};
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var image = '/wp-content/themes/bravad/assets/img/map-pin.png';
    var LocationMarker = new google.maps.Marker({
        position: new google.maps.LatLng(45.3985693,-71.9327213),
        map: map,
        icon: image
    });
}