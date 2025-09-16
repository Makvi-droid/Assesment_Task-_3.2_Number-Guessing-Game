import { generateSecretNumber, checkGuess, getFeedbackMessage } from './game.js';
import { 
  getInputValue, clearInput, showMessage, 
  disableGuessButton, enableGuessButton, 
  showReplayButton, hideReplayButton, 
  onGuessClick, onReplayClick
} from './ui.js';

// Game state
let secretNumber;
let attempts = 0;
const maxAttempts = 10;

// Start Game
const startGame = () => {
  secretNumber = generateSecretNumber(100);
  attempts = 0;
  showMessage("Game started! Guess a number between 1 and 100.");
  enableGuessButton();
  hideReplayButton();
  clearInput();
  console.log("Secret (for testing):", secretNumber); // remove later
};

// End Game
const endGame = (reason) => {
  disableGuessButton();
  showReplayButton();
  showMessage(getFeedbackMessage(null, attempts, secretNumber, maxAttempts, reason));
};

// Handle Guess
const handleGuess = () => {
  const guess = getInputValue();
  if (!guess || guess < 1 || guess > 100) {
    showMessage("Please enter a valid number between 1 and 100.");
    return;
  }

  attempts++;
  const result = checkGuess(guess, secretNumber);
  showMessage(getFeedbackMessage(result, attempts, secretNumber, maxAttempts));

  if (result === "correct") {
    endGame("win");
  } else if (attempts >= maxAttempts) {
    endGame("lost");
  }
};

// Event listeners
onGuessClick(handleGuess);
onReplayClick(startGame);

// Start first game
startGame();
