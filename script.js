// === 1. Generate Secret Number ===
const generateSecretNumber = () => Math.floor(Math.random() * 100) + 1;

// === 2. Variables ===
let secretNumber;
let attempts = 0;

// DOM elements
const num = document.getElementById('num');
const btn = document.getElementById('btn');
const message = document.getElementById('message'); // assume you have a div/span for feedback

// === 3. Start Game ===
const startGame = () => {
  secretNumber = generateSecretNumber();
  attempts = 0;
  message.textContent = "Game started! Guess a number between 1 and 100.";
  btn.disabled = false;
  num.value = ""; // clear input
  console.log("Secret (for testing):", secretNumber); // remove in real game
};

// === 4. Get User Guess ===
const getUserGuess = () => Number(num.value);

// === 5. Check Guess ===
const checkGuess = (guess, secret) => {
  if (guess < secret) return "low";
  if (guess > secret) return "high";
  return "correct";
};

// === 6. Give Feedback ===
const giveFeedback = (result) => {
  if (result === "low") {
    message.textContent = `Too low! Attempts so far: ${attempts}`;
  } else if (result === "high") {
    message.textContent = `Too high! Attempts so far: ${attempts}`;
  } else {
    message.textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
  }
};

// === 7. End Game ===
const endGame = () => {
  btn.disabled = true;
  console.log("Game Over. Secret was:", secretNumber);
};

// === 8. Button Click Logic ===
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
    endGame();
  }
});

// Start the game initially
startGame();
