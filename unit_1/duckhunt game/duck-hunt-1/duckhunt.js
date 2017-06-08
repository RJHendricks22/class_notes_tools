// This is a jQuery "ready" closure:
jQuery(function() {
  // - Unlike a normal closure, we don't have to call it
  // - jQuery will call it when the page is loaded
  let game_start = new Audio('audio/start-round.mp3');
  game_start.play();
  // I'll do some of the work for you, first I will grab the <body></body>
  var body = $('body');
  
  let createDuck = function() {
    // 1. Can you create a <div> with the class "duck" and name it "duck"
    let duck = $('<div class="duck"></div>')
    body.append(duck);
    // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
    setInterval(function(){ 
      duck.toggleClass('flap');
    }, 250);
    // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left"
    let moveDuck = function(){
      duck.css("top", Math.random()* window.innerHeight);
      duck.css("left", Math.random() * window.innerWidth);
    };
    setInterval(moveDuck, Math.random() * 2500+500);
    
    duck.on('click', function() {
        duck.addClass('shot');
        setTimeout(function(){
          duck.remove();
          checkWinner();
        } , 300);
        })
    };
  // 4. Try making the duck move to a different location after 1 second

  // 5. Congratulations!
  
  
  for (let i=0;i<3;i++){
    createDuck();
  }
  function checkWinner() {
    if($('.duck').length === 0){
      body.append('<h1 id="win">You win!</h1>')
    }
  }
})
