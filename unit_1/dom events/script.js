


let buttons = document.getElementsByClassName('part1');
let rand = Math.floor(Math.random()*(buttons.length-0))+0;
let winner = buttons[rand]
winner.classList.add('winner')
    
for (let x=0; x < buttons.length; x++) {
    buttons[x].addEventListener('click',function(){
        if (this.classList.contains('winner')) {
            console.log('you win!');
            this.innerHTML = '<div class="cup" id="'+x+'"></div><div class="ball"></div>';
            document.getElementsByClassName('cup')[x].classList.add('clicked')
            document.getElementById('winbutton').innerHTML = '<input type="button" value="Play Again!!" onClick="window.location.reload()">'
        } else {
            console.log('you lose!');
          document.getElementsByClassName('cup')[x].classList.add('clicked')
        }
    }
)};

