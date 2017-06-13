var pokemon = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard",
"Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna",
"Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans",
"Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran-f","Nidorina","Nidoqueen","Nidoran-m",
"Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff",
"Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett",
"Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine",
"Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp",
"Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem",
"Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio",
"Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee",
"Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee",
"Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea"
,"Seadra","Goldeen","Seaking","Staryu","Starmie","Mr.Mime","Scyther","Jynx","Electabuzz","Magmar",
"Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon",
"Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini",
"Dragonair","Dragonite","Mewtwo","Mew"];


//1. start here. require express. don't forget to npm install. 
var express=require('express')
var app=express()

//2. start our server on port 3000 with app.listen
app.listen(3000,function(){
  console.log('our server is alive on port 3000')
})


//3. require mustache, don't forget to npm install. 
var mustacheExpress = require('mustache-express')

//4. configure mustache here. (app.engine, app.set, etc.)
app.engine('html',mustacheExpress())
app.set('view engine','html')
app.set('views',__dirname + '/html')
app.use(express.static(__dirname+'/public'))

//5. create a get route at '/' to serve out index.html
app.get('/',function(req,res){
  res.render('index')
})


//6. create a get route at '/api/pokemon/:id'
app.get('/api/pokemon/:id', function(req,res) {
  let id = req.params.id;
  id = parseInt(id)-1;
  let pokemonSelected = pokemon[id];
  res.send({"name":pokemonSelected});
  
})
//   when we request a certain id, get that pokemon from the pokemon array above. 
//   be sure to account for the array starting at 0. Bulbasaur should be pokemon #1, not #0. 
//   the return from this should be the NAME of the pokemon as a string. 
//   head to your script.js when this is complete... 