let express = require('express');
let app = express();

let mustacheExpress = require('mustache-express');
let bodyParser = require('body-parser');

let pgp = require('pg-promise')();

app.engine('html', mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/views");
app.use("/", express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


let db = pgp('postgres://raymondhendricks@localhost:5432/realty_db');

app.get("/", function(req, res){
  res.render("index");
})
 
app.get("/buildings", function(req, res){
  db
   .any("SELECT * FROM buildings")
   .then(function(data){
    let view_data = {
      buildings: data
    };
     res.render("buildings/index", view_data);
   })
 });

app.get("/apartments", function(req, res){
  db
   .any("SELECT * FROM apartments")
   .then(function(data){
    let view_data = {
      apartments: data,
    };
     res.render("apartments/index", view_data);
   })
 });
 
app.get("/buildings/:id", function(req, res){
  let id = req.params.id;
  db
  // Taj helped with the ID placeholder
   .any("SELECT * FROM buildings WHERE id = $1", id)
   .then(function(data){
    let view_data = {
      building: data
    };
     res.render("buildings/show", view_data);
   })
 });

app.get("/apartments/:id", function(req, res){
  let id = req.params.id;
  db
   .any("SELECT * FROM apartments WHERE id = $1", id)
   .then(function(data){
    let view_data = {
      apartment: data
    };
     res.render("apartments/show", view_data);
   })
 });

app.listen(3000, function(){
 console.log("this is running")
});