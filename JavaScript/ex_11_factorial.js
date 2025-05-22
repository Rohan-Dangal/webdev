//program to generate factorial of a number
// const readline = require(`readline`);
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// rl.question("enter the number of which you want the factorial of:",function(input)
// {
//     const number = Number(input);
// })
// function factorial(n)
// {
//     if(n<0)
//     {
//         console.log("invalid choice")
//         return 0;
//     }
//     else if(n==0 || n==1)
//     {
//     }
//     else
//     {
//         return n * factorial(n-1);
//     }
//     const result = factorial(number);
//     console.log("factorial is:"+ result)
//     rl.close();
// }
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial(n) {
    if (n < 0) {
        console.log("Invalid input. Factorial is not defined for negative numbers.");
        return 0;
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

rl.question("Enter the number you want the factorial of: ", function(input) {
    const number = Number(input);

    if (isNaN(number)) {
        console.log("Please enter a valid integer.");
    } else {
        const result = factorial(number);
        console.log("Factorial is: " + result);
    }

    rl.close();
});

