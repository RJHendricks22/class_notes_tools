## Fellowship of the Ring DOM Manipulation

![A gif of the fellowship of the ring](images/theFellowship.gif)

Create functions for each of the following steps to practice DOM Manipulation and JavaScript. These should each be called in order after the window has loaded.

#### Exercise Objectives

- practice querying and manipulating the DOM with JavaScript
- practice self-directed learning

#### Completion

Please finish up to part 5. As always: more is better; healthy living is best.

### Resources

- [DOM Reading](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [DOM Cheatsheet](http://christianheilmann.com/stuff/JavaScript-DOM-Cheatsheet.pdf)
- [How Browsers Work](http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)

#### Part 1

```js
var makeMiddleEarth = function(){
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of each land
  // append middle-earth to your document body

  //this is one way you could get started
  var middleEarth = document.createElement('section');
  //createElement is a javascript method that creates a new HTML element based
  //off the tag you feed as an argument
  middleEarth.id = 'middle-earth';
  //we use the .id method to assign this newly created secetion tag an id
  body.appendChild(middleEarth);
  //body.appendChild actually "saves" the element to the body
  //so we can actually see it and interact with it

  // creates & appeds lands/h1 tags
  lands.forEach(function(land) {
    //here "lands" refers to the array of strings named "lands"
    //and so we iterate across it
    //and, as we do so, we use the variable "land" (defined in the function parameter on line 42)
    //to represent each item of the lands array
    var article = document.createElement('article');
    article.id = land.toLowerCase().replace(/ /g,'-');
    var header = document.createElement('h1');
    header.textContent = land;
    //here it is important to note that header.textContent is being set not to the string "land"
    //but actually to current index of the lands array we are iterating over
    article.appendChild(header);
    middleEarth.appendChild(article);
  });  
}

makeMiddleEarth();
```

#### Part 2
```js
var makeHobbits = function(){
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit
}
```

#### Part 3
```js
var keepItSecretKeepItSafe = function(){
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo
}
```

#### Part 4

```js
var makeBuddies = function(){
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}
```

#### Part 5

```js
var beautifulStranger = function(){
  // change the 'Strider' textnode to 'Aragorn'
}
```

## Bonus

#### Part 6
```js
var leaveTheShire = function(){
  // assemble the hobbits and move them to Rivendell
}
```

#### Part 7

```js
var forgeTheFellowShip = function(){
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}
```

#### Part 8

```js
var theBalrog = function(){
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}
```

#### Part 9
```js
var hornOfGondor = function(){
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}
```

#### Part 10
```js
var  = functionitsDangerousToGoAlone({
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}
```

#### Part 11
```js
var weWantsIt = function(){
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}
```

#### Part 12
```js
var thereAndBackAgain = function(){
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
```
