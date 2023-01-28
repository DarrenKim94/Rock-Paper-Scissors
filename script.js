const playerScore = document.getElementById('playerScore');
playerScore = 0;
const computerScore = document.getElementById('computerScore');
computerScore = 0;
const winnerText = document.getElementById('winnerText'); 
const playerChoices = document.getElementsByTagName('button');



function playGame() {
    let computerChoice = (Math.floor(Math.random() * 3 + 1));

    if(computerChoice === 1) {
        computerChoice = 'ROCK'
    };
    if(computerChoice === 2) {
        computerChoice = 'PAPER'
    };
    if(computerChoice === 3) {
        computerChoice = 'SCISSORS'
    };
    return computerChoice
}

const checkWinner = function(playerChoice,computerChoice){
    if(playerChoice === computerChoice){
        winnerText.innerHTML = 'TIE.';
    }
    else if(playerChoice === 'ROCK'){
        if(computerChoice === 'SCISSORS'){
            winnerText.innerHTML = 'PLAYER WINS. ROCK BEATS SCISSORS.';
            playerScore += 1;
        }
        else if(computerChoice === 'PAPER'){
            winnerText.innerHTML= 'COMPUTER WINS. PAPER BEATS ROCK';
            computerScore += 1;
        }
    }
    else if(playerChoice === 'PAPER'){
        if(computerChoice === 'SCISSORS'){
            winnerText.innerHTML = 'COMPUTER WINS. SCISSORS BEATS PAPER.';
            computerScore += 1;
        }
        else if(computerChoice === "ROCK"){
            winnerText.innerHTML = 'PLAYER WINS. PAPER BEATS ROCK.';
            playerScore += 1;
        }
    }
    else if(playerChoice === "SCISSORS"){
        if(computerChoice === "PAPER"){
            winnerText.innerHTML = 'PLAYER WINS. SCISSORS BEATS PAPER';
            playerScore += 1;
        }
        else if(computerChoice === "ROCK"){
            winnerText.innerHTML = 'COMPUTER WINS ROCK BEATS SCISSORS';
            computerScore += 1;
        }
    }
    
}