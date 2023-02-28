//Create set variables for player and computer
let playerScore = 0;
let computerScore = 0;
let compChoice;
let playerChoice;
let playerScoreboard = document.querySelector(".p-count");
let computerScoreboard = document.querySelector(".c-count");
let whoWon = document.querySelector(".result");

//Function to randomly generate a choice for the computerScore
function computerChoice() {
  const computerOptions = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  compChoice = computerOptions[randomNum];
}

function shootRock() {
  playerChoice = "rock";
  computerChoice();
  console.log(playerChoice);
  console.log(compChoice);
  playGame(playerChoice, compChoice);
}

function shootPaper() {
  playerChoice = "paper";
  computerChoice();
  console.log(playerChoice);
  console.log(compChoice);
  playGame(playerChoice, compChoice);
}

function shootScissors() {
  playerChoice = "scissors";
  computerChoice();
  console.log(playerChoice);
  console.log(compChoice);
  playGame(playerChoice, compChoice);
}
//<!-- innerHTML gets the HTML contained within the element.-->
function playerWin() {
  playerScore++;
  playerScoreboard.innerHTML = playerScore;
  whoWon.innerHTML = "You won :)";
}

function playerLose() {
  computerScore++;
  computerScoreboard.innerHTML = computerScore;
  whoWon.innerHTML = "You lose :(";
}

function playGame(player, computer) {
  if (player === computer) {
    whoWon.innerHTML = "It's a tie :|";
  } else if (player === "rock" && computer === "scissors") {
    playerWin();
  } else if (player === "paper" && computer === "rock") {
    playerWin();
  } else if (player === "scissors" && computer === "paper") {
    playerWin();
  } else if (player === "rock" && computer === "paper") {
    playerLose();
  } else if (player === "paper" && computer === "scissors") {
    playerLose();
  } else if (player === "scissors" && computer === "rock") {
    playerLose();
  }
}

function reset() {
  playerScoreboard.innerHTML = "0";
  computerScoreboard.innerHTML = "0";
  whoWon.innerHTML = "";
}
