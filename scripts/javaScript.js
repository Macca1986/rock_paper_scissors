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