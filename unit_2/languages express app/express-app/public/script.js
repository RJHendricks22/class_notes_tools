$( document ).ready(function() {
  console.log( "ready!" );
  let body = $('#body')
  body.append('<h1 id="title"></h1>')
  body.append('<h3 id="text"></h1>')
  $.ajax({
    url: '/api/npmPackages',
    method: 'GET',
    success: function(data){
      $('#title').empty().append(data.title)
      $('#text').empty().append(data.text)
      data.packages.forEach(function(el){
        console.log(el.name)
        body.append('<div id='+el.name+'></div>');
        $('#'+el.name).append('<h5>'+el.name+'</h5><p>'+el.category+'</p><img src="'+el.img+'">')
      }
    )}
  })
});