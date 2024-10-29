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

console.log(getHumanChoice());