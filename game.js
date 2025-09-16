

// Generate Secret Number
export const generateSecretNumber = (max = 100) => 
  Math.floor(Math.random() * max) + 1;

// Check Guess
export const checkGuess = (guess, secret) => {
  if (guess < secret) return "low";
  if (guess > secret) return "high";
  return "correct";
};

// Feedback Message
export const getFeedbackMessage = (result, attempts, secretNumber, maxAttempts, reason) => {
  if (result === "low") return `Too low! Attempts so far: ${attempts}`;
  if (result === "high") return `Too high! Attempts so far: ${attempts}`;
  if (result === "correct") return `🎉 Correct! You guessed it in ${attempts} attempts.`;
  if (reason === "lost") return `😢 Game over! You've used all ${maxAttempts} attempts. The secret number was ${secretNumber}.`;
};
