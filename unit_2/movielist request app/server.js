var express = require('express');
var app = express();
var request = require('request')
var bodyParser = require('body-parser')

app.listen(3000, function(){
  console.log('server is running')
})
var mustacheExpress = require('mustache-express')

app.engine('html', mustacheExpress())
app.set('view engine','html')
app.set('views',__dirname + '/html')
app.use(express.static(__dirname+'/public'))

app.get('/', function(req,res){
  res.render('index')
})

app.get('/movies', function(req,res){
  var url = 'http://api.themoviedb.org/3/';
  var route = 'movie/now_playing?'
  var page = 'page=' + '1' +'&';
  var key = 'api_key=ebea8cfca72fdff8d2624ad7bbf78e4c';
  request(url + route + page + key, function(error, response, body){
    console.log('error: ', error)
    console.log('statusCode: ', response && response.statusCode)
//    console.log('body ',body)
    var data = JSON.parse(body)
    res.render('index', {
      movies: data.results
    })
  })
})
