document.addEventListener("DOMContentLoaded", () => {
    // Function to get a random choice for the computer
    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        return choices[Math.floor(Math.random() * 3)];
    }

    // Global score variables
    let humanScore = 0;
    let computerScore = 0;

    // Function to update the results in the DOM
    function displayResult(message) {
        const resultDiv = document.getElementById("results");
        resultDiv.innerHTML = message;
    }

    // Function to check for a game winner
    function checkForWinner() {
        if (humanScore === 5) {
            displayResult("Congratulations! You won the game! Final Score -> Human: " + humanScore + ", Computer: " + computerScore);
            disableButtons();
        } else if (computerScore === 5) {
            displayResult("Game Over! The computer won the game. Final Score -> Human: " + humanScore + ", Computer: " + computerScore);
            disableButtons();
        }
    }

    // Function to play a single round
    function playRound(humanChoice) {
        const computerChoice = getComputerChoice();
        let roundResult;

        if (humanChoice === computerChoice) {
            roundResult = "It's a tie!";
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            roundResult = `You win this round! ${humanChoice} beats ${computerChoice}`;
            humanScore += 1;
        } else {
            roundResult = `You lose this round! ${computerChoice} beats ${humanChoice}`;
            computerScore += 1;
        }

        // Display round result and running score
        displayResult(`${roundResult}<br>Current Score -> Human: ${humanScore}, Computer: ${computerScore}`);

        // Check if we have a game winner
        checkForWinner();
    }

    // Disable buttons after the game ends
    function disableButtons() {
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    }

    // Add event listeners to buttons
    document.getElementById("rock").addEventListener("click", () => playRound("rock"));
    document.getElementById("paper").addEventListener("click", () => playRound("paper"));
    document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
});
