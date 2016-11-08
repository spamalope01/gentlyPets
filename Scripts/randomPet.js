(function(module) {
  var randomPets = {};
  randomPets.all = [];
  var modal = $('#randomModal');
  var btn = $('.modalBtn');
  var span = $('.closeModal')[0];

// make an api call and get back 6 random pets
  randomPets.getRandom = function() {
    console.log('running getRandom');
    $.getJSON('https://api.petfinder.com/pet.getRandom?format=json&key=8dc33d8c70fd213dc0874e9deaa0a2fd&age=Senior&output=full&count=6&callback=?')
  .done(function(petApiData) {
    console.log(petApiData);
    randomPets.all = [];
    randomPets.all = petApiData.petfinder.pet;
    console.log(randomPets.all);
    randomPets.displayRandom();
  }).fail(function(err)
  { console.error('Error retrieving data!');
  });
  };

  //display the 6 random pets on the page
  randomPets.displayRandom = function() {
    randomPets.all.forEach(function(e){
      var source   = $("#landingRandom").html();
      var template = Handlebars.compile(source);
      var html    = template(e);
      $('#random').append(html);
    });
    $('.randModalBtn').off().on('click', function() {
      console.log('clicked totes');
      randomPets.randomSpecs = $(this).val();
      $('div.randDetailModal').toggleClass('randModal-show');
      randomPets.viewDetails(randomPets.randomSpecs);
    });
  };
  $('.randCloseModal').off().on('click', function() {
    $('div.randDetailModal').toggleClass('randModal-show');
    $('#randomDetails').empty();
  });

// show details of the selected random pet
  randomPets.viewDetails = function(pet) {
    randomPets.all.forEach(function(elem) {
      if(pet === elem.id.$t){
        console.log('pet is equal');
        var target = $('#petDetails').html();
        var skeleton = Handlebars.compile(target);
        var hyperText = skeleton(elem);
        $('#randomDetails').append(hyperText);
      }
    });
  };

  $(document).ready(function() {
    randomPets.getRandom();
  });

  module.randomPets = randomPets;
})(window);
