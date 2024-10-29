function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
    return choices[randomIndex];
}

// Function to get the human's choice
function getHumanChoice() {
    // Loop until we get a valid choice
    while (true) {
        let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();

        // Check if the choice is valid
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        } else {
            console.log("Invalid choice. Please try again.");
        }
    }
}

// Global score variables
let humanScore = 0;
let computerScore = 0;

function updateScore(winner) {
    if (winner === "human") {
        humanScore += 1;
    } else if (winner === "computer") {
        computerScore += 1;
    }
    console.log(`Current Score -> Human: ${humanScore}, Computer: ${computerScore}`);
}

function playRound(humanChoice, computerChoice) {
    // Make humanChoice case-insensitive
    humanChoice = humanChoice.toLowerCase();

    // Determine the outcome and log the result
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1; // Increment human score
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1; // Increment computer score
    }

    // Log the current score after each round
    console.log(`Current Score -> Human: ${humanScore}, Computer: ${computerScore}`);
}

// Example of calling playRound with choices
const humanSelection = getHumanChoice(); // Assume this function prompts user input
const computerSelection = getComputerChoice(); // Randomly generated computer choice
playRound(humanSelection, computerSelection);

function playGame() {
    // Initialize scores locally within playGame
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}`);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
            humanScore += 1; // Increment human score
        } else {
            console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
            computerScore += 1; // Increment computer score
        }

        console.log(`Score -> Human: ${humanScore}, Computer: ${computerScore}`);
    }

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        console.log(`\nRound ${i + 1}`);
        const humanSelection = getHumanChoice();       // Assume this prompts user input
        const computerSelection = getComputerChoice(); // Generates a random choice
        playRound(humanSelection, computerSelection);
    }

    // Declare the final winner
    console.log("\nGame Over!");
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Sorry, the computer won the game.");
    } else {
        console.log("It's a tie game!");
    }
}

// Start the game
playGame();