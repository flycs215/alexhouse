/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score,roundScores,activePlayers, gamePlayer;
var dice, diceCheck;
init();




//Roll Dice Button Click event set
document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if (gamePlayer){
        //1. Random dice number
        var dice = Math.floor(Math.random()*6+1);

        //2. Show Dice image
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png'

        //3. Current Score acumulated

        if (dice !== 1){
            roundScores += dice;
            console.log(dice,diceCheck,roundScores);

            //3.1 two 6 continually make it call Next Player and Loose all his Scores
            if (dice === 6 & diceCheck === 6){
                scores[activePlayers] = 0;
                document.querySelector('#score-' + activePlayers).textContent = scores[activePlayers];
                nextPlayer();
            }else{
                document.querySelector('#current-'+activePlayers).textContent = roundScores;
                diceCheck = dice;
            }
            
        }else{
            console.log(dice);
            //Next Player
            nextPlayer();
        }

    }
    
    
    
})

document.querySelector('.btn-hold').addEventListener('click', function(){

    if (gamePlayer){
        //1. Add Current score to Global Score
        console.log(roundScores);
        scores[activePlayers] += roundScores;
        console.log(scores[activePlayers]);

        //2. Update the UI, Next Player
        document.querySelector('#score-' + activePlayers).textContent = scores[activePlayers];
        

        //3. Check if Player won the game
        if (scores[activePlayers]>=100){
            document.querySelector('#name-' + activePlayers).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';

            document.querySelector('.player-' + activePlayers + '-panel').classList.add('winner');  
            document.querySelector('.player-' + activePlayers + '-panel').classList.remove('active');

            gamePlayer = false;
        } else{
            //4. Next Player
            nextPlayer();
        }
    }

    
})

//New Game button

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    scores = [0,0];
    roundScores = 0;
    activePlayers = 0;
    gamePlayer = true;
    dice = 0;
    diceCheck = 0;

    //First time, show nothing Dice image
    document.querySelector('.dice').style.display = 'none';

    //Second time, Show 0 all score on first time.
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
 
}
function nextPlayer(){
    activePlayers == 0 ? activePlayers = 1 : activePlayers = 0;
    roundScores = 0;
    dice = 0;
    diceCheck = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';

}



//roundScores = 0;
//document.querySelector('#current-'+activePlayers).textContent = roundScores;

// Current Number Change randomly
//document.querySelector('#current-'+activePlayers).innerHTML= '<em>' + dice + '</em>';
//document.querySelector('#current-'+activePlayers).textContent= dice;

//put Score-0's number into a Variation.
var x = document.querySelector('#score-0').textContent;
console.log(x);


