//---- Click me game ----//
let score = 0;
const scoreDisplay = document.getElementById("game-clicker-score");
const clickButton = document.getElementById("game-clicker-clicker");
clickButton.addEventListener("click", function() {
    score++;
    scoreDisplay.textContent = score;
})


//---- Rock Paper Scissors ----//
const choices = ["rock", "paper", "scissors"];
const playerChoiceDisplay = document.getElementById("game-rps-player-choice");
const computerChoiceDisplay = document.getElementById("game-rps-computer-choice");
const resultDisplay = document.getElementById("game-rps-result");
const buttons = document.querySelectorAll(".game-rps-button");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        const playerChoice = button.dataset.choice;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        playerChoiceDisplay.textContent = playerChoice;
        computerChoiceDisplay.textContent = computerChoice;
        resultDisplay.textContent = getResult(playerChoice, computerChoice);
        playerChoiceDisplay.style.display = playerChoiceDisplay.textContent;
    })
})

function getResult(player, computer) {
    if (player === computer) {
        return "It's a draw!";
    } else if (
        (player.toLowerCase() === "rock" && computer.toLowerCase() === "scissors") ||
        (player.toLowerCase() === "paper" && computer.toLowerCase() === "rock") ||
        (player.toLowerCase() === "scissors" && computer.toLowerCase() === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

//---- Number Guessing Game ----//

const numberInput = document.getElementById("game-number-guesser-input");
const numberButton = document.getElementById("game-number-guesser-button");
const numberResult = document.getElementById("game-number-guesser-result");
const previousGuesses = document.getElementById("game-number-guesser-previous-dis");
const winningImage = document.getElementById("game-number-guesser-img");

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let previousGuessesArray = [];
let currentNumber = getRandom(1, 100);
let guessesCount = 0;
console.log("Current number to guess:", currentNumber);

function checkNumber(number) {
    try {
        number = parseInt(number);
        if (isNaN(number)) {
            numberResult.textContent = "That's not a number!";
            numberInput.value = "";
            return false;
        }
    } catch (error) {
        numberResult.textContent = "That's not a number!";
        numberInput.value = "";
        return false;
    }

    if (number < 1 || number > 100) {
        numberResult.textContent = "Please enter a number between 1 and 100.";
        numberInput.value = "";
        return false;
    }
    numberResult.textContent = number.toLocaleString();
    return true;
}

numberButton.addEventListener("click", function() {
    if (!checkNumber(numberInput.value)) {
        return false;
    }
    let this_guess = parseInt(numberInput.value);
    if (this_guess === currentNumber) {
        guessesCount++;
        numberResult.textContent = "You win! It took you " + guessesCount + " guesses! To play again, enter a new guess.";
        fetch("../templates/catstare.html")
            .then(response => response.text())
            .then(data => winningImage.innerHTML = data)
            .catch(err => console.log(err));
        previousGuessesArray = [];
        guessesCount = 0;
        currentNumber = getRandom(1, 100);
        console.log("Current number to guess:", currentNumber);
    } else {
        if (previousGuessesArray.includes(this_guess)) {
            numberResult.textContent = "You already guessed that number!";
            return;
        }
        previousGuessesArray.push(this_guess);
        previousGuesses.textContent = previousGuessesArray.join(", "); // CITE: Autocomplete recommended .join(", ")
        if (this_guess < currentNumber) {
            numberResult.textContent = "Too low!";
        } else {
            numberResult.textContent = "Too high!";
        }
        guessesCount++;
    }
})

/*
    fetch('../templates/footer.archive')
        .then(response => response.text())
        .then(data => document.getElementById('footer').innerHTML = data)
        .catch(err => console.error('Failed to load footer:', err));
 */