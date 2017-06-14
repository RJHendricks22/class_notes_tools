$(document).ready(function(){
  console.log("loaded");
  var $body = $('body');
  var search = $('#click-me');
  // getResults function goes here
  function getResults (word, num) {
    $('ul').remove()
    $.ajax({
      url: 'http://api.giphy.com/v1/gifs/search?q=' + word +'&api_key=dc6zaTOxFJmzC&limit='+num,
      method: 'GET',
      success: function(results){
        let data = results.data;
        let $results = $('<ul></ul>');
        console.log(data);
        var $item, $downsized, $description, $thumbnail, $rating, $type, $source;
        data.forEach(function(el){
          let $item = $('<li></li>')
          let $thumbnail = $('<img style="width:200px;">')
          let $description = $('<div></div>')
          let $rating = $('<p></p>')
          let $type = $('<p></p>')
          let $source = $('<a ><p>Source</p></a>')
          let listHeight = Number(el.images.downsized.height) + 100;
          $item.addClass('item')
          $thumbnail.addClass('thumbnail')
          $rating.addClass('rating')
          $type.addClass('type')
          $source.addClass('source')
          $thumbnail.attr('src', el.images.downsized.url);
          $source.attr('href', el.source);
          $rating.text("Rating: " + el.rating)
          $type.text("Type: " + el.type)
          $description.append($rating)
          $description.append($type)
          $description.append($source)
          $item.append($description)
          $item.append($thumbnail)
          $results.append($item)
          $item.css("height", listHeight)
        })
        $body.append($results)
      }
    })
  }
  // Event Handlers go here
  function getInput() {
    var input = $('#giphy-search');
    var num = $('#number-gifs').val();
    if (num > 0 && num < 21){
//      console.log(num)
      getResults(input.val(), num);
      $('#badreq').remove();
    } else if (num <= 0) {
      $('ul').remove()
      $('#badreq').remove();
      let badreq = $('<h1></h1>');
      badreq.attr('id', 'badreq')
      badreq.text('Too few gifs!')
      badreq.css('text-align','center')
      $body.append(badreq);
    } else {
      $('ul').remove()
      $('#badreq').remove();
      let badreq = $('<h1></h1>');
      badreq.attr('id', 'badreq')
      badreq.text('Too many gifs! (max 20)')
      badreq.css('text-align','center')
      $body.append(badreq)
    }
  }

  search.click(getInput)
});
