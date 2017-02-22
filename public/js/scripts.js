// RWD MENU

$(document).ready(function() {
	$(".burger-nav").click(function() {
		$("header nav ul").toggleClass("open");
	});
});

// SCROLL-UP

$(document).ready(function() {
	$("#go-to-top").hide();
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$("#go-to-top").fadeIn(500);
		} else {
			$("#go-to-top").fadeOut(500);
		}
	});
	$("#go-to-top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, 1000);
		return false;
	});
});

// TRANSITIONS

$(document).ready(function() {
	$("body").css("display", "none");
	$("body").fadeIn(2000);
	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(1000, redirectPage);		
	});
		
	function redirectPage() {
		window.location = linkLocation;
	}
});

// SLIDER

$(document).ready(function($) {
	$("#clemo-slider").sliderPro({
		width: "100%",
		height: "520px",
		arrows: false,
		buttons: true,
		aspectRatio: -1,
		breakpoints: {

		1024: {
			orientation: "horizontal",
			width: "100%",
			height: "50vh",
			arrows: false,
			buttons: true
		},
		1024: {
			orientation: "vertical",
			width: "100%",
			height: "50vh",
			arrows: false,
			buttons: true
		}
	}
	});
});

$(document).ready(function($) {
	$("#best-team-slider").sliderPro({
		width: "100%",
		height: "400px",
		arrows: true,
		buttons: true,
		aspectRatio: -1,
		breakpoints: {

		1024: {
			orientation: "horizontal",
			display: "none",
			width: "100%",
			height: "80vh",
			arrows: true,
			buttons: true
		},
		1024: {
			orientation: "vertical",
			display: "none",
			width: "100%",
			height: "80vh",
			arrows: true,
			buttons: true
		}
	}
	});
});

$(document).ready(function($) {
	$("#testimonials-slider").sliderPro({
		width: "100%",
		height: "200px",
		arrows: false,
		buttons: true,
		aspectRatio: -1,
	});
});

$(document).ready(function($) {
	$("#related-works-slider").sliderPro({
	width: "100%",
	height: "400px",
	arrows: false,
	buttons: true,
	aspectRatio: -1,
	breakpoints: {

		1024: {
			orientation: "horizontal",
			width: "100%",
			height: "50vh",
			arrows: false,
			buttons: true
		},
		1024: {
			orientation: "vertical",
			width: "100%",
			height: "50vh",
			arrows: false,
			buttons: true
		}
	}
	});
});

$(document).ready(function($) {
	$("#post-slider").sliderPro({
	width: "100%",
	height: "400px",
	arrows: false,
	buttons: true,
	aspectRatio: -1,
	breakpoints: {

		1024: {
			orientation: "horizontal",
			width: "100%",
			height: "50vh",
			arrows: false,
			buttons: true
		},
		1024: {
			orientation: "vertical",
			width: "100%",
			height: "50vh",
			arrows: false,
			buttons: true
		}
	}
	});
});

// GOOGLE MAPS

google.maps.event.addDomListener(window, 'load', init);
	function init() {
	var mapOptions = {
		zoom: 11,
		center: new google.maps.LatLng(34.05, -118.25),
		styles: [
	{
		"featureType": "all",
		"elementType": "geometry",
		"stylers": [
			{
				"visibility": "on"
			}
		]
	},
	{
		"featureType": "all",
		"elementType": "labels",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "all",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "all",
		"elementType": "labels.text.stroke",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "all",
		"elementType": "labels.icon",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "administrative",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#444444"
			}
		]
	},
	{
		"featureType": "administrative.locality",
		"elementType": "labels.text",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "administrative.locality",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "administrative.neighborhood",
		"elementType": "labels.text",
		"stylers": [
			{
				"visibility": "on"
			}
		]
	},
	{
		"featureType": "administrative.neighborhood",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "administrative.neighborhood",
		"elementType": "labels.icon",
		"stylers": [
			{
				"visibility": "on"
			},
			{
				"saturation": "7"
			}
		]
	},
	{
		"featureType": "administrative.land_parcel",
		"elementType": "labels.text",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "landscape",
		"elementType": "all",
		"stylers": [
			{
				"color": "#f2f2f2"
			}
		]
	},
	{
		"featureType": "landscape.man_made",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"visibility": "on"
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "all",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "poi.attraction",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"visibility": "on"
			}
		]
	},
	{
		"featureType": "road",
		"elementType": "all",
		"stylers": [
			{
				"saturation": -100
			},
			{
				"lightness": 45
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "all",
		"stylers": [
			{
				"visibility": "simplified"
			}
		]
	},
	{
		"featureType": "road.arterial",
		"elementType": "labels.icon",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "road.local",
		"elementType": "geometry.fill",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "road.local",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "road.local",
		"elementType": "labels.icon",
		"stylers": [
			{
				"visibility": "on"
			}
		]
	},
	{
		"featureType": "transit",
		"elementType": "all",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "transit.line",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"visibility": "on"
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "all",
		"stylers": [
			{
				"color": "#bababa"
			},
			{
				"visibility": "on"
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "geometry.fill",
		"stylers": [
			{
				"visibility": "on"
			},
			{
				"saturation": "-70"
			},
			{
				"gamma": "0.61"
			},
			{
				"lightness": "34"
			},
			{
				"weight": "1.67"
			}
		]
	}
]};

	var mapElement = document.getElementById('map');
	var map = new google.maps.Map(mapElement, mapOptions);
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(34.05, -118.25),
		map: map,
		title: "clemo."
	});
}