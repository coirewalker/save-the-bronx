$(document).ready(function() {
  console.log( "ready!" );

  var bgWidth = $('.bg-img').width();
  $('.bg-img').animate({
    opacity: 1.0,
    width: (bgWidth * 1.1),
  }, 8000);
 	$("p, h1, h2, article").hide().fadeIn(8000);

 // $(".statement-home")window.setTimeout.hide().fadeIn, 10000));

	function fadeStatement() {
	  $(".statement-home, .statement, .statement-donate").hide().delay(4500).fadeIn(2000);
	};

	fadeStatement();

	// function delayStache() {
	//   $(".stache").delay(2000);
	// };

	// delayStache();
 



//////////////// GMAP ///////////////

	var map = new GMaps({
    el: '#map',
    lat: 40.8447819,
    lng: -73.8648268
  });

  // map.addMarker({
  //   lat: 40.8484179,
  //   lng: -73.8625094,
  //   title: 'hipster sighting',
  //   click: function(e) {
  //     alert('You clicked in this marker');
  //   }
  // });

  // map.addMarker({
  //   lat: 40.8404964,
  //   lng: -73.8489481,
  //   title: 'hipster sighting',
  //   click: function(e) {
  //     alert('You clicked in this marker');
  //   } 
  // });

  // map.addMarker({
  //   lat: 40.8375743,
  //   lng:-73.8610502,
  //   title: 'hipster sighting',
  //   click: function(e) {
  //     alert('You clicked in this marker');
  //   }
  // });

  // map.addMarker({
  //   lat: 40.8297165,  
  //   lng: -73.8449141,
  //   title: 'hipster sighting',
  //   click: function(e) {
  //     alert('You clicked in this marker');
  //   }
  // });
/////////////////////////////////


















});