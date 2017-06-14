'use strict'

$(document).ready(function(){

  var fixImgTags = function(){
    $('img').each(function() {
      if ( $(this).attr('posterpath')){
        var imgRoot = $(this).attr('src');
        var posterPath = $(this).attr('posterpath');
        var posterPath = posterPath.slice(0, posterPath.length-1)
        console.log(imgRoot + posterPath);
        $(this).attr('src', imgRoot + posterPath)
      }
    })
  }

  fixImgTags()

})
