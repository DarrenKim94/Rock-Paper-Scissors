// const playerScore = document.getElementById('playerScore');
// playerScore = 0;
// const computerScore = document.getElementById('computerScore');
// computerScore = 0;
const winnerText = document.getElementById('winnerText'); 
const computerChoiceText = document.getElementById('computer-Choice');
const playerChoiceText = document.getElementById('player-Choice');
const playerChoices = document.querySelectorAll('button');
let playerChoice;

// playerChoices.forEach(choice => choice.addEventListener('click', (e) => {
//     playerChoice = e.target.id;
//     playerChoiceText.innerHTML = playerChoice;
// }))

playerChoices.forEach(choice => {
    choice.onclick = function() {userChoice()};
    function userChoice() {
        playerChoice = choice.innerText;
        playerChoiceText.innerHTML = playerChoice;
    }
});

// function computerChoice() {
//     let ranNum = (Math.floor(Math.random() * 3 + 1));

//     if(ranNum === 1) {
//         ranNum = 'ROCK'
//     };
//     if(ranNum === 2) {
//         ranNum = 'PAPER'
//     };
//     if(ranNum === 3) {
//         ranNum = 'SCISSORS'
//     };
// }

// function checkWinner(player,computer){
//     if(player === computer){
//         winnerText.innerHTML = 'TIE.';
//     }
//     else if(player === 'ROCK'){
//         if(computer === 'SCISSORS'){
//             winnerText.innerHTML = 'PLAYER WINS. ROCK BEATS SCISSORS.';
//             playerScore += 1;
//         }
//         else if(computer=== 'PAPER'){
//             winnerText.innerHTML= 'CO MPUTER WINS. PAPER BEATS ROCK';
//             computerScore += 1;
//         }
//     }
//     else if(player === 'PAPER'){
//         if(computer === 'SCISSORS'){
//             winnerText.innerHTML = 'COMPUTER WINS. SCISSORS BEATS PAPER.';
//             computerScore += 1;
//         }
//         else if(computer === "ROCK"){
//             winnerText.innerHTML = 'PLAYER WINS. PAPER BEATS ROCK.';
//             playerScore += 1;
//         }
//     }
//     else if(player === "SCISSORS"){
//         if(computer === "PAPER"){
//             winnerText.innerHTML = 'PLAYER WINS. SCISSORS BEATS PAPER';
//             playerScore += 1;
//         }
//         else if(computer === "ROCK"){
//             winnerText.innerHTML = 'COMPUTER WINS ROCK BEATS SCISSORS';
//             computerScore += 1;
//         }
//     }
    
// }