let body = document.getElementsByTagName('body')[0];

body.innerHTML += "<setting></setting>"

let setting = document.getElementsByTagName('setting')[0];
setting.innerHTML += "<characters></characters>"

let characters = document.getElementsByTagName('characters')[0];
characters.innerHTML += "<homer></homer>"

characters.innerHTML += "<barney></barney>"

let barney = document.getElementsByTagName('barney')[0];
barney.className = "drunk"

for (i = 0; i <= 15; i ++) {
    let duff = 'duff'+i;
	body.innerHTML += "<"+duff+"></"+duff+">"
}

let homer = document.getElementsByTagName('homer')[0]
homer.className = "drunk";

document.querySelector('barney').remove()

