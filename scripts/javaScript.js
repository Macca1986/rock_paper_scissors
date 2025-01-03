console.log("Hello World");

// create function that gets the computers choice
function getComputerChoice() {
    let randNum = Math.random();
    console.log(randNum);
    // multiply by three for choosing from the three options
    let choiceNum = randNum * 3;
    console.log(choiceNum);
    // choose rock paper or scissors based on the above using conditionals
    if (choiceNum < 1) {
        return "rock";
    } else if (choiceNum < 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// logic to get the human player choice
function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper or scissors").toLowerCase();
    return humanChoice;
}

// initialise variable to keep scores
let humanScore = 0;
let computerScore = 0;

// write logic to play a single round
function playRound(humanChoice, computerChoice) {
     if (humanChoice == computerChoice) {
        console.log("It's a draw!");
     } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore += 1;
     } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore += 1;
     } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore += 1;
     } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore += 1;
     } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore += 1;
     } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore += 1;
     }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);