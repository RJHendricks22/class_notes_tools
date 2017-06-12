$(document).ready(function(){
  alert('API IS NOW PRIVATE, NO MORE API :(')
  var getData = function(movieTitle, callback){
    $.ajax({
      url: "http://www.omdbapi.com/?t=" + movieTitle + "&r=json",
      method: 'GET',
      success: function(data){
        callback(data)
        console.log(data)
      }
    })
  };

  var addAJAXFunction = function(){
    $('#search-bar > div:nth-child(2) > button').on('click', function() {
      let movie = $('#search-bar > div:nth-child(1) > input').val()
      getData(movie, function(mov) {
        if (mov.Response === "True") {
          console.log(mov)
          handleResponse(mov)
        }
      })
    })  
  };
  addAJAXFunction();
  
  var appendMovie = function(name,imagePath){
    $('#movies > div > h5').text(name)
    $('#movies > div > img').attr('src',imagePath)
  };

  var handleResponse = function(data){
    console.log(data.Title)
    appendMovie(data.Title, data.Poster)
  };

}); // ends doc.ready
