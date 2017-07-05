## **Documentation**  


### PURPOSE
Today, more than ever, there is an upwelling in attention to pet adoption from either shelters or rescue organizations. In 2015 - 2016, dog and cat adoption from a shelter or rescue organization rose by over 40% from 2012/2013. This is a wonderful trend that helps reduce the 'mills' that foster a poor environment for the animals.

However for all of the adoptions that are happening, the majority of them are younger animals, puppies or adolescents. The smaller end of the spectrum are considered adult animals and the smallest percentage of those animals are seniors. Even smaller are the ones with special needs.

But those animals need love and care just as much as a puppy does. Some have lived hard lives, rejected by everyone. They only want the same thing any animal wants: love, shelter, food, safety. They want to be cared for. They deserve a safe and loving home to spend the rest of their lives in.

The Gently Used Pets project seeks to alleviate this by bringing those animals to the forefront of a pet adoption search.

### API
This application is connected to the PetFinder.com API.  It will pull back 100 pets at a time matching the search criteria of the user's zip code.

### Filtering
The user can filter the returned 100 pets based on more granular criteria such as size, age and if the pet has special needs or not.

### Viewing Details
The user can view the details of any pet returned from the filter function by selecting 'Interested' on that specific pet's tile.  This will open a modal displaying the greater details of the corresponding pet.  

### Add to favorites
The user can add any pet to his/her favorites by selecting 'Add to Favorites'.  This will save the pet in the user's local storage session and will remain there until the user removes said pet from favorites.

### Random pets
Upon page load/refresh, the site will pull in 8 randomly selected pets matching the criteria of Senior and/or Special Needs.  
