console.log("followship.js loaded");
// An example of using setTimeout to call makeMiddleEarth after 2 seconds.

var makeMiddleEarth = function() {
  // Create a section tag with an id of middle-earth
  // Create an article tag for each land in the lands array in characters.js
  // Give each article tag a class of "land"
  // Inside each article tag include an h1 with the name of the land
  // Append each article.land to section#middle-earth
  // Append section#middle-earth to the document body
  // Use setTimeout to delay the execution of the next function (in this case,
  // makeHobbits) by several seconds
    let section = $('<section id="middle-earth"></section>');
    $('body').append(section);
    lands.forEach(function(land) {
        section.append('<article class="land"><h1>' + land + '</h1></article>')
    })   
}
setTimeout(makeMiddleEarth, 2000)

var makeHobbits = function() {
  // Create a ul with an id of "hobbits"
  // Create li tags for each Hobbit in the hobbits array in characters.js
  // Give each li tag a class of "hobbit"
  // Set the text of each li.hobbit to one of the Hobbits in the array
  // Append the ul#hobbits to the article.land representing "The Shire"
  // (the first article tag on the page)
    let eachHobbit = $('<ul id="hobbits"></ul>')
    hobbits.forEach(function(hobbit){
        eachHobbit.append('<li class="hobbit">' + hobbit + '</li>')
    });
    $('.land').first().append(eachHobbit.first());
}
setTimeout(makeHobbits, 4000)

var keepItSecretKeepItSafe = function() {
  // Create a div with an id of 'the-ring'
  // Give div#the-ring a class of 'magic-imbued-jewelry'
  // Add an event listener so that when a user clicks on the ring,
  // The nazgulScreech function (provided in index.html) is invoked
  // look up .click() - https://api.jquery.com/click/ in the jQuery docs to see how this works
  // it'll look like target.click(nazgulScreech)
  // bit of a freebie since we're not covering events until tomorrow
  // Add div#the-ring as a child element of the li.hobbit representing "Frodo"
  // Use setTimeout to delay the execution of the next function
    let oneRing = ('<div id="the-ring" class="magic-imbued-jewelry">');
    let frodo = $('ul .hobbit').first();
    frodo.append('<div id="the-ring" class="magic-imbued-jewelry">');
    // FOR SOME REASON THE BROWSER IS CONVERTING THE < CHARACTER TO &lt; AND I CAN'T CONVERT IT
}
setTimeout(keepItSecretKeepItSafe, 6000)

var makeBuddies = function() {
  // Create an aside tag
  // Create a ul tag with an id of "buddies" and append it to the aside tag
  // Create li tags for each buddy in the buddies array in characters.js
  // give each li tag a class of "buddy" and append them to "ul#buddies"
  // Insert the aside tag as a child element of the section.land representing "Rivendell"
  // Use setTimeout to delay the execution of the next function
    $('.land:nth-child(2)').append('<aside></aside>');
    let buddyList = $('<ul id="buddies"></ul>');
    buddies.forEach(function(buddy) {
        buddyList.append('<li class="buddy">' + buddy + '</li>')
    });
    $('aside:nth-child(2)').append(buddyList);
}
setTimeout(makeBuddies, 8000);

var beautifulStranger = function() {
  // Find the li.buddy representing "Strider"
  // Change the "Strider" textnode to "Aragorn" and make its text green
  // Use setTimeout to delay the execution of the next function
    let strider = $('.buddy:nth-child(4)');
    strider.text('Aragorn');
}
setTimeout(beautifulStranger, 10000);

var leaveTheShire = function() {
  // Assemble the Hobbits and move them to Rivendell
  // Use setTimeout to delay the execution of the next function
    let rivendell = $('.land:nth-child(2) aside')
    let eachHobbit = $('#hobbits')
    rivendell.append(eachHobbit);
}
setTimeout(leaveTheShire, 12000);

var forgeTheFellowShip = function() {
  // Create a div with an id of 'the-fellowship' within the section.land for "Rivendell"
  // Add each hobbit and buddy one at a time to 'div#the-fellowship'
  // After each character is added make an alert that they have joined your party
  // Use setTimeout to delay the execution of the next function by several seconds
        let rivendell = $('.land:nth-child(2)');
        let fellowship = ('<div id="the-fellowship"></div>');
        rivendell.append(fellowship);
        let fellowshipList = $('<ul id="fellowship"></ul>');
        let buddyList = $('.buddy');
        let eachHobbit = $('.hobbit');
        console.log(eachHobbit)
        eachHobbit.each(function(index, el){
            fellowshipList.append('<li class="hobbit">' + el.text + '</li>');
            alert(el.text + 'has joined the party!')
        });
        $('#the-fellowship').append(fellowshipList);
//        buddyList.forEach(function(buddy){
//            $('#the-fellowship').append(buddy);
//        });
}
setTimeout(forgeTheFellowShip, 14000);

var theBalrog = function() {
  // Select the "li.buddy" for "Gandalf"
  // And change its textNode to "Gandalf the White"
  // Apply style to the element, adding a "3px solid white" border to it
  // Use setTimeout to delay the execution of the next function
  $('.buddy').first().text('Gandalf the White').css('border','3px solid white');
  
}
setTimeout(theBalrog, 16000);

var hornOfGondor = function() {
  // Pop up an alert that the Horn of Gondor has been blown
  // Put a line-through on Boromir's name
  // And fade Boromir's opacity to 0.3 (he lives on in spirit)
  // Use setTimeout to delay the execution of the next function
  alert('The Horn of Gondor has been blown');
  $('.buddy:nth-child(5)').css({
    'text-decoration': 'line-through',
    'opacity' : '0.3'
  });
}
setTimeout(hornOfGondor, 18000);
