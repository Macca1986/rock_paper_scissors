// Sound effects
const sounds = {
    win: new Audio('path/to/win.mp3'),
    lose: new Audio('path/to/lose.mp3')
};

// Game state
let humanScore = 0;
let computerScore = 0;
let isGameOver = false;
let gameHistory = [];

// DOM Elements
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const winnerMessage = document.querySelector("#result");
const playerChoiceDisplay = document.querySelector("#player-choice");
const computerChoiceDisplay = document.querySelector("#computer-choice");
const historyList = document.querySelector("#history-list");
const resetBtn = document.querySelector("#reset-btn");

// Get computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

// Update choice indicators
function updateChoiceIndicators(playerChoice, computerChoice) {
    const choiceIcons = {
        rock: "fa-hand-rock",
        paper: "fa-hand-paper",
        scissors: "fa-hand-scissors"
    };

    playerChoiceDisplay.innerHTML = `<i class="fas ${choiceIcons[playerChoice]}"></i>`;
    computerChoiceDisplay.innerHTML = `<i class="fas ${choiceIcons[computerChoice]}"></i>`;

    playerChoiceDisplay.classList.add("active");
    computerChoiceDisplay.classList.add("active");
}

// Add round to history
function addToHistory(playerChoice, computerChoice, result) {
    const historyItem = document.createElement("div");
    historyItem.className = "history-item";
    historyItem.innerHTML = `
        <i class="fas fa-hand-${playerChoice}"></i>
        vs
        <i class="fas fa-hand-${computerChoice}"></i>
        - ${result}
    `;
    historyList.insertBefore(historyItem, historyList.firstChild);
    if (historyList.children.length > 5) {
        historyList.removeChild(historyList.lastChild);
    }
}

// Play a single round
function playRound(playerChoice, computerChoice) {
    if (isGameOver) return;

    updateChoiceIndicators(playerChoice, computerChoice);

    let result = "";
    if (playerChoice === computerChoice) {
        result = "Tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        result = "You win this round!";
    } else {
        computerScore++;
        result = "Computer wins this round!";
    }

    addToHistory(playerChoice, computerChoice, result);
    setScores();
    checkWinner();
}

// Update scores
function setScores() {
    playerScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    // Add animation to the score that changed
    playerScoreDisplay.style.transform = "scale(1.2)";
    computerScoreDisplay.style.transform = "scale(1.2)";
    setTimeout(() => {
        playerScoreDisplay.style.transform = "scale(1)";
        computerScoreDisplay.style.transform = "scale(1)";
    }, 200);
}

// Check for winner
function checkWinner() {
    if (humanScore >= 5 || computerScore >= 5) {
        isGameOver = true;
        if (humanScore >= 5) {
            winnerMessage.textContent = "🎉 Congratulations, you win! 🎉";
            sounds.win.play();
        } else {
            winnerMessage.textContent = "😔 Game Over - Computer wins! 😔";
            sounds.lose.play();
        }
        resetBtn.style.display = "block";
    }
}

// Reset game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    isGameOver = false;
    gameHistory = [];
    historyList.innerHTML = "";
    setScores();
    winnerMessage.textContent = "First to 5 Wins!";
    resetBtn.style.display = "none";
    playerChoiceDisplay.innerHTML = '<i class="fas fa-question"></i>';
    computerChoiceDisplay.innerHTML = '<i class="fas fa-question"></i>';
    playerChoiceDisplay.classList.remove("active");
    computerChoiceDisplay.classList.remove("active");
}

// Event Listeners
document.querySelector("#rock-btn").addEventListener("click", () => playRound("rock", getComputerChoice()));
document.querySelector("#paper-btn").addEventListener("click", () => playRound("paper", getComputerChoice()));
document.querySelector("#scissors-btn").addEventListener("click", () => playRound("scissors", getComputerChoice()));
resetBtn.addEventListener("click", resetGame);

// Initialize
resetBtn.style.display = "none";