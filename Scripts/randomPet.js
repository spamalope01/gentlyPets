(function(module) {
  var randomPets = {};
  randomPets.all = [];

  randomPets.getRandom = function() {
    console.log('running getRandom');
    $.getJSON('https://api.petfinder.com/pet.getRandom?format=json&key=' + randomSearch + '&age=Senior&output=full&count=6&callback=?')
  .done(function(petApiData) {
    console.log(petApiData);
    randomPets.all = [];
    randomPets.all = petApiData.petfinder.pet;
    console.log(randomPets.all);
    randomPets.displayRandom();
  }).fail(function(err)
  { alert('Error retrieving data!');
  });
  };


  randomPets.displayRandom = function() {
    randomPets.all.forEach(function(e){
      var source   = $("#landingRandom").html();
      var template = Handlebars.compile(source);
      var html    = template(e);
      $('#randomResultsWrapper').append(html);
    });
  }



$(document).ready(function() {

  randomPets.getRandom();
});

module.pets = randomPets;
})(window);
