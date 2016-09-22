// try putting all of this in the randomPet.js file...i think this file isn't recognizing when randomPets.all is populated or when those buttons are created'



(function(module) {
  var randoPets = {};

  randoPets.testButton = function () {
    $('.testButton').on('click', function() {
      var testValue = $(this).val();
      console.log(testValue);
    });
  };

 //i have to get the ID of the pet chosen
  randoPets.displayRandomDetails = function() {
    console.log('i am a frog');
    if(randomPets.all.length) {
      console.log('randompets has length');
      $('.pet-summary-element').off().on('click', '#randomInterested', function(e) {
        e.preventDefault();
        randoPets.randomWanted = $(this).val();
        console.log(random.randomWanted);
        // pets.searchClick(pets.$petWanted);
        // console.log('click is working on random');
        // random.randomWanted = this.value;
      });
    }
  };
 // have to find that ID in the random Array
 //have to launch the modal
 // have to run handlebars on the modal and display the corresponding random pet's information.
 // have to be able to close the  modal


  // open modal on random pets when interested in seeing displayFullPetDetails

  //     $('#animatedModal').animatedModal();
  //     var randomDetailHTML = $('#randomDetails').html();
  //     var randomDetailTemplate = Hanldebars.compile(randomDetailHTML);
  //     var randomView = randomDetailTemplate(pet);
  //     $('#animatedModal').append(randomView);
  //   });
  // };


  $(document).ready(function() {
    randoPets.displayRandomDetails();
    randoPets.testButton();
  });


  module.randoPets = randoPets;
})(window);
