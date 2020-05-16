/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score,globalScores,activePlayers;
scores = [];
roundScores = 0;
activePlayers = 0;




//First time, show nothing Dice image
document.querySelector('.dice').style.display = 'none';

//Second time, Show 0 all score on first time.
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


//Roll Dice Button Click event set
document.querySelector('.btn-roll').addEventListener('click', function(){
    //1. Random dice number
    var dice = Math.floor(Math.random()*6+1);

    //2. Show Dice image
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png'

    //3. Current Score acumulated

    if (dice !== 1){
        roundScores += dice;
        document.querySelector('#current-'+activePlayers).textContent = roundScores;
    }else{
        //Next Player
        activePlayers == 0 ? activePlayers = 1 : activePlayers = 0;
        roundScores = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';
    }
    
})


//roundScores = 0;
//document.querySelector('#current-'+activePlayers).textContent = roundScores;

// Current Number Change randomly
//document.querySelector('#current-'+activePlayers).innerHTML= '<em>' + dice + '</em>';
//document.querySelector('#current-'+activePlayers).textContent= dice;

//put Score-0's number into a Variation.
var x = document.querySelector('#score-0').textContent;
console.log(x);


