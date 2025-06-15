const number = 48.88;
let command = parseFloat(prompt("enter your choice:"));
console.log("users choice is:", command);

while (command !== number) {
    console.log("SORRY, try again");
    command = parseFloat(prompt("enter your choice:"));
    console.log("users choice is:", command);
}

console.log("congratulations! you entered correct number");
