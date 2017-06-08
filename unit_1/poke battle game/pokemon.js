"use strict";

(function(){
    // On load, pikachu's HP has odd characters within the text, so i'm resetting the text to strictly contain 'Health: 100', this doesn't change layout of anything on the html page, also lets me test heal button without having to damage pikachu.
////    $('#pikachu .health').text('Health: 90');
//  On second thought, i just changed the HTML so the heatlh is fixed, but i'll leave this so you know i altered the HTML a tiny bit
	let pokemon = [
		['Voltorb','images/voltorb.png',100],
		['Charizard','images/charizard.png',200],
		['Gyarados','images/gyarados.png',125],
		['Mew','images/mew.png',75],
		['Geodude','images/geodude.png',90],
		['Snorlax','images/snorlax.png',110],
		['Kabutops','images/kabutops.png',95],
		['Eevee','images/eevee.png',60],
		['Beedrill','images/beedrill.png',70],
		['Magikarp','images/magikarp.gif',40],
		['Gastly','images/gastly.png',50]
	];

	let chooseEnemy = function(){
	//picks random enemy from pokemon array. populates initial page with their data.
      let randomPok = Math.floor(Math.random()*pokemon.length);
//      testing output, which worked!
//      console.log(pokemon[randomPok][0]);
      $('#enemy .name').text(pokemon[randomPok][0]);
      $('#enemy_img').attr('src',pokemon[randomPok][1]);
      $('#enemy .health').text('Health: ' + pokemon[randomPok][2]);
	}
    
  
	let enemy = chooseEnemy();
  // status text bar
    let statusText = $('#status_text');
  
  // damage calculator and hit chance
    
  
	let doHeal = function(){
	//heals your character with a random ammount from 25-50
    //Heal amount
      let enemyPokName = $('#enemy .name').text();
      let healAmount = Math.floor(Math.random()*25 +25);
      let pikachuHp = $('#pikachu .health');
      let pikachuHpSplit = pikachuHp.text().split('');
      let actualHP = Number((pikachuHpSplit.slice(8,11)).join(''));
      if (actualHP === 100) {
        statusText.text('You are at full HP!');
      } else if (100 > actualHP && actualHP >= 75) {
        // In this range, pikachu would just go back to 100 so that's what i did here
        pikachuHpSplit.splice(8,3,'100');
        let healthRejoin = pikachuHpSplit.join('');
        pikachuHp.text(healthRejoin);
        statusText.text('You are back at full HP!');
      } else if (75 > actualHP && actualHP >= 50) {
        // this range is harder becuase the max it could be is 100 so i had to choose between the mins of 100 or 100 + the random heal
        let minHealValue = Math.min(healAmount, 100-actualHP);
        pikachuHpSplit.splice(8,3, minHealValue+actualHP);
        let healthRejoin = pikachuHpSplit.join('');
        pikachuHp.text(healthRejoin);
        statusText.text('You healed for: '+ minHealValue);
      } else {
        // this part is easy because we just add the heal amount to the current health
        pikachuHpSplit.splice(8,3, healAmount+actualHP);
        let healthRejoin = pikachuHpSplit.join('');
        pikachuHp.text(healthRejoin);
        statusText.text('You healed for: '+ healAmount);
      }
      setTimeout( function() {
        statusText.text(enemyPokName + ' Will attack in 3 seconds!') }, 2000);
      
      $('#heal_btn').hide();
      $('#attack_btn').hide();
	}
  
	let enemyAttack = function(){
	//10% chance to miss.
	//90% chance to do between 5-30 damage.
	//after completed, if you aren't dead... buttons reappear.
	//check if your health <= 0.
      let pikachuHp = $('#pikachu .health');
      let pikachuHpSplit = pikachuHp.text().split('');
      let actualHP = Number((pikachuHpSplit.slice(8,11)).join(''));
      let damageChance = Math.random() * 10;
      let damageAmount = Math.floor(Math.random()*25+5);
      let enemyPokName = $('#enemy .name').text();
      switch (true) {
        case (damageChance < 1):
          statusText.text(enemyPokName+ ' Missed!');
          break;
        case (damageChance >= 1):
          statusText.text(enemyPokName + ' hit you for '+ damageAmount + ' damage!');
          let calcHp = actualHP - damageAmount;
          pikachuHpSplit.splice(8,3, calcHp);
          let pikachuHpJoin = pikachuHpSplit.join('');
          $('#pikachu .health').text(pikachuHpJoin);
          break;
      };      
	}

	let youAttack = function(){
	//10% chance to miss.
	//90% chance to do between 5-30 damage.
	//after completed, says 'enemy will attack in 3 seconds' (buttons hidden during this time)
	//check if enemy health is <= 0.
      let enemyPokName = $('#enemy .name').text();
      let enemyHpText = $('#enemy .health');
      let enemyHpSplit = enemyHpText.text().split('');
      let enemyHP = Number((enemyHpSplit.slice(8,11)).join(''));
      let damageChance = Math.random() * 10;
      let damageAmount = Math.floor(Math.random()*25+5);
    // i used a switch because i was thinking about putting in a critical hit and ability to add the pokemon type advantages/resistances later on
      switch (true) {
        case (damageChance < 1):
          statusText.text('You Missed!');
          break;
        case (damageChance >= 1):
          statusText.text('You hit ' + enemyPokName +' for '+ damageAmount + ' damage!');
          let calcHp = enemyHP - damageAmount;
          enemyHpSplit.splice(8,3, calcHp);
          let enemyHpJoin = enemyHpSplit.join('');
          $('#enemy .health').text(enemyHpJoin);
          break;
      };
      
      if (Number(enemyHP-damageAmount) <= 0) {
        statusText.text('You win!');
      } else {
        setTimeout( function() {
        statusText.text(enemyPokName + ' Will attack in 3 seconds!') }, 2000);
      }
      $('#heal_btn').hide();
      $('#attack_btn').hide();
	}

	let addEventListeners = function(){
	//add the click events on the attack and heal buttons.
    // this function strings together the different functions on the click
      let attackCombo = function() {
        // enemy health 
        let enemyHpText = $('#enemy .health');
        let enemyHpSplit = enemyHpText.text().split('');
        let enemyHP = Number((enemyHpSplit.slice(8,11)).join(''));
        // pikachu health
        let pikachuHp = $('#pikachu .health');
        let pikachuHpSplit = pikachuHp.text().split('');
        let actualHP = Number((pikachuHpSplit.slice(8,11)).join(''));
        // alive check functions for each, would have combined if i had more time
        console.log('my hp: ' + actualHP)
        console.log(enemyHP)
        let aliveCheckYou = function() {
          // if your hp is > 0
          if (actualHP >= 0 && enemyHP >= 0) {
            // enemy will attack
            setTimeout(enemyAttack, 5000);
          } else {
            statusText.text('You lose!');
          };
        };

        if (enemyHP >= 0) {
            youAttack();
            aliveCheckYou(); 
            setTimeout(function(){
            statusText.text('What will you do?')
            $('#attack_btn').show()
            $('#heal_btn').show()},8000);
        } else if (actualHP >= 0){
            statusText.text('You win!!');
            $('#heal_btn').hide();
            $('#attack_btn').hide();
            $('#enemy_img').attr('src', '');
        } else {
            statusText.text('You lose!!');
            $('#heal_btn').hide();
            $('#attack_btn').hide();
            $('#pikachu_img').attr('src', '');
              }
          };
        let healCombo = function() {
          // enemy health 
          let enemyHpText = $('#enemy .health');
          let enemyHpSplit = enemyHpText.text().split('');
          let enemyHP = Number((enemyHpSplit.slice(8,11)).join(''));
          // pikachu health
          let pikachuHp = $('#pikachu .health');
          let pikachuHpSplit = pikachuHp.text().split('');
          let actualHP = Number((pikachuHpSplit.slice(8,11)).join(''));
          // alive check functions for each, would have combined if i had more time
          console.log('my hp: ' + actualHP)
          console.log(enemyHP)
          let aliveCheckYou = function() {
            // if your hp is > 0
            if (actualHP >= 0 && enemyHP >= 0) {
              // enemy will attack
              setTimeout(enemyAttack, 5000);
            } else {
              statusText.text('You lose!');
              $('#heal_btn').hide();
              $('#attack_btn').hide();
              $('#pikachu_img').attr('src', '');
            };
          };

          if (enemyHP >= 0) {
                doHeal();
                aliveCheckYou(); 
                setTimeout(function(){
                statusText.text('What will you do?')
                $('#attack_btn').show()
                $('#heal_btn').show()},8000);
                } else if (actualHP >= 0){
              statusText.text('You win!!');
              $('#heal_btn').hide();
              $('#attack_btn').hide();
              $('#enemy_img').attr('src', '');
                } else {
                  statusText.text('You lose!');
                  $('#heal_btn').hide();
                  $('#attack_btn').hide();
                }

          };
    
      $('#heal_btn').click(healCombo);
      $('#attack_btn').click(attackCombo);
    };
	$(document).ready(function(){
		addEventListeners();
    })
    
})();