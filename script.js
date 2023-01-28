const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const winnerText = document.getElementById('winnerText'); 
const playerChoices = document.getElementsByTagName('button');

playerChoices.forEach(choice => {
    choice.onclick = function() {userPick()};
    function userPick(){
        player = choice.textContent;
    }
});

function playGame() {
    let computerChoice = (Math.floor(Math.random() * 3 + 1));

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