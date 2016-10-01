(function(module) {
  var findVet = {};

// have to get the user's current location to atuo set the google map
// findVet.getCurrentPostion = function() {
//   window.onload = function() {
//     var startPos;
//     var geoSuccess = function(position) {
//       startPos = position;
//       $('#startLat').innerHTML = startPos.coords.latitude;
//       $('#startLon').innerHTML = startPos.coords.longitude;
//     };
//     navigator.geolocation.getCurrentPosition(getSuccess);
//   };
// };

// Google Map API call
  findVet.getMap = function(zip) {
    console.log('zip is' + zip);
    $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?postal_code=' + zip + '&key=AIzaSyD7pJXLKj8XvLf0PX4P94Li1zKJi05IkIk')
    .done(function() {
      console.log('got the map stuff');
    })
    .fail(function(err) {
      alert('Error retrieving data!');
    });
  };
// need to capture their zip code input and pass it to the api call
  findVet.getZipDesired = function() {
    $('.vetZipForm').off().on('click', '.findVetButton', function(e) {
      e.preventDefault();
      var $zipWanted = $('#vetZip').val();
      console.log($zipWanted);
      findVet.getMap($zipWanted);
    });
  };









  $(document).ready(function() {
    // findVet.getCurrentPostion();
    findVet.getZipDesired();
  });
  module.findVet = findVet;
})(window);
