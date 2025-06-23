// in question1 use confirm to ask the user if he wants to show prompt again.
const age = parseInt(prompt("Enter your age:"));
if (age >= 18) {
    alert("You are eligible for driving.");
} else {
    alert("You are not eligible for driving.");
}

const message = confirm("Do you want to check again?");
if (message) {
    const ageAgain = parseInt(prompt("Enter your age:"));
    if (ageAgain >= 18) {
        alert("You are eligible for driving.");
    } else {
        alert("You are not eligible for driving.");
    }
}
