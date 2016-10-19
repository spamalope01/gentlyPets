//need to capture the pet that is selectedPet
//have to put that selected pet into local storage
//have to have a way to display saved pets within the favorites section of the landing page, using handlebars
//need to ensure that saved pets can still show full displayRandomDetails

(function(module) {
  var favs = {};
  favs.favoritePet = null;
  favs.savedPets = [];

  //check if LS exists, otherwise make selectedPets an empty Array
  favs.isLS = function() {
    if(localStorage.favoritePets) {
      console.log('ls exists!' + localStorage.favoritePets);
      // favs.savedPets = JSON.parse(localStorage.getItem('xxxx'));
    } else {
      favs.savedPets = [];
    }
  };

//get the value of the selected pet
  favs.selectedPet = function() {
    $('#random').off().on('click', '.petSaveButton', function(){
      console.log('clicked the save button');
      favs.favoritePet = $(this).val();
      console.log('selected favorite is: ' + favs.favoritePet);
      favs.storeFavorite(favs.favoritePet);
    });
  };

//send to local storage
  favs.storeFavorite = function(pet) {
    favs.savedPets.push(pet);
    localStorage.setItem('favoritePets', JSON.stringify(favs.savedPets));
    console.log('saved the pet to LS');
    console.log('pet is: ' + pet);
  };

//display favorites
  favs.displaySavedPets = function() {
    if(localStorage.favoritePets) {
      favs.savedPets = JSON.parse(localStorage.getItem('favoritePets'));
      favs.savedPets.forEach(function(e){
        var source = $('#landingRandom').html();
        var template = Handlebars.compile(source);
        var html = template(e);
        $('#favorites').append(html);
      });
    } else {
      $('#favorites').html('<h2>You have no pets saved yet</h2>');
    }
  };


//left to do:  need to create a new handlebars for favorite pets that has a 'remove from saved' button instead of save button.  need to figure out why pet information isn't showing up in the blocks.  need to provide a header in that section and the 'no saved pets' verbiage on page load. need to make sure that a user can view a saved pet's details.








  $(document).ready(function() {
    favs.isLS();
    favs.selectedPet();
    favs.displaySavedPets();
  });


  module.favs = favs;
})(window);
