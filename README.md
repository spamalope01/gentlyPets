## **Documentation**  


### PURPOSE
Today, more than ever, there is an upwelling in attention to pet adoption from either shelters or rescue organizations. In 2015 - 2016, dog and cat adoption from a shelter or rescue organization rose by over 40% from 2012/2013. This is a wonderful trend that helps reduce the 'mills' that foster a poor environment for the animals.

However for all of the adoptions that are happening, the majority of them are younger animals, puppies or adolescents. The smaller end of the spectrum are considered adult animals and the smallest percentage of those animals are seniors. Even smaller are the ones with special needs.

But those animals need love and care just as much as a puppy does. Some have lived hard lives, rejected by everyone. They only want the same thing any animal wants: love, shelter, food, safety. They want to be cared for. They deserve a safe and loving home to spend the rest of their lives in.

The Gently Used Pets project seeks to alleviate this by bringing those animals to the forefront of a pet adoption search.
### API -
This application is connected to the PetFinder.com API.  It will pull back 100 pets at a time matching the search criteria of the user's zip code.

### Filtering
The user can filter the returned 100 pets based on more granular criteria such as size, age and if the pet has special needs or not.

### Viewing Details
The user can view the details of any pet returned from the filter function by selecting 'Interested' on that specific pet's tile.  This will open a modal displaying the greater details of the corresponding pet.  

### Add to favorites
The user can add any pet to his/her favorites by selecting 'Add to Favorites'.  This will save the pet in the user's local storage session and will remain there until the user removes said pet from favorites.

### Random pets
Upon page load/refresh, the site will pull in 8 randomly selected pets matching the criteria of Senior and/or Special Needs.  






<!-- ## **Documentation**

### Back-End
##### Startup The Servers:
`mongo` and `node server.js` from the backend directory.

* Some cURL commands you can use:

**SIGNUP @ /api/signup**  
```
curl -X POST -H "Content-Type: application/json" -d '{"username":"test-username","password":"test-password","email":"test-email"}' http://localhost:3000/signup
```
It will return a token back that looks like:
`"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4ZTZiZmE0YzQzNWRlMTc4ZDNkNDMwOCIsImlhdCI6MTQ5MTUxNzM0OX0.puW8L-9J_3VaAeaxG-RMnbt3ufIe-8kXAMygzXc1xrE"`

**LOGIN @ /api/login**

Setup your token to a local variable with `export TOKEN=<string>` then
```
curl -H "Authorization: Bearer $TOKEN" -H "Content-type: application/json" http://localhost:3000/login
```
**PUT @ /api/dev && api/npo**

```
curl -H "Authorization: Bearer <your token>" -H "Content-type: application/json" -d '{<information you want to update>}' -X PUT http://localhost:3000/dev || http://localhost:3000/npo
```

**DELETE @ /api/dev & api/npo**
```
curl -H "Authorization: Bearer <token>" -X DELETE http://localhost:3000/dev || http://localhost:3000/npo
```

### Front-End

---
### DEVolunteer User Stories:

#### Developer Viewpoint:
* Developer: As a Developer I want to be able to have an application that connects Non-Profit Orgs with Developers.
* Developer: As a Developer I want to have NPO and Devs to have seperate and editable profile pages.
* Developer: As a Developer I want to have a reviews section so that the users can give feedback.
* Developer: As a Developer I want to have filtering options to narrow down searches.
#### User Viewpoint:
* DEVolunteer User: As a user I want to be able to see DEVs/NPO that I can use to help better the organization.
* DEVolunteer User: As a user I want to have an easy way to contact the NPO/DEV.
* DEVolunteer User: As a user I want an easy to use interface when searching
* DEVolunteer User: As a user I want to be able to see some work or examples before committing someone or entity.
#### Marketing Viewpoint:
* Marketing Agent: As a marketer I want the website to be user friendly and easy to use.
* Marketing Agent: As a marketer I want to show the website can be great asset to building on volunteer work.
---
##### Team Members:
* JR Iriarte
* Jacob Isenberg  
* Michael Bishop
* Jonathan Daniel

##### Stretch Goals
* Type of Payment(tipping method)

##### Resources: -->
