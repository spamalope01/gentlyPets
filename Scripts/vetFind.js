(function(module) {
  var findVet = {};
  var startPos;
  var geoSuccess;

// key:  AIzaSyCRn9GzQyU1uC7ckCXrxuMy6ik0wk59ZRo

// just get a map to display
//   findVet.initMap = function() {
//     console.log('running initmap');
//     $.ajax({
//       type: 'GET',
//       Method: 'Head',
//       URL: 'https://.maps.googleapis.com/maps.api.js?key=AIzaSyCRn9GzQyU1uC7ckCXrxuMy6ik0wk59ZRo',
//       error: function() {
//         console.log('the ajax map call failed');
//       },
//       success: function() {
//         console.log('made the call');
//         var centerMap = {lat: -25.363, lng: 131.044};
//         var map = new google.maps.Map($('#vetMap'), {
//           zoom: 6,
//           center: centerMap
//         });
//       }
//     }
// )};

  findVet.initMap = function() {
    var map = new google.maps.Map(document.getElementById('vetMap'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 6
        });
        var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
  };

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
  };
    // var currentPostion = function() {
    //   console.log('running getCurrentPostion');
    //   var map = new google.maps.Map(document.getElementById('vetMap'), {
    //     center: {lat: -34.397, lng: 150.644},
    //     zoom: 6
    //   });
    //   console.log('got vetMap');
    //   var infoWindow = new google.maps.InfoWindow({map: map});
    //
    //   if(navigator.geolocation) {
    //   startPos = "https://maps.googleapis.com/maps/api/js?key=AIzaSyD7pJXLKj8XvLf0PX4P94Li1zKJi05IkIk&callback=initMap";
    //     navigator.geolocation.getCurrentPostion(function(position) {
    //       var pos = {
    //         lat: position.coords.latitude,
    //         lng: position.coords.longitude
    //       };
    //
    //       infoWindow.setPosition(pos);
    //       infoWindow.setContent('Location found.');
    //       map.setCenter(pos);
    //     }, function() {
    //       handleLocationError(true, infoWindow, map.getCenter());
    //     });
    //   } else {
    //     handleLocationError(false, infoWindow, map.getCenter());
    //   }
    // };
    // var uluru = {lat: -25.363, lng: 131.044};
    // var map = new google.maps.Map($('#vetMap'), {
    //   zoom: 4,
    //   center: uluru
    // });
    // var marker = new google.maps.Marker({
    //   position: uluru,
    //   map: map
    // });
    // findVet.getCurrentPostion();




// have to get the user's current location to atuo set the google map
  //
  // function handleLocationError(browswerHasGelolcation, infoWindow, pos) {
  //   infoWindow.setPosition(pos);
  //   infoWindow.setContent(browswerHasGelolcation ? 'Error: The Geolocation service failed.'  : 'Error: Your browswer does not support geolocation.');
  // }
  //   window.onload = function() {
  //     geoSuccess = function(position) {
  //       startPos = position;
  //       $('#startLat').innerHTML = startPos.coords.latitude;
  //       $('#startLon').innerHTML = startPos.coords.longitude;
  //     };
  //     navigator.geolocation.getCurrentPosition(getSuccess);
  //   };
  //   console.log('position is ' + startPos);
  // };

// Google Map API call
//   findVet.getMap = function(zip) {
//     console.log('zip is' + zip);
//     $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?postal_code=' + zip + '&key=AIzaSyD7pJXLKj8XvLf0PX4P94Li1zKJi05IkIk')
//     .done(function() {
//       console.log('got the map stuff');
//     })
//     .fail(function(err) {
//       alert('Error retrieving data!');
//     });
//   };
// // need to capture their zip code input and pass it to the api call
//   findVet.getZipDesired = function() {
//     $('.vetZipForm').off().on('click', '.findVetButton', function(e) {
//       e.preventDefault();
//       var $zipWanted = $('#vetZip').val();
//       console.log($zipWanted);
//       findVet.getMap($zipWanted);
//     });
//   };









  $(document).ready(function() {
    findVet.initMap();
    // findVet.getCurrentPostion();
    // findVet.getZipDesired();
  });
  module.findVet = findVet;
})(window);
