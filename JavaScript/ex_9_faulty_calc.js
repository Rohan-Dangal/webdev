// create a faulty calculator using javascript
// 1. it takes two numbers as input from the user
// 2. it performs wrong operations like:
// +  -----  -
// * -----   +
// - -----   /
// / -----   **
// 10 % of the time
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const faulty= {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
};

rl.question("Enter first number: ", (num1) => {
    rl.question("Enter second number: ", (num2) => {
        rl.question("Enter operator (+, -, *, /): ", (operator) => {

            let a = parseFloat(num1);
            let b = parseFloat(num2);

            
            let rand = Math.random();
            if (rand < 0.1 && faulty[operator]) {
                console.log(`Faulty operation: ${operator} → ${faultyOps[operator]}`);
                operator = faultyOps[operator];
            }

            let result;

            if (operator === "+") result = a + b;
            else if (operator === "-") result = a - b;
            else if (operator === "*") result = a * b;
            else if (operator === "/") result = a / b;
            else if (operator === "**") result = a ** b;
            else result = "Invalid operator";

            console.log("Result:", result);
            rl.close();
        });
    });
});
