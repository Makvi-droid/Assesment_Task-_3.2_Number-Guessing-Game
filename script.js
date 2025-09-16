

const number = 18;

const generateSecretNumber = () => {

    console.log(`Your number is  ${number}`)

   const randomNum = Math.floor(Math.random() * 100) + 1
   console.log(randomNum)

    if(number < randomNum){
    console.log("your number is too low")
    }
    else if(number > randomNum){
        console.log("your number is too high")
    }
    else if(number == randomNum){
        console.log("you guessed the ryt number!")
    }

    return randomNum;
}

generateSecretNumber()





