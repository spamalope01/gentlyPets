(function(module) {
  var findVet = {};
  var lat = '';
  var lng = '';
  var $zipWanted;

// key:  AIzaSyCRn9GzQyU1uC7ckCXrxuMy6ik0wk59ZRo


//get current location and display the map
  findVet.initMap = function() {
    var map = new google.maps.Map(document.getElementById('vetMap'), {
      center: {lat: -33.5207, lng: 86.8025},
      zoom: 6
    });
        // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        map.setCenter(pos);
        var marker = new google.maps.Marker({
          position: pos,
          map: map,
        });
        marker.setMap(map);
      }, function() {
        handleLocationError(true, map.getCenter());
      });
    } else {
          // Browser doesn't support Geolocation
      handleLocationError(false, map.getCenter());
    }
  };
  function handleLocationError(browserHasGeolocation, pos) {
    map.setPosition(pos);
    map.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
  };

  // // need to capture their zip code input and pass it to the api call
  findVet.getZipDesired = function() {
    $('.vetZipForm').off().on('click', '.findVetButton', function(e) {
      e.preventDefault();
      $zipWanted = $('#vetZip').val();
      var geocoder = new google.maps.Geocoder();
      console.log($zipWanted);
      geocodeZip(geocoder, $zipWanted);
    });
    function geocodeZip(geocoder, zip){
      geocoder.geocode({'address': $zipWanted}, function(results, status) {
        if(status === 'OK') {
          lat = results[0].geometry.location.lat();
          lng = results[0].geometry.location.lng();
          console.log('lat is: ' + lat);
          console.log('lng is: ' + lng);
          findVet.vetSearch();
        } else {
          console.log('geocode not successful: ' + status);
        }
      });
    }
  };

  // Search for nearby vets

  findVet.vetSearch = function() {
    console.log('fired vetSearch');
    $.ajax({
      url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/jsonp?location=' + lat + ',' + lng + '&radius=5000&&rankby=distance&type=veterinary_care&key=AIzaSyCRn9GzQyU1uC7ckCXrxuMy6ik0wk59ZRo',
      type: "GET",
      dataType: 'jsonp',
      cache: false,
      success: function(response){
        console.log('api was good');
        vets.all = [];
        vets.all = response;
      }
    });
  };
  //   console.log('lat: ' + lat);
  //   console.log('lng: ' + lng);
  //   $.getJSON('https://maps.googleapis.com/maps/api/place/radarsearch/json?location=' + lat + ', ' + lng + '&radius=5000&type=veterinary_care&key=AIzaSyCRn9GzQyU1uC7ckCXrxuMy6ik0wk59ZRo')
  // .done(function(results) {
  //   vets.all = [];
  //   vets.all = results.name;
  // }).fail(console.log('api call failed' + status));
  // };










  $(document).ready(function() {
    findVet.initMap();
    findVet.getZipDesired();
  });
  module.findVet = findVet;
})(window);
