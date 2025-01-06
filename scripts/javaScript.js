// create function that gets the computers choice
function getComputerChoice() {
    let randNum = Math.random();
    // console.log(randNum);
    // multiply by three for choosing from the three options
    let choiceNum = randNum * 3;
    // console.log(choiceNum);
    // choose rock paper or scissors based on the above using conditionals
    if (choiceNum < 1) {
        return "rock";
    } else if (choiceNum < 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// logic to get the human player choice from buttons
function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper or scissors").toLowerCase();
    return humanChoice;
}

// initialise variables to keep score
let humanScore = 0;
let computerScore = 0;

// write logic to play a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore += 1;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore += 1;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore += 1;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore += 1;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore += 1;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore += 1;
    }
}

// logic to update scores
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");

function setScores() {
    playerScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
}

// logic to set winner message
const winnerMessage = document.querySelector("#result");

function displayWinner() {
    if (humanScore >= 5) {
        winnerMessage.textContent = "Congratulations, you win!";
    } else if (computerScore >=5) {
        winnerMessage.textContent = "Sorry, you lose!"
    };
}

// add event listeners to the buttons
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

rockBtn.addEventListener("click", function (e) {
    computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
    setScores();
    displayWinner();
});

paperBtn.addEventListener("click", function (e) {
    computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
    setScores();
    displayWinner();
});

scissorsBtn.addEventListener("click", function (e) {
    computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
    setScores();
    displayWinner();
});