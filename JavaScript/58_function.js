// Write a JavaScript function named isEvenOrOdd that:

// Takes one number as a parameter.

// Returns "Even" if the number is even.

// Returns "Odd" if the number is odd.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

rl.question("Enter a number: ", function (userInput) {
    let number = parseInt(userInput);
    console.log("The number is " + isEvenOrOdd(number));
    rl.close(); // close the input stream
});

