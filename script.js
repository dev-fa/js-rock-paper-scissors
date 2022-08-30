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

let computerChoice = getComputerChoice();

console.log("Computer's choice is " + computerChoice);

// Create a function that plays one round that takes the player and computers input as parameters.
// Round function should return a string that declares the winner. Example: "You lose! Paper beats rock."
// Players input should be case insensitive.
function playRound(playerChoice, computerChoice) {
    let gameStateMessage;
    playerChoice = playerChoice.toLowerCase();

    
    if (playerChoice === computerChoice) {
        return gameStateMessage = "It's a tie!";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        return gameStateMessage = "You lose! Paper beats rock.";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        return gameStateMessage = "You win! Rock beats scissors.";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        return gameStateMessage = "You win! Paper beats rock.";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        return gameStateMessage = "You lose! Scissors beats paper.";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        return gameStateMessage = "You win! Scissors beat paper.";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        return gameStateMessage = "You lose! Rock beats scissors.";
    } else {
        return gameStateMessage = "Invalid input. Please choose type either 'rock', 'paper', or 'scissors'."
    }
}

let playerChoice = prompt("Rock, paper, or scissors?");
console.log("Your choice is " + playerChoice);

console.log(playRound(playerChoice, computerChoice));



// Create a game function that calls the round function. It players up to five rounds and keeps score. Reports the winner or loser at the end.