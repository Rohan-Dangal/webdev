//wap to find whether the number is divisible by 2 and 3.
const message = parseInt(prompt("Enter the number to be evaluated:"));
console.log("The number is:", message);

if (message % 2 === 0 && message % 3 === 0) {
    console.log("The number is divisible by both 2 and 3");
} else if (message % 2 === 0) {
    console.log("The number is divisible by 2 only");
} else if (message % 3 === 0) {
    console.log("The number is divisible by 3 only");
} else {
    console.log("The number is not divisible by 2 or 3");
}
