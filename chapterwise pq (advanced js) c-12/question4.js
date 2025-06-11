//make a simple interest calculator using javascript.
function calculateInterest() {
    let amount = parseFloat(prompt("Enter the principal amount in Rs:"));
    console.log("Principal amount is:", amount);

    let time = parseFloat(prompt("Enter the time (in years):"));
    console.log("Time:", time);

    let rate;

    if (amount < 10000) {
        rate = 18;
    } else if (amount >= 10000 && amount < 50000) {
        rate = 15;
    } else {
        rate = 12;
    }

    let interest = (amount * time * rate) / 100;
    console.log("The interest is Rs:", interest);
}