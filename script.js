const num = document.getElementById('num');
const btn = document.getElementById('btn');

const generateSecretNumber = () => {
    const guess = Number(num.value); // convert input to number
    console.log(`Your guess is ${guess}`);

    const randomNum = Math.floor(Math.random() * 5) + 1; // change 5 -> 100 for full game
    console.log(`Secret number is ${randomNum}`);

    if (guess < randomNum) {
        console.log("Your number is too low");
    } 
    else if (guess > randomNum) {
        console.log("Your number is too high");
    } 
    else {
        console.log("You guessed the right number!");
    }

    return randomNum;
};

btn.addEventListener('click', generateSecretNumber);
