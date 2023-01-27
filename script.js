let playerScore = 0;
let computerScore = 0;

const rockChoice = document.getElementById('rock'); 
const paperChoice = document.getElementById('paper'); 
const scissorChoice = document.getElementById('scissor'); 
const playerChoices = [rockChoice, paperChoice, scissorChoice];
let computerChoice = (Math.floor(Math.random() * 3 + 1));
const computerChoices = ['rock', 'paper', 'scissor']


function playGame() {
    if(computerChoice === 1) {
        computerChoice = 'rock'
    };
    if(computerChoice === 2) {
        computerChoice = 'paper'
    };
    if(computerChoice === 3) {
        computerChoice = 'scissor'
    };
    return computerChoice
}