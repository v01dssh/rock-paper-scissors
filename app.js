// Score Counter
let playerWins = 0;
let computerWins = 0;
// Computer choice logic
function computerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let choices = ["rock", "paper", "scissors"];
    return choices[randomNumber];
}

// Algorithm for determining the winner
function playRound(playerChoice, computerChoice) {
    // Rock beats Scissors 
    if (playerChoice === "rock" && computerChoice === "scissors") {
        playerWins += 1;
    }
    else if (playerChoice === "scissors" && computerChoice === "rock") {
        computerWins += 1;
    }

    // Paper beats Rock
    else if (playerChoice === "paper" && computerChoice === "rock") {
        playerWins += 1;
    }
    else if (playerChoice === "rock" && computerChoice === "paper") {
        computerWins += 1;
    }

    // Scissors and Paper
    else if (playerChoice === "scissors" && computerChoice === "paper") {
        playerWins += 1;
    }
    else if (playerChoice === "paper" && computerChoice === "scissors") {
        computerWins += 1;
    }
    else {
        alert("Tie");
    }
}

// Assign how many rounds you want to play
let rounds = 5;
document.getElementById("score-counter").innerHTML = rounds;

// Logic for handling when the player clicks the rock image
function rockPlay() {
    playRound("rock", computerChoice());
    updateNumbers();
    determineWinner();
}

// Logic for handling when the player clicks the paper image
function paperPlay() {
    playRound("paper", computerChoice());
    updateNumbers();
    determineWinner();
}

// Logic for handling when the player clicks the scissors image
function scissorsPlay() {
    playRound("scissors", computerChoice());
    updateNumbers();
    determineWinner();
}

// Function for updating the Scores, and round numbers (cleaner and more readable)
function updateNumbers() {
    document.getElementById("player-counter").innerHTML = playerWins;
    document.getElementById("computer-counter").innerHTML = computerWins;
    rounds -= 1;
    document.getElementById("score-counter").innerHTML = rounds;
}

// Logic for determining the Winner, or Tie conditions
function determineWinner() {
    if (rounds === 0 && playerWins > computerWins) {
        location.replace("./win-condition/win.html");
    }
    else if (rounds === 0 && playerWins < computerWins) {
        location.replace("./lose-condition/lose.html");
    }
    else if (rounds === 0 && playerWins === computerWins) {
        location.reload();
    }
}

document.getElementById("rock").onclick = rockPlay;
document.getElementById("paper").onclick = paperPlay;
document.getElementById("scissors").onclick = scissorsPlay;
