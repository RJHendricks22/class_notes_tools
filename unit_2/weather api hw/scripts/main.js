
$( document ).ready(function() {

  let apiKey = $.getScript("./apikey.js", function(){
  });
  console.log(apiKey.responseText);
//  let apiKey = 'e688ae8003b1e44b6ed7917e2444930c'; 
  let submitButton = $('#submit_button');
  let submitCity = $('#city_entered');
  let domForecast = $('#forecast');
  function ajaxApiWeather(name) {
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?q='+name+'&id=524901&APPID='+apiKey.responseText+'&units=imperial',
      method: 'GET',
      success: function(data){
        console.log('In '+data.name+ ' it is '+data.main.temp+' degrees Fahrenheit');
        domStuff(data)
      }
    });
  }

  function domStuff(obj) {
    domForecast.text('In '+obj.name+ ' it is '+obj.main.temp+' degrees Fahrenheit')
  }

  submitButton.click( function(){
    event.preventDefault();
    cityName = submitCity.val();
    ajaxApiWeather(cityName);
  });


});