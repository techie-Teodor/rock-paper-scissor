const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultsText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const winnerScore = document.querySelectorAll(".winnerScore");

let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`
    computerText.textContent = `Computer: ${computer}`
    resultsText.textContent = checkWinner();
}));

function computerTurn() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch(randomNumber) {
        case 1: computer = "Rock";
        break;
        case 2: computer = "Paper";
        break;
        case 3: computer = "Scissors";
        break;
    }
}

function checkWinner() {
    if (player == computer) {
        return "It's a tie!";
    } else if (computer == "Rock") {
        return (player == "Paper") ? "You win!" : "You lose!"
    }
    else if (computer == "Paper") {
        return (player == "Scissors") ? "You win!" : "You lose!"
    } else if (computer == "Scissors") {
        return (player == "Rock") ? "You win!" : "You lose!"
    }
}