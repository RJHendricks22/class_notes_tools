$(function() {
console.log( "ready!" );
  $('p').last().after('<p id="homeworld">')
  $('p').last().after('<p id="species">')
//Create an .click that our ajax calls will go inside of. 
  $('body').click(function(){


//Find a way to determine the max number of people in the api. 
//Their documentation should help: http://swapi.co/documentation#people
//Generate a random number between 1 and that number.
  let rand = Math.floor(Math.random()*87) + 1
//Make an Ajax call to /people/your_rand_number
  $.ajax({
    "url": "http://swapi.co/api/people/"+rand,
    "method": "GET",
    "success": function(data){
      console.log("Got: "+data.name)
      console.log(data)

//Append all the data to the page to the corresponding spots. 
      $('#name').text(data.name)
      $('#gender').text("Gender: "+data.gender)
      $('#height').text("Height: "+data.height)
      $('#mass').text("Mass: "+data.mass)
      $('#hair_color').text("Hair Color: "+data.hair_color)
      $('#skin_color').text("Skin Color: "+data.skin_color)
      $('#eye_color').text("Eye Color: "+data.eye_color)
      $('#birth_year').text("Birth Year: "+data.birth_year)

//Make another API call to the route using the object's "homeworld" url. 
//Examine the object to find this. This ajax call happens INSIDE the success
//of the first ajax call. 
      $.ajax({
        url:data.homeworld,
        method:"GET",
        success: function(planet_data){
          console.log(planet_data)
          $('#homeworld').text("HomeWorld: "+planet_data.name)

          $.ajax({
            url:data.species[0],
            method:"GET",
            success: function(species_data){
              console.log(species_data)
              // species_data.each(function(x){
              //   console.log(x)
              // })
              $('#species').text("Species: "+species_data.name)
            }
          })


        }
      })      

    }
  })


//Append this data to the page also. 

//Inside of this success hit the api again to find the FIRST species of the character
//Make another API call to the route using the original objects "species" url

//what else can you pull out of the API and work with?

  })
})