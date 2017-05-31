(function(module) {
  var favs = {};
  favs.favoritePet = null;
  favs.savedPets = [];

  //check if LS exists, otherwise make selectedPets an empty Array
  favs.isLS = function() {
    if(localStorage.favoritePets) {
    } else {
      favs.savedPets = [];
    }
  };

//get the value of the selected random pet
  favs.randomSelectedPet = function() {
    $('#random').off().on('click', '.randomSaveButton', function(){
      console.log('clicked the fave button, yo');
      favs.favoritePet = $(this).val();
      console.log('favs', favs.favoritePet);
      favs.reservePet(favs.favoritePet, randomPets.all);
      // favs.storeFavorite(favs.favoritePet);
    });
  };

// gets the value of the selected searched pet
  favs.searchSelectedPet = function() {
    $('#matches').off().on('click', '.searchSaveButton', function(){
      favs.favoritePet = $(this).val();
      favs.reservePet(favs.favoritePet, pets.all);
    });
  };

// this pulls the pet object out of the corresponding array and puts the pet in local storage.
  favs.reservePet = function(buttonVal,searchSource) {
    searchSource.forEach(function(elem){
      if(buttonVal == elem.id.$t){
        favs.savedPets.push(elem);
        localStorage.setItem('favoritePets', JSON.stringify(favs.savedPets));
      }
    });
  };

//display favorites pulls pets out of local storage and displays in the favorites section
  favs.displaySavedPets = function() {
    if(localStorage.favoritePets) {
      favs.savedPets = JSON.parse(localStorage.getItem('favoritePets'));
      favs.savedPets.forEach(function(e){
        var source = $('#landingFavorites').html();
        var template = Handlebars.compile(source);
        var html = template(e);
        $('#favorites').append(html);
      });
      $('.faveModalBtn').off().on('click', function() {
        console.log('hit the interested fave button');
        favs.favSpecs = $(this).val();
        $('.randDetailModal').toggleClass('randModal-show');
        favs.viewDetails(favs.favSpecs);
      });
    } else {
      $('#favorites').html('<h2>You have no pets saved yet</h2>');
    }
  };

// Remove a pet from favorites
  favs.removeFavorite = function(){
    $('#favorites').off().on('click', '.removeFavsButton', function(){
      var removeVal = $(this).val();
      for(var i = 0; i < favs.savedPets.length; i ++){
        if(removeVal === favs.savedPets[i].id.$t){
          favs.savedPets.splice(i, 1);
        }
        localStorage.setItem('favoritePets', JSON.stringify(favs.savedPets));
        location.reload();
      }
    });
  };


  favs.viewDetails = function(pet) {
    favs.savedPets.forEach(function(elem) {
      if(pet === elem.id.$t){
        console.log('pet is equal');
        var target = $('#petDetails').html();
        var skeleton = Handlebars.compile(target);
        var hyperText = skeleton(elem);
        $('#faveDetails').append(hyperText);
      }
    });
    favs.closeModal();
  };


  favs.closeModal = function() {
    $('.closeFaves').off().on('click', function() {
      console.log('clicked close on fave details');
      $('div.randDetailModal').toggleClass('randModal-show');
      $('#faveDetails').empty();
      console.log('emptied the stuff');
    });
  };







  $(document).ready(function() {
    favs.isLS();
    favs.randomSelectedPet();
    favs.searchSelectedPet();
    favs.displaySavedPets();
    console.log('favs111', favs.savedPets);
    favs.removeFavorite();

    favs.viewDetails();

  });


  module.favs = favs;
})(window);
