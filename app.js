// Take Player Input
let playerChoice = prompt("Rock, Paper, or Scissors ?").toLowerCase();

let playerWins = 0;
let computerWins = 0;

// Computer choice logic
function computerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let choices = ["rock", "paper", "scissors"];
    return choices[randomNumber];
}

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

    // Tie 
    else {
        console.log("Tie");
    }
}


let rounds = 5;
while (rounds > 0) {
    let playerChoice = prompt("Rock, Paper, or Scissors ?").toLowerCase();
    playRound(playerChoice, computerChoice());
    rounds -= 1;
}

console.log(playerWins);
console.log(computerWins);
