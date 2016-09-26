(function(module) {
  var randomPets = {};
  randomPets.all = [];
  var modal = $('#randomModal');
  var btn = $('.modalBtn');
  var span = $('.closeModal')[0];

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

  //
  randomPets.displayRandom = function() {
    randomPets.all.forEach(function(e){
      var source   = $("#landingRandom").html();
      var template = Handlebars.compile(source);
      var html    = template(e);
      $('#random').append(html);
    });
    $('.modalBtn').off().on('click', function() {
      randomPets.randomSpecs = $(this).val();
      $('div.modal').toggleClass('modal-show');
      randomPets.viewDetails(randomPets.randomSpecs);
    });
  };
  $('.closeModal').off().on('click', function() {
    $('div.modal').toggleClass('modal-show');
    $('#randomDetails').empty();
  });

  randomPets.viewDetails = function(pet) {
    randomPets.all.forEach(function(elem) {
      if(pet === elem.id.$t){
        console.log('pet is equal');
        // console.log('elem id is ' + elem.id.$t);
        var target = $('#petDetails').html();
        var skeleton = Handlebars.compile(target);
        var hyperText = skeleton(elem);
        $('#randomDetails').append(hyperText);
      }
    });
  };

  // randomPets.interested = function(elem) {
  //   // searchSource.forEach(function(elem){
  //   // if(buttonVal == elem.id.$t){
  //   randomPets.viewDetails(elem);
  //   pets.selectedPet = elem;
  //   // }
  //   // });
  // };

// When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //   if (event.target == modal) {
    //     modal.style.display = "none";
    //   }
    // };




    // $('.modalBtn').off().on('click', function(){
    //   console.log(modal);
    //   $('#randomModal').style.display = "block";
    // });
    // $('.closeModal').off().on('click', function(){
    //   modal.style.display = "none";
    // });
    // $('.pet-summary-element').off().on('click', '#randomInterested', function(e) {
    //   randomPets.randomWanted = this.value;
      // randomPets.randomText = this.getAttribute('data-text');
      // console.log(randomPets.randomText);
      // console.log(randomPets.randomWanted);
      // randomPets.randomDetails(randomPets.randomWanted);
    // });

  //have to launch the modal
  // randomPets.randomDetails = function(petID) {
  //   $('#animatedModal').animatedModal();
  //
  // };
  // have to run handlebars on the modal and display the corresponding random pet's information.
  // have to be able to close the  modal


   // open modal on random pets when interested in seeing displayFullPetDetails

   //     var randomDetailHTML = $('#randomDetails').html();
   //     var randomDetailTemplate = Hanldebars.compile(randomDetailHTML);
   //     var randomView = randomDetailTemplate(pet);
   //     $('#animatedModal').append(randomView);
   //   });
   // };



  $(document).ready(function() {
    // randomPets.displayRandomDetails();
    randomPets.getRandom();
  });

  module.randomPets = randomPets;
})(window);
