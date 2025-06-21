//keep adding numbers to the array until 0 us added to the array.
const arr = [1, 23, 34, 45];
let message;

do {
  message = prompt("Enter a number (0 to stop):");
  const number = parseFloat(message);
  
  if (!isNaN(number) && number !== 0) {
    arr.push(number);
  }

} while (message !== "0");

console.log("Final array:", arr);