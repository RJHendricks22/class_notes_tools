console.log('u01d07 hw starter.js linked');

//code goes here
let zones = document.getElementsByClassName('zone');
let counter = [];
for (i=0;i<zones.length;i++) {
    zones[i].addEventListener("mouseover", function() {  
        this.className += ' green';
    });
    zones[i].addEventListener("mouseout", function() {
        this.className = 'zone';
    });
    zones[i].addEventListener("click", function() {
      if (this.style.background === 'green'){
        this.style.background = '';
      } else {
        this.style.background = 'green';
        this.setAttribute('green', 'green')
        this.onmouseover = function () {};
        this.onmouseout = function () {};
        if (zones[0].hasAttribute('green') && zones[1].hasAttribute('green') && zones[2].hasAttribute('green') && zones[3].hasAttribute('green') ){
            console.log('you win!');
        }
    }
    });
}
    




