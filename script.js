var playerScore = 0;
var computerScore = 0;
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scissorsBtn.addEventListener("click", playRound);

// Returns either rock, paper, or scissors randomly and use it as the computers input.
function getComputerChoice() {
    let computerChoice;

    switch (Math.floor(Math.random()*3) + 1) {
        case 1:
            return computerChoice = "rock";
            break;
        case 2:
            return computerChoice = "paper";
            break;
        case 3:
            return computerChoice = "scissors";
            break;
    }
}

// Create a function that plays one round that takes the player and computers input as parameters.
// Round function should return a string that declares the winner. Example: "You lose! Paper beats rock."
// Players input should be case insensitive.
function playRound(e) {

    let playerChoice = this.classList.value;
    let computerChoice = getComputerChoice();

    const gameState = document.querySelector(".game-state");
    if (gameState.hasChildNodes()) {
        while (gameState.firstChild) {
            gameState.removeChild(gameState.firstChild);
        }
    }
    const gameStateMsg = document.createElement("p");
    gameStateMsg.setAttribute("id", "game-state-msg");

    // Tie.
    if (playerChoice.toLowerCase() === computerChoice) {
        gameStateMsg.textContent = `It's a tie! Both players chose ${playerChoice}`
        playerScore++;
        computerScore++;
        displayScore(playerScore, computerScore);

    // Lose. Rock < Paper
    } else if (playerChoice.toLowerCase() === "rock" && computerChoice === "paper") {
        gameStateMsg.textContent = "You lose! Paper beats rock.";
        computerScore++;
        displayScore(playerScore, computerScore);

    // Win. Rock > Scissors
    } else if (playerChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
        gameStateMsg.textContent = "You win! Rock beats scissors.";
        playerScore++;
        displayScore(playerScore, computerScore);

    // Win. Paper > Rock
    } else if (playerChoice.toLowerCase() === "paper" && computerChoice === "rock") {
        gameStateMsg.textContent = "You win! Paper beats rock.";
        playerScore++;
        displayScore(playerScore, computerScore);

    // Lose. Paper < Scissors
    } else if (playerChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
        gameStateMsg.textContent = "You lose! Scissors beats paper.";
        computerScore++;
        displayScore(playerScore, computerScore);

    // Win. Scissors > Paper
    } else if (playerChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
        gameStateMsg.textContent = "You win! Scissors beat paper.";
        playerScore++;
        displayScore(playerScore, computerScore);

    // Lose. Scissors < Rock
    } else if (playerChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
        gameStateMsg.textContent = "You lose! Rock beats scissors.";
        computerScore++;
        displayScore(playerScore, computerScore);
    }

    gameState.appendChild(gameStateMsg);
}

// Display the running score
function displayScore(playerScore, computerScore) {
    const scoreBoard = document.querySelector(".score-board");
    if (scoreBoard.hasChildNodes()) {
        while (scoreBoard.firstChild) {
            scoreBoard.removeChild(scoreBoard.firstChild);
        }
    }
    const pScore = document.createElement("p");
    pScore.textContent = `Player Score: ${playerScore}`;
    scoreBoard.appendChild(pScore);
    const cScore = document.createElement("p");
    cScore.textContent = `Computer Score: ${computerScore}`;
    scoreBoard.appendChild(cScore);

    // Announce winner once a computer or player reaches 5 points
    if (playerScore === 5 && computerScore === 5) {
        displayWinner("tie");
    } else if (playerScore === 5) {
        displayWinner("player");
    } else if (computerScore === 5) {
        displayWinner("computer");
    }
}
displayScore(playerScore, computerScore);

function displayWinner(winner) {
    const winnerContainer = document.querySelector(".winner")
    const winnerMsg = document.createElement("p");

    if (winnerContainer.hasChildNodes()) {
        while (winnerContainer.firstChild) {
            winnerContainer.removeChild(winnerContainer.firstChild);
        }
    }

    if (winner === "tie") {
        winnerMsg.textContent = "The game is tied!"
    } else if (winner === "player") {
        winnerMsg.textContent = "The player wins!"
    } else if (winner === "computer") {
        winnerMsg.textContent = "The computer wins!"
    }

    winnerContainer.appendChild(winnerMsg);
}