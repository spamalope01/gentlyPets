 // this is the Ajax call to the petfinder api

$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 50) {
    $('.stickyNav').addClass('darkNav');
  } else {
    $('.stickyNav').removeClass('darkNav');
  }
});



(function(module) {
  var pets = {};
  pets.$petWanted = null;
  pets.$seniorPet = null;
  pets.$specialPet = null;
  pets.$petSize = null;
  pets.$petSex = null;
  pets.all = [];
  pets.filtered = [];

  pets.findByName = function(name) {
    pets.filtered.forEach(function(pet, index) {
      if (pet.name.$t === name) {
        console.log('found pet with name ' + name + ' at pets.all[' + index + ']' );
      }
    });
  };

  pets.getSpecialNeedsOptions = function(opt) {
    var outputOptions = [];
    if (Array.isArray(opt)) {
      outputOptions = opt.map(function(o) {
        return o.$t;
      });
    } else {
      outputOptions.push(opt.$t);
    }
    return outputOptions;
  };

  pets.isSpecialNeeds = function(pet) {
    console.log('running specialNeeds');
    if (pet.options.option) { //is defined
      var snOptsArray = pets.getSpecialNeedsOptions(pet.options.option);

      if (pets.$specialPet === 'specialNeeds') {
        return snOptsArray.indexOf('specialNeeds') !== -1;
      } else {
        return snOptsArray.indexOf('specialNeeds') === -1;
      }
    }
  };

  pets.isSenior = function(pet) {
    if (pets.$seniorPet === 'Senior') {
      console.log(pet.age.$t);
      return pets.$seniorPet === pet.age.$t;
    } else {
      return pets.$seniorPet !== pet.age.$t;
    }
  };

  pets.isSizePet = function(pet) {
    console.log('petSize is running: ' + pets.$petSize);
    if (pets.$petSize === 'S') {
      console.log(pet.size.$t);
      return pets.$petSize === pet.size.$t;
    } else if (pets.$petSize === 'M') {
      console.log(pet.size.$t);
      return pets.$petSize === pet.size.$t;
    } else if (pets.$petSize === 'L') {
      console.log(pet.size.$t);
      return pets.$petSize === pet.size.$t;
    } else {
      return pet.size.$t;
    }
  };

  pets.isSexPet = function (pet) {
    if (pets.$petSex === 'M') {
      return pets.$petSex === pet.sex.$t;
    } else if (pets.$petSex === 'F'){
      return pets.$petSex === pet.sex.$t;
    } else {
      return pet.sex.$t;
    }
  };


  pets.requestPets = function(zip, animal) {
    console.log('zip is ' + zip);
    console.log('animal is ' + animal);
    $.getJSON('https://api.petfinder.com/pet.find?format=json&key=8dc33d8c70fd213dc0874e9deaa0a2fd&location=' + zip + '&animal=' + animal + '&count=100&output=full&callback=?')
  .done(function(petApiData) {
    pets.all = [];
    pets.all = petApiData.petfinder.pets.pet;
    pets.numberReturned();
  }).fail(function(err) {
    alert('Error retrieving data!');
  });
  };

  pets.animal_wanted_click = function() {
    console.log('animal_wanted_click is live');
    $('#searchForm').off().on('click', '.searchPetButton', function(e) {
      pets.$petWanted = $(this).val();
      console.log(pets.$petWanted);
      $('#noMatches').text('');
      pets.searchClick(pets.$petWanted);
    });
  };

  pets.searchClick = function(wanted) {
    $('.zipForm').off().on('click', '.findPetBtn', function(e) {
      e.preventDefault();
      var $zipSearch = $('#zipFind').val();
      console.log($zipSearch);
      console.log(pets.$petWanted);
      pets.requestPets($zipSearch, pets.$petWanted);
    });
  };

  pets.numberReturned = function() {
    $('.searchContainer').hide();
    $('#numResults').show();
    $('#numMatches').html(pets.all.length);
    pets.showFilters();
  };

  pets.showFilters = function() {
    $('#filterButton').off().on('click', function(e){
      e.preventDefault();
      $('#numResults').hide();
      $('#filterOptions').show();
      pets.snr_spl();
      pets.howBig();
      pets.assignedGender();
      pets.pareDown();
    });
  };

  pets.snr_spl = function() {
    $('#seniorCheckbox').off().on('click', function(){
      pets.$seniorPet = this.value;
      console.log("senior =" + pets.$seniorPet);
    });
    $('#specialCheckbox').off().on('click', function(){
      pets.$specialPet = this.value;
      console.log("sepcial =" + pets.$specialPet);
    });
  };

  pets.howBig = function() {
    $('#petLargeness').off().on('change', function(){
      pets.$petSize = this.value;
      console.log("size =" + pets.$petSize);
    });
  };

  pets.assignedGender = function() {
    $('.sexRadio').off().on('click', function(){
      pets.$petSex = this.value;
      console.log("size =" + pets.$petSex);
    });
  };

  pets.noMatch = function() {
    if(pets.filtered.length <= 0) {
      $('.zeroMatches').show();
      $('#noMatches').text('Sorry there were no pets matching your criteria.  Please choose different options and search again.');
      $('#input-snr-cb').prop('checked', false);
      $('#input-spl-cb').prop('checked', false);
      $('.sexRadio').prop('checked', false);
    }
  };


  pets.pareDown = function() {
    $('#pareForm').off().on('click', '#showButton', function(){
      if (pets.$seniorPet || pets.$specialPet) {
        pets.filtered = pets.all
        .filter(function(pet) {
          return pets.isSenior(pet);
        })
         .filter(function(pet) {
           return pets.isSpecialNeeds(pet);
         })
         .filter(function(pet) {
           return pets.isSizePet(pet);
         })
        .filter(function(pet) {
          return pets.isSexPet(pet);
        });
        pets.noMatch();
        pets.displayMatches();
      } else {
        alert('you have to pick something');
      }
    });
  };

  pets.displayMatches = function() {
    pets.filtered.forEach(function(e){
      var source = $('#search-result').html();
      var template = Handlebars.compile(source);
      var html = template(e);
      $('#matches').append(html);
    });
    $('#matches').toggleClass('matchShow');
    $('.zeroMatches').hide();
    $('.randomHeader').hide();
    $('.searchSection').hide();
    $('#searchAgain').show();
    $('#random').hide();
    pets.searchAgain();
  };

  pets.displayFullPetDetails = function(pet) {
    var fullDetailHtml = $('#petDetails').html();
    var fullDetailTemplate = Handlebars.compile(fullDetailHtml);
    var petView = fullDetailTemplate(pet);
    $('#Animal_Detail_Wrapper').append(petView);
  };

  pets.selectedPet = null;

  pets.seeMoreButton = function(buttonVal) {
    pets.filtered.forEach(function(pet) {
      if (buttonVal === pet.id.$t) {
        pets.selectedPet = pet;
      }
    });
    pets.displayFullPetDetails(pets.selectedPet);
  };


  pets.searchAgain = function() {
    $('.redoSearch').off().on('click', function(){
      pets.all = [];
      pets.filtered = [];
      $('#matches').empty().toggleClass('matchShow');
      $('#searchAgain').hide();
      $('.searchContainer').show();
      $('#random').show();
      $('.randomHeader').show();
      $('.sexRadio').prop('checked', false);
      $('.pareCheck').prop('checked', false);
      $('.pareSelect').prop('selectedIndex', 0);
      $('.sexRadio').prop('checked', false);
      $('#zipFind').attr('value', '');
    });
  };

  pets.openNav = function() {
    console.log('open nav is running');
    $('.openMobileNav').off().on('click', function(){
      console.log('clicked the open button');
      $('#responsiveNav').style.height = "100%";
    });
  };

  pets.closeNav = function() {
    console.log('close nav is running');
    $('.closeNav').off().on('click', function(){
      console.log('clicked the close button');
      $('#responsiveNav').style.height = "0%";
      // $('.overlay').hide();
    });
  };

  $(document).ready(function() {
    pets.openNav();
    pets.closeNav();
    pets.animal_wanted_click();
    $('.searchSection').hide();
    $('.searchContainer').show();
    $('#searchAgain').hide();
    // pets.equalHeights();
    pets.searchClick();
    pets.snr_spl();
    pets.howBig();
    pets.assignedGender();
    pets.pareDown();
  });

  module.pets = pets;
})(window);
