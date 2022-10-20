// user makes selection from button on screen
// 3 buttons needed, one for each selection
// add Event list that call playRound() with correct playerselection each time btn clicked
let playerScore = 0;
let computerScore = 0;
let arr = ["rock", "paper", "scissors"];
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const div = document.querySelector("div");
const nav = document.querySelector("nav");

function getComputerChoice() {
  return arr[Math.floor(Math.random() * arr.length)];
}

function playRound(playerSelection, computerSelection) {
  // Write out the game logic
  if (playerSelection === computerSelection) {
    return "TIE GAME";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++;
    return "Player wins";
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    computerScore++;
    return "Computer wins";
  } else {
    return "NOT A VALID ENTRY";
  }
}

function checkForWinner(playerScore, computerScore) {
  if (playerScore === 5 || computerScore === 5) {
    const h2 = document.createElement("h1");
    h2.textContent = playerScore === 5 ? "Player WINS" : "Computer WINS";
    h2.style.color = "green";
    nav.appendChild(h2);
  }
}

function game() {
  rock.addEventListener("click", () => {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();

    roundResult = playRound(playerSelection, computerSelection);

    const para = document.createElement("p");
    const h3 = document.createElement("h3");

    para.textContent = `Player Choice: rock, Computer Choice: ${computerSelection}`;
    h3.textContent = roundResult;

    div.appendChild(para);
    div.appendChild(h3);

    checkForWinner(playerScore, computerScore);
  });

  paper.addEventListener("click", () => {
    const playerSelection = "paper";
    const computerSelection = getComputerChoice();

    roundResult = playRound(playerSelection, computerSelection);

    const para = document.createElement("p");
    const h3 = document.createElement("h3");

    para.textContent = `Player Choice: paper, Computer Choice: ${computerSelection} `;
    h3.textContent = roundResult;

    div.appendChild(para);
    div.appendChild(h3);

    checkForWinner(playerScore, computerScore);
  });

  scissors.addEventListener("click", () => {
    const playerSelection = "scissors";
    const computerSelection = getComputerChoice();

    roundResult = playRound(playerSelection, computerSelection);

    const para = document.createElement("p");
    const h3 = document.createElement("h3");

    para.textContent = `Player Choice: scissors, Computer Choice: ${computerSelection} `;
    h3.textContent = roundResult;

    div.appendChild(para);
    div.appendChild(h3);

    checkForWinner(playerScore, computerScore);
  });
}

game();
