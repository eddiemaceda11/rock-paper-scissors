const arr = ["rock", "paper", "scissors"];

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    roundPlayed = playRound();

    if (roundPlayed === "Player wins") {
      playerScore += 1;
    } else if (roundPlayed === "Computer wins") {
      computerScore += 1;
    }

    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
  }

  if (playerScore === computerScore) {
    console.log("The Match is a draw!");
  } else if (playerScore > computerScore) {
    console.log(
      "Final score: Player - " +
        playerScore +
        ", Computer - " +
        computerScore +
        ". Player wins the match!"
    );
  } else {
    console.log(
      "Final score: Player - " +
        playerScore +
        ", Computer - " +
        computerScore +
        ". Computer wins the match!"
    );
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("CHOOSE ROCK, PAPER, OR SCISSOR").toLowerCase();
  computerSelection = getComputerChoice();

  console.log("Player choice: " + playerSelection);
  console.log("Computer choice: " + computerSelection);

  if (playerSelection === computerSelection) {
    return "TIE GAME";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "Player wins";
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    return "Computer wins";
  } else {
    return "NOT A VALID ENTRY";
  }
}

function getComputerChoice() {
  return arr[Math.floor(Math.random() * arr.length)];
}

game();
