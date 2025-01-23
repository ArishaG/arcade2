let playerName = '';

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

// Guessing Game as a Function Declaration
function guessingGame() {
    let playAgain = true;

    while (playAgain) {
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
            }
        }

        let playAgainResponse = prompt(`${playerName}, Would you like to keep playing this game? y/n`).toLowerCase();
        if (playAgainResponse !== 'y') {
            playAgain = false;
            let pickAnotherGameResponse = prompt(`${playerName}, Would you like to pick another game to play? y/n`).toLowerCase();
            if (pickAnotherGameResponse !== 'y') {
                document.getElementById('farewellMessage').style.display = 'block';
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
        const questionInput = prompt("The Oracle awaits your question:");
        if (questionInput.trim() === '') {
            alert('Please enter a valid question!');
            continue;
        }

        const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
        alert(`The Oracle says: ${randomAnswer}`);

        let playAgainResponse = prompt(`${playerName}, Would you like to keep playing this game? y/n`).toLowerCase();
        if (playAgainResponse !== 'y') {
            playAgain = false;
            let pickAnotherGameResponse = prompt(`${playerName}, Would you like to pick another game to play? y/n`).toLowerCase();
            if (pickAnotherGameResponse !== 'y') {
                document.getElementById('farewellMessage').style.display = 'block';
            }
        }
    }
};

// Bear Ninja Hunter as an Arrow Function
const bnh = () => {
    let playAgain = true;

    while (playAgain) {
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
                document.getElementById('farewellMessage').style.display = 'block';
            }
        }
    }
};
