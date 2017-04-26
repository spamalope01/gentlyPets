// var service;

(function(module) {
  var findVet = {};
  var lat = '';
  var lng = '';
  var vetMap;
  var service;
  var infoWindow;
  var pos;

// key:  AIzaSyCRn9GzQyU1uC7ckCXrxuMy6ik0wk59ZRo


//get current location and display the map
  findVet.initMap = function() {
    // var map = new google.maps.Map(document.getElementById('vetMap'), {
    //   center: {lat: -33.5207, lng: 86.8025},
    //   zoom: 6
    // });
       // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        lat = position.coords.latitude;
        lng = position.coords.longitude;
        console.log('lat: ' + lat);
        console.log('long: ' + lng);
        // map.setCenter(pos);
        findVet.vetSearch(lat, lng);
      });
    };
  };

  findVet.vetSearch = function(lat, long) {
    var start = new google.maps.LatLng(lat,long);

    vetMap = new google.maps.Map(document.getElementById('vetMap'), {
      center: start,
      zoom: 10
    });

    var request = {
      url: 'https://maps.googleapis.com/maps/api/js?&rankby=distance&key=AIzaSyCRn9GzQyU1uC7ckCXrxuMy6ik0wk59ZRo&libraries=places',
      location: start,
      radius: '2500',
      query: 'veterinary_care'
    };

    // console.log('service: ' + service);
    service = new google.maps.places.PlacesService(vetMap);
    service.textSearch(request, callback);
  };

  function callback(results, status) {
    console.log('results: ' + results);
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        places = results[i];
        createMarker(results[i]);
      }
    };
  };
      // findVet.vetSearch = function(lat, long) {
      //   var start = new google.maps.LatLng(lat,long);
      //   console.log('start:' + start);
      //   vetMap = new google.maps.Map(document.getElementById('vetMap'), {
      //     center: start,
      //     zoom: 15
      //   });
      //
      //   request = {
      //     url: 'https://maps.googleapis.com/maps/api/js?&&rankby=distance&key=AIzaSyCRn9GzQyU1uC7ckCXrxuMy6ik0wk59ZRo&libraries=places',
      //     location: start,
      //     radius: '25000',
      //     query: 'veterinary_care'
      //   };
      //   // var marker = new google.maps.Marker({
      //   //   position: start,
      //   //   map: map,
      //   // });
      //   var service = new google.maps.places.PlacesService(vetMap);
      //   service.textSearch(request, callback);
      // }
      //
      //   function callback(results, status) {
      //     console.log('results:' + results);
      //     if(status == google.maps.places.PlacesServiceStatus.OK) {
      //       for(var i = 0; i < results.length; i++) {
      //         place = results[i];
      //         console.log('place: ' + place[i].geometry.lat);
      //         // console.log('place length: ' + place.length);
      //         // var vetMarker = new google.maps.Marker({
      //         //   position: results[i],
      //         //   map: map,
      //         // };
      //         // vetMarker.setMap(vetMarker);
      //         // createMarker(results[i]);
      //       }
      //     }
      //   }
        // marker.setMap(map);
      // };

























  //   else {
  //         // Browser doesn't support Geolocation
  //     handleLocationError(false, map.getCenter());
  //   }
  // function handleLocationError(browserHasGeolocation, pos) {
  //   map.setPosition(pos);
  //   map.setContent(browserHasGeolocation ?
  //                         'Error: The Geolocation service failed.' :
  //                         'Error: Your browser doesn\'t support geolocation.');
  // };
  //

















  $(document).ready(function() {
    findVet.initMap();
  });
  module.findVet = findVet;
})(window);
