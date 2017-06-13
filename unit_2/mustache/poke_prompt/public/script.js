$(document).ready(function(){

  function pokeStats (obj) {
    
    $.ajax({
      url: 'http://pokeapi.co/api/v2/pokemon/'+obj.name.toLowerCase(),
      method: 'GET',
      success: function(data) {
        let types = []
        for (var x=0;x<data.types.length; x++){
          let type = data.types[x].type.name;
          types.push(type)
        };
        let strTypes = types.join('<br>')
        $('#info-screen').html(obj.name +'<br>'+strTypes)
        $('#screen > img').attr('src','img/pokedex/pokemon/'+obj.name+'.jpg')
      }
    })
  }
// add an event listener to the blue button next to the input box.
  $('#blue-button-left').click(function(){
    let idNum = $('#nb').val()
    $.ajax({
      url: '/api/pokemon/'+idNum,
      method: 'GET',
      success: function(data) {
        pokeStats(data)
      }
    })
  })
// when you click it, it should make an ajax call to the api route we just made. 
// it will get the value from the input box, and request that id pokemon.
// when the ajax call is successful, you should be returned the name of the pokemon
// as a string. 


// with the response data we want to do the following: 

// 1. insert the pokemon into the img tag on the left side. 
//    the pokemon's url to it's image will be 'img/pokedex/pokemon/name.jpg'
// 2. append the name to the info-screen div. 

// 3. make an ajax call to the poke api requesting more data regarding this pokemon.
//    the 2nd ajax call will return info for this specific pokemon. we want to get 
//    the "TYPE" of this pokemon (fire, grass, ghost, etc.) We want to APPEND 
//    the type(s) of this pokemon to the string containing his name. It would be
//    nice if it were presented like so: 
//    Poliwrath
//    fighting
//    water

//    and not Poliwrath fighting water

});