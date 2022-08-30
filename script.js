// Create a function the returns either rock, paper, or scissors randomly and use it as the computers input.
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
function playRound(playerChoice, computerChoice) {
    let gameState;

    if (playerChoice === null) {
        console.log("Cancelled the round.");
    } else {
        if (playerChoice.toLowerCase() === computerChoice) {
            console.log(`It's a tie! Both players chose ${playerChoice}`);
            return gameState = "tie";
        } else if (playerChoice.toLowerCase() === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats rock.");
            return gameState = "lose";
        } else if (playerChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats scissors.");
            return gameState = "win";
        } else if (playerChoice.toLowerCase() === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats rock.");
            return gameState = "win";
        } else if (playerChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beats paper.");
            return gameState = "lose";
        } else if (playerChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beat paper.");
            return gameState = "win";
        } else if (playerChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats scissors.");
            return gameState = "lose";
        } else {
            console.log("Invalid input. Please chose either 'rock', 'paper', or 'scissors'. (No spaces)")
        }
    }
}

// Create a game function that calls the round function. It plays up to five rounds and keeps score. Prints the game state at the end.
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerChoice;
    let computerChoice;
    let gameState;

    for (i = 0; i < 5; i++) {
        playerChoice = prompt("Rock, paper, or scissors?");
        computerChoice = getComputerChoice();

        gameState = playRound(playerChoice, computerChoice);

        if (gameState === "win") {
            playerScore++;
            console.log("Player score: " + playerScore);
            console.log("Computer score: " + computerScore);
        } else if (gameState === "lose") {
            computerScore++;
            console.log("Player score: " + playerScore);
            console.log("Computer score: " + computerScore);
        } else if (gameState === "tie") {
            playerScore++;
            computerScore++;
            console.log("Player score: " + playerScore);
            console.log("Computer score: " + computerScore);
        }
    }


    if (playerScore > computerScore) {
        console.log("Player has won the game!")
    } else if (playerScore < computerScore) {
        console.log("Computer has won the game!")
    } else if (playerScore === 0 && computerScore === 0) {
        console.log("Did you even play?")
    } else if (playerScore === computerScore) {
        console.log("The game is tied!")
    }
}

game();