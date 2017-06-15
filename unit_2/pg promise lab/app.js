///* An app will go here */
//let express = require('express');
//let app = express();
//
//let mustacheExpress = require('mustache-express');
//let bodyParser = require('body-parser');
//
//let pgp = require('pg-promise')();
//
//app.engine('html', mustacheExpress());
//app.set('vew engine', 'html');
//app.set('views', __dirname + '/views');
//app.use('/', express.static(__dirname + '/public'));
//app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());
//
//let db = pgp('postgres://raymondhendricks@localhost:5432/beer_list');
//app.get('/', function(req,res){
//  db
//    .any("SELECT * FROM beers")
//    .then(function(data){
//      let view_data = {
//        title: "shoebills Shoe Bar",
//        beers: data
//      }
//      res.render('index', view_data)
//    })
//  //1. connect to database
//  //2. ask database for the beers
//  //3. send beers to a view
//  //4. render view as html
//})
//
//app.listen(3000, function(){
//  console.log('this is running')
//})

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

/* Everything after this line we should understand => */
let db = pgp('postgres://raymondhendricks@localhost:5432/beer_list');

app.get("/", function(req, res){
  db
   .any("SELECT * FROM beers")
   .then(function(data){
     let view_data = {
       title: "Shoebill Shoe Bar",
       beers: data
     };
     res.render("index", view_data);
   })
 });

app.get("/:id", function(req,res){
  let id = req.params.id;
  db.one("SELECT * FROM beers WHERE id = $1", [id])
    .then(function(data){
      let view_data = {
        title: data.name,
        info: data
      };
    res.render("show", view_data);
  })
});


 // other types
 // db.one("")
 // db.none("") inserts nothing but can put something

 //1. connect to db
 //2. ask for db for beers in db
 //3. send those beers to view
 //4. render that view as html

app.listen(3000, function(){
 console.log("this is running")
});