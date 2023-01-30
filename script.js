// const playerScore = document.getElementById('playerScore');
// playerScore = 0;
// const computerScore = document.getElementById('computerScore');
// computerScore = 0;
// const winnerText = document.getElementById('winnerText'); 
const computerChoiceText = document.getElementById('computerChoice');
const playerChoiceText = document.getElementById('playerChoice');
const playerChoices = document.querySelectorAll('button');
let playerChoice = '';
let computerChoice = '';


playerChoices.forEach(choice => {
    choice.onclick = function() {userChoice()};
    function userChoice() {
        playerChoice = choice.innerText;
        playerChoiceText.innerHTML = playerChoice;
        computerOptions();
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

