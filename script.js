// Global variables to track statistics
let playerName = '';
let totalGamesPlayed = 0;
let totalWins = 0;

function startGame(gameFunction) {
    if (!playerName) {
        playerName = prompt('Welcome to the Game Arcade! Please enter your name:');
        if (playerName) {
            alert(`Hello, ${playerName}! Get ready to play!`);
        } else {
            alert("Please enter a valid name.");
            return;
        }
    }
    gameFunction();
}

// Function to update and display the farewell message with statistics
function displayFarewellMessage() {
    const winPercentage = ((totalWins / totalGamesPlayed) * 100).toFixed(2);
    document.getElementById('totalGames').textContent = totalGamesPlayed;
    document.getElementById('totalWins').textContent = totalWins;
    document.getElementById('winPercentage').textContent = `${winPercentage}%`;
    document.getElementById('farewellMessage').style.display = 'block';
}

// Guessing Game as a Function Declaration
function guessingGame() {
    let playAgain = true;

    while (playAgain) {
        totalGamesPlayed++;
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        console.log(randomNumber); // For testing purposes, can be removed in the final version
        
        let guess;
        let attempts = 0;
        let correctGuess = false;

        while (!correctGuess) {
            guess = parseInt(prompt("Guess a number between 1 and 10:"));
            
            if (isNaN(guess)) {
                alert("Please enter a valid number.");
                continue;
            }

            attempts++;

            if (guess > randomNumber) {
                alert("Guess was too high, guess again.");
            } else if (guess < randomNumber) {
                alert("Guess was too low, guess again.");
            } else {
                alert(`You guessed it in ${attempts} guesses!`);
                correctGuess = true;
                totalWins++;
            }
        }

        let playAgainResponse = prompt(`${playerName}, Would you like to keep playing this game? y/n`).toLowerCase();
        if (playAgainResponse !== 'y') {
            playAgain = false;
            let pickAnotherGameResponse = prompt(`${playerName}, Would you like to pick another game to play? y/n`).toLowerCase();
            if (pickAnotherGameResponse !== 'y') {
                displayFarewellMessage();
            }
        }
    }
}

// Consult the Oracle as a Function Expression
const consultOracle = function() {
    const answers = [
        "Yes", 
        "No", 
        "Definitely", 
        "Ask again later", 
        "Not likely", 
        "Certainly", 
        "Impossible", 
        "Absolutely"
    ];

    let playAgain = true;

    while (playAgain) {
        totalGamesPlayed++;
        const questionInput = prompt("The Oracle awaits your question:");
        if (questionInput.trim() === '') {
            alert('Please enter a valid question!');
            continue;
        }

        const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
        alert(`The Oracle says: ${randomAnswer}`);

        // Assuming a win if the answer is "Yes" or "Definitely"
        if (randomAnswer === "Yes" || randomAnswer === "Definitely") {
            totalWins++;
        }

        let playAgainResponse = prompt(`${playerName}, Would you like to keep playing this game? y/n`).toLowerCase();
        if (playAgainResponse !== 'y') {
            playAgain = false;
            let pickAnotherGameResponse = prompt(`${playerName}, Would you like to pick another game to play? y/n`).toLowerCase();
            if (pickAnotherGameResponse !== 'y') {
                displayFarewellMessage();
            }
        }
    }
};

// Bear Ninja Hunter as an Arrow Function
const bnh = () => {
    let playAgain = true;

    while (playAgain) {
        totalGamesPlayed++;
        let playerChoice = prompt('Choose your character: Bear, Ninja, or Hunter');
        let computerChoice = 'Bear';

        let resultMessage = '';
        let winnerMessage = '';

        switch (playerChoice) {
            case 'Bear':
                resultMessage = `${playerName}, you chose Bear. The computer chose Bear.`;
                winnerMessage = "It's a Tie!";
                break;
            case 'Ninja':
                resultMessage = `${playerName}, you chose Ninja. The computer chose Bear.`;
                winnerMessage = `${playerName} Wins!`;
                totalWins++;
                break;
            case 'Hunter':
                resultMessage = `${playerName}, you chose Hunter. The computer chose Bear.`;
                winnerMessage = "Computer Wins!";
                break;
            default:
                resultMessage = "Invalid choice! Please choose Bear, Ninja, or Hunter.";
                winnerMessage = "No winner this time.";
        }

        alert(`${resultMessage}\n${winnerMessage}`);

        let playAgainResponse = prompt(`${playerName}, Would you like to keep playing this game? y/n`).toLowerCase();
        if (playAgainResponse !== 'y') {
            playAgain = false;
            let pickAnotherGameResponse = prompt(`${playerName}, Would you like to pick another game to play? y/n`).toLowerCase();
            if (pickAnotherGameResponse !== 'y') {
                displayFarewellMessage();
            }
        }
    }
};
