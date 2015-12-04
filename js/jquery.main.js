$(document).ready(function() {
	initMixItUp();
	initOwlCarousel();
 	initMap();
});

function initMixItUp () {
	$('.portfolio').mixItUp({
		animation: {
		duration: 590,
		effects: 'fade stagger(64ms) translateZ(-580px)',
		easing: 'ease'
	}
	});
}

function initOwlCarousel () {
	$(".gallery").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
  });
}

function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 17,
	  center: {lat: 49.994462, lng: 36.236567}
	});

	var image = 'images/pin.png';
	var beachMarker = new google.maps.Marker({
	  position: {lat: 49.994462, lng: 36.236567},
	  map: map,
	  icon: image
	});
}