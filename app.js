// Take Player Input
let playerChoice = prompt("Rock, Paper, or Scissors ?").toLowerCase();

// Computer choice logic
function computerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let choices = ["rock", "paper", "scissors"];
    return choices[randomNumber];
}
