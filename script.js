const winnerText = document.getElementById('winnerText'); 
const computerChoiceText = document.getElementById('computerChoice');
const playerChoiceText = document.getElementById('playerChoice');
const playerChoices = document.querySelectorAll('button');
let playerChoice = '';
let computerChoice = '';
const playerScoreText = document.getElementById('playerScoreText');
const computerScoreText = document.getElementById('computerScoreText');
let playerScore = 0;
let computerScore =0;


playerChoices.forEach(choice => {
    choice.onclick = function() {userChoice()};
    function userChoice() {
        playerChoice = choice.innerHTML;
        playerChoiceText.innerHTML = playerChoice;
        computerOptions();
        checkWinner();
    }
});

function computerOptions() {
    const ranNum = (Math.floor(Math.random() * 3 + 1));
    if(ranNum === 1) {
        computerChoice = 'ROCK'
    };
    if(ranNum === 2) {
        computerChoice = 'PAPER'
    };
    if(ranNum === 3) {
        computerChoice = 'SCISSORS'
    };
    computerChoiceText.innerHTML = computerChoice;
}

function checkWinner() {
    if (playerChoice === computerChoice ){
        winnerText.innerHTML = 'TIE';
    }
    if (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') {
        winnerText.innerHTML = 'YOU WIN';
        playerScoreText.innerHTML = `Player Score: ${playerScore += 1}`;
    }
    if (playerChoice === 'ROCK' && computerChoice === 'PAPER') {
        winnerText.innerHTML = 'YOU LOSE';
        computerScoreText.innerHTML = `Computer Score: ${computerScore += 1}`
    }
    if (playerChoice === 'PAPER' && computerChoice === 'ROCK') {
        winnerText.innerHTML = 'YOU WIN';
        playerScoreText.innerHTML = `Player Score: ${playerScore += 1}`;
    }
    if (playerChoice === 'PAPER' && computerChoice === 'SCISSORS') {
        winnerText.innerHTML = 'YOU LOSE';
        computerScoreText.innerHTML = `Computer Score: ${computerScore += 1}`
    }
    if (playerChoice === 'SCISSORS' && computerChoice === 'PAPER') {
        winnerText.innerHTML = 'YOU WIN';
        playerScoreText.innerHTML = `Player Score: ${playerScore += 1}` ;
    }
    if (playerChoice === 'SCISSORS' && computerChoice === 'ROCK') {
        winnerText.innerHTML = 'YOU LOSE';
        computerScoreText.innerHTML = `Computer Score: ${computerScore += 1}`
    }
}
