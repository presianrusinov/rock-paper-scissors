let wins = 0;
let losses = 0;
let ties = 0;
const winningScore = 5;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playRound(playerSelection) {
    if (wins === winningScore || losses === winningScore) {
        endGame();
        return;
    }

    let computerSelection = getComputerChoice();

    if (
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "scissors" && playerSelection === "paper")
    ) {
        losses++;
        displayRoundResult(`You lose! ${computerSelection} beats ${playerSelection}!`);
    } else if (
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        wins++;
        displayRoundResult(`You win! ${playerSelection} beats ${computerSelection}!`);
    } else {
        ties++;
        displayRoundResult("It's a tie!");
    }

    updateStats();
    checkWinner();
}

function displayRoundResult(result) {
    const roundResult = document.getElementById("roundResult");
    roundResult.textContent = result;
}

function updateStats() {
    const winsElement = document.getElementById("wins");
    const lossesElement = document.getElementById("losses");
    const tiesElement = document.getElementById("ties");

    winsElement.textContent = wins;
    lossesElement.textContent = losses;
    tiesElement.textContent = ties;
}

function checkWinner() {
    if (wins === winningScore) {
        endGame("You win the game!");
    } else if (losses === winningScore) {
        endGame("Computer wins the game!");
    }
}

function endGame(message = "") {
    displayRoundResult(message);
    disableButtons();
}

function disableButtons() {
    const buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.disabled = true;
    }
}


function updateStats() {
    const winsElement = document.getElementById("wins");
    const lossesElement = document.getElementById("losses");
    const tiesElement = document.getElementById("ties");

    winsElement.textContent = wins;
    lossesElement.textContent = losses;
    tiesElement.textContent = ties;
}



