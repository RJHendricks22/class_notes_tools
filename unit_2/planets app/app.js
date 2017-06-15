var express = require('express');
var app = express();
var mustacheExpress = require('mustache-express');
var bodyParser = require('body-parser');
var pgp = require('pg-promise')();
var db = pgp('postgres://raymondhendricks@localhost:5432/alien_species')

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use("/", express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//home page
app.get('/', function(req, res){
  res.render('index')
})
//all creatures
app.get('/creatures', function(req,res){
  db.any('SELECT * FROM creatures')
    .then(function(data){
    let creaturesArray = {
      title: "All species",
      creatures: data
    };
    res.render('creatures/index', creaturesArray)
  })
})
//specific creature
app.get('/creatures/:id', function(req,res){
  let id = req.params.id;
  db.one('SELECT * FROM creatures WHERE id = $1', [id])
    .then(function(data){
    let creaturesArray = {
      species: data.species,
      family: data.family,
      habitat: data.habitat,
      diet: data.diet,
      planet: data.planet
    };
    res.render('creatures/show', creaturesArray)
  })
})
//planets main page
app.get('/planets', function(req, res){
  db.any('SELECT planet FROM creatures GROUP BY planet')
    .then(function(data){
      let planetsList = {
        planet: data
      };
    res.render('planets/index', planetsList)
  })
})
//specific planet
app.get('/planets/:id', function(req,res){
  let id = req.params.id;
  db.any('SELECT * FROM creatures WHERE planet = $1', [id])
    .then(function(data){
    let planetsArray = {
      title: id,
      planets: data,
    };
    res.render('planets/show', planetsArray)
  })
})
//new creature page
app.get('/creature/new', function(req,res){
  res.render('creatures/new')
})
//posting new creature
app.post('/creatures', function(req,res){
  let newCreature = req.body;
  db.none('INSERT INTO creatures (species, family, habitat, diet, planet) VALUES ($1, $2, $3, $4, $5)', [newCreature.species, newCreature.family, newCreature.habitat, newCreature.diet, newCreature.planet])
    .then(function() {
      res.redirect('/creatures')
  });
});
app.listen(3000, function(){
  console.log('Running!')
})