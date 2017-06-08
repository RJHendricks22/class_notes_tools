console.log("Linked.");

// Our heros
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

// Their compatriots
var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];


// Their journey
var lands = ['The Shire', 'Rivendell', 'Mordor'];

// An example of using query selector
var body = document.querySelector('body');

// Part 1
// create a section tag with an id of middle-earth
// add each land as an article tag
// inside each article tag include an h1 with the name of each land
// append middle-earth to your document body

var makeMiddleEarth = function(){
  // creates and appends middle earth
  var middleEarth = document.createElement('section');
  middleEarth.id = 'middle-earth';
  body.appendChild(middleEarth);

  // creates & appeds lands/h1 tags
  lands.forEach(function(land) {
    var article = document.createElement('article');
    article.id = land.toLowerCase().replace(/ /g,'-');
    var header = document.createElement('h1');
    header.textContent = land;
    article.appendChild(header);
    middleEarth.appendChild(article);
  });

};
makeMiddleEarth();
// Part 2
// display an unordered list of hobbits in the shire (which is the second article tag on the page)
// give each hobbit a class of hobbit

var makeHobbits = function() {
  //grabs shire article
  var theShire = document.querySelector('#the-shire');

  // creates & appends hobbit unordered list
  var hobbitUl = document.createElement('ul');
  theShire.appendChild(hobbitUl);

  // creates & appends hobbit li's
  hobbits.forEach(function(hobbit){
    var hobbitLi = document.createElement('li');
    hobbitLi.classList.add('hobbit');
    hobbitLi.id = hobbit.toLowerCase().split(' ')[0];
    hobbitLi.textContent = hobbit;
    hobbitUl.appendChild(hobbitLi);
  });

};
makeHobbits();

// Part 3
// create a div with an id of 'the-ring'
// give the div a class of 'magic-imbued-jewelry'
// add the ring as a child of Frodo

// creates & appends ring div as a child of frodo li
var keepItSecretKeepItSafe = function() {
  var ring = document.createElement('div');
  ring.id = 'the-ring';
  ring.classList.add('magic-imbued-jewelry');
  var frodo = document.querySelector('#frodo');
  frodo.appendChild(ring);
}

keepItSecretKeepItSafe();

// Part 4
// create an aside tag
// attach an unordered list of the 'buddies' in the aside
// insert your aside as a child element of rivendell


var makeBuddies = function() {
  // creates aside & appends aside tag/buddies ul
  // creates & appends buddies ul
  var buddiesAside = document.createElement('aside');
  document.querySelector('#rivendell').appendChild(buddiesAside);

  // creates & appends buddies ul
  var buddiesUl = document.createElement('ul');
  buddiesAside.appendChild(buddiesUl);

  // creates and appends buddies li's
  buddies.forEach(function(buddyName){
    var buddyLi = document.createElement('li');
    buddyLi.classList.add('buddy');
    buddyLi.textContent = buddyName;
    buddyLi.id = buddyName.toLowerCase().split(' ')[0];
    buddiesUl.appendChild(buddyLi);
  });
};
makeBuddies();

// Part 5
 // change the 'Strider' textnode to 'Aragorn'

var beautifulStranger = function() {
  // changes the text of strider to aragorn
  document.querySelector('#strider').textContent = 'Aragorn';
};
beautifulStranger();

// Part 6
// assemble the hobbits and move them to Rivendell

var leaveTheShire = function() {
  // grabs hobbit ul
  var hobbitUl = document.querySelector('#the-shire ul');
  // removes the ul from the shire article & appends hobits to rivendell article
  document.querySelector('#rivendell').appendChild(hobbitUl);
}
leaveTheShire();


// Part 7
// create a new div called 'the-fellowship' within rivendell
// add each hobbit and buddy one at a time to 'the-fellowship'
// after each character is added make an alert that they have joined your party

var forgeTheFellowship = function() {
  // creates and appends fellowship div
  var theFellowship = document.createElement('div');
  theFellowship.id = 'the-fellowship';
  document.querySelector('#rivendell').appendChild(theFellowship);

  // creates and appends fellowship ul
  var fellowshipUl = document.createElement('ul');
  theFellowship.appendChild(fellowshipUl);

  // adds characters to fellowship and alerts that they joined
  var characters = document.querySelectorAll('li');
  characters.forEach(function(character){
    fellowshipUl.appendChild(character);
    alert(character.innerHTML + ' has joined the Fellowship.');
  });
};
forgeTheFellowship();

// Part 8
// change the 'Gandalf' textNode to 'Gandalf the White'
// apply style to the element
// make the background 'white', add a grey border

var theBalrog = function() {
  // grabs, renames, and styles gandalf
  var gandalf = document.querySelector('#gandalf');
  gandalf.textContent = 'Gandalf the White';
  gandalf.setAttribute('style','background-color: white; border: 1px solid grey;')
};
theBalrog();

// Part 9
// pop up an alert that the horn of gondor has been blown
// Boromir's been killed by the Uruk-hai!
// put a linethrough on boromir's name
// Remove Boromir from the Fellowship

var hornOfGondor = function() {
  // grabs fellowship ul & boromir
  var fellowship = document.querySelector('#the-fellowship ul');
  var boromir = document.querySelector('#boromir');

  // adds line through boromir's name
  boromir.setAttribute('style','text-decoration: line-through;');

  // removes boromir from fellowship
  alert('Boromir! I cried. Where is thy horn? Whither goest thou? O Boromir! But he was gone.');
  fellowship.removeChild(boromir);
};
hornOfGondor();

// Part 10
// take Frodo and Sam out of the fellowship and move them to Mordor
// add a div with an id of 'mount-doom' to Mordor

var itsDangerousToGoAlone = function() {
  // grabs mordor
  var mordor = document.querySelector("#mordor");

  // puts frodo and sam in an array & creates ul for them
  var frodoNSam = [];
  frodoNSam.push(document.querySelector('#frodo'));
  frodoNSam.push(document.querySelector('#samwise'));
  var insaneHobbits = document.createElement('ul');
  mordor.appendChild(insaneHobbits);

  frodoNSam.forEach(function(hobbit) {
    //removes sam & frodo and puts them in mordor
    insaneHobbits.appendChild(hobbit);
  });

  // creates and appends mount doom
  var mountDoom = document.createElement('div');
  mountDoom.id = 'mount-doom';
  mordor.appendChild(mountDoom);
}
itsDangerousToGoAlone();

// Part 11
// Create a div with an id of 'gollum' and add it to Mordor
// Remove the ring from Frodo and give it to Gollum
// Move Gollum into Mount Doom

var weWantsIt = function() {
  // creates and appends gollum
  var gollum = document.createElement('div');
  gollum.id = 'gollum';
  document.getElementById('mount-doom').appendChild(gollum);

  // removes the ring from frodo and adds it to gollum
  var ring = document.querySelector('#frodo').children[0];
  gollum.appendChild(ring);
};
weWantsIt();

// Part 12
// remove Gollum and the Ring from the document
// remove all the baddies from the document
// Move all the hobbits back to the shire

var thereAndBackAgain = function() {
  // grabs mount doom and removes gollum
  var mountDoom = document.querySelector('#mount-doom');
  var gollum = document.querySelector('#gollum');
  gollum.remove();

  // grabs and removes buddies from the dom
  var buddies = document.querySelectorAll('.buddy');
  buddies.forEach(function(buddy) {
    buddy.remove();
  });

  // grabs hobbits and moves them back to shire
  var hobbits = document.querySelectorAll('.hobbit');
  var shire = document.querySelector('#the-shire');
  hobbits.forEach(function(hobbit) {
    shire.appendChild(hobbit);
  });
};
thereAndBackAgain();

// functions
// makeHobbits();
// keepItSecretKeepItSafe();
// makeBuddies();
// beautifulStranger();
// leaveTheShire();
// forgeTheFellowship();
// theBalrog();
// hornOfGondor();
// itsDangerousToGoAlone();
// weWantsIt();
// thereAndBackAgain();
