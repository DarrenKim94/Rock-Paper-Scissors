let playerScore = 0;
let computerScore = 0;

function computerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0){
        computerChoice = 'rock'
    }
    if (randomChoice === 1){
        computerChoice = 'paper'
    }
    if (randomChoice === 0){
        computerChoice = 'scissors'
    }
}