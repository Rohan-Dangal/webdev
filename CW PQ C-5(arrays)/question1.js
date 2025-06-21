//create an array of numbers and take input from the user to add numbers to the array
const arr1 = [12, 23, 34, 45, 56];

const userInput = prompt("Enter the number you want to add:");
const number = parseInt(userInput, 10);  
if (!isNaN(number)) {
  arr1.push(number);  
  console.log("Updated array:", arr1);
} else {
  console.log("Invalid input. Please enter a valid number.");
}
