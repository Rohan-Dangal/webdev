//wap using prompt function to take input of age as a value from the user and alert to tell them if he can drive.

const age = parseFloat(prompt("Enter your age:"));

if (age >= 18) {
    alert("You are eligible for driving.");
} else {
    alert("You are not eligible for driving.");
}
