$(document).ready(function() {
  console.log( "ready!" );

  var bgWidth = $('.bg-img').width();
  $('.bg-img').animate({
    opacity: 1.0,
    width: (bgWidth * 1.1),
  }, 8000);

 	$("p, h1, h2, article").hide().fadeIn(8000);
  $("#googleMap").hide().fadeIn(8000);

	function fadeStatement() {
	  $(".statement-home, .statement, .statement-donate").hide().delay(4500).fadeIn(3000);
    $(".donate-bg-fade-delay").hide().delay(10).fadeIn(3500);
	};

	fadeStatement();

	// function delayStache() {
	//   $(".stache").delay(2000);
	// };

	// delayStache();
 

// $('.stache-bounce').animate({
//      left: '0'
//  }, 3000);

  //////////////// GMAP //////////////



  var map
  var myCenter=new google.maps.LatLng(40.8447819,-73.8648268);

  function initialize() {
    var mapProp = {
      center:myCenter,
      zoom:13,
      mapTypeId:google.maps.MapTypeId.ROADMAP,
      styles: [{"featureType":"all","elementType":"all","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":-30}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#353535"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#656565"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#505050"}]},{"featureType":"poi","elementType":"geometry.stroke","stylers":[{"color":"#808080"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#454545"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels","stylers":[{"hue":"#000000"},{"saturation":100},{"lightness":-40},{"invert_lightness":true},{"gamma":1.5},{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]}]
    };

    map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    google.maps.event.addListener(map, 'click', function(event) {
      placeMarker(event.latLng);
    });
  }

  function placeMarker(location) {
    
    var marker = new google.maps.Marker({
      position: location,
      map: map,
      icon: '../img/hipster-icon.png',
       map:map,
    draggable:true,
    animation: google.maps.Animation.BOUNCE,
  
    });

    marker.setMap(map);

    var infowindow = new google.maps.InfoWindow({
      content: '<span style="font-size: 1.5em; font-weight: bold; background-color: none;">Hipster Sighting!!!  RED ALERT!!!  HSWAT DISPATCH!!!</span>' + '<br>Latitude: ' + location.lat() + '<br>Longitude: ' + location.lng()
    });
    infowindow.open(map,marker);
  }

  $('.map-alarm-div').on('click', function(){
    $('.map-alarm-div').addClass('alarm-box');
    $('.map-lower-para').addClass('alarm-bg');
  });

  google.maps.event.addDomListener(window, 'load', initialize);

/////////////



});


