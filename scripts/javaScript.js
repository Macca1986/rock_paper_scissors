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

// logic to get the human player choice
function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper or scissors").toLowerCase();
    return humanChoice;
}



// write logic to play 5 rounds of the game
function playGame() {
    // initialise variable to keep scores
    let humanScore = 0;
    let computerScore = 0;

    // write logic to play a single round
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
        console.log("It's a draw! You both chose " + humanChoice);
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
        console.log("The score is Human: " + humanScore + " to Computer: " + computerScore);
    }

    // play the game 5 times, prompting for user and computer choices each round
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    
    // display result message after 5 rounds are complete
    if (humanScore > computerScore) {
        console.log("Congratulations, you win!");
    } else if (computerScore > humanScore) {
        console.log("Sorry, you lose!");
    } else {
        console.log("It's a draw!");
    }
}