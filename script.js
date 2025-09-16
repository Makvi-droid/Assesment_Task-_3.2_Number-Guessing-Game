//Generate Secret Number 
const generateSecretNumber = () => Math.floor(Math.random() * 5) + 1;

//Variables
let secretNumber;
let attempts = 0;
let maxAttempts = 10;

// DOM elements
const num = document.getElementById('num');
const btn = document.getElementById('btn');
const message = document.getElementById('message'); 
const replayBtn = document.getElementById('replay')

//Start Game
const startGame = () => {
  secretNumber = generateSecretNumber();
  attempts = 0;
  message.textContent = "Game started! Guess a number between 1 and 100.";
  btn.disabled = false;
  replayBtn.style.display = "none";
  num.value = ""; // clear input
  console.log("Secret (for testing):", secretNumber); // remove in real game
};

//Get User Guess
const getUserGuess = () => Number(num.value);

//Check Guess
const checkGuess = (guess, secret) => {
  if (guess < secret) return "low";
  if (guess > secret) return "high";
  return "correct";
};

//Give Feedback
const giveFeedback = (result) => {
  if (result === "low") {
    message.textContent = `Too low! Attempts so far: ${attempts}`;
  } else if (result === "high") {
    message.textContent = `Too high! Attempts so far: ${attempts}`;
  } else {
    message.textContent = `Correct! You guessed it in ${attempts} attempts.`;
  }
};

//End Game
const endGame = (reason) => {
  btn.disabled = true;
  replayBtn.style.display = "inline-block";
  if (reason === "lost") {
    message.textContent = `😢 Game over! You've used all ${maxAttempts} attempts. The secret number was ${secretNumber}.`;
  }
};

//Button Click Logic
btn.addEventListener('click', () => {
  const guess = getUserGuess();
  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  attempts++;
  const result = checkGuess(guess, secretNumber);
  giveFeedback(result);

  if (result === "correct") {
    endGame("win");
  } else if (attempts >= maxAttempts) {
    endGame("lost");
  }
});

//Replay Button 
replayBtn.addEventListener('click', startGame);

// Start the game
startGame();
