// Write a JavaScript program that takes a day number (1–7) as input and prints the name of the day using a switch statement.

// 1 → Sunday

// 2 → Monday

// 3 → Tuesday

// 4 → Wednesday

// 5 → Thursday

// 6 → Friday

// 7 → Saturday

// If the number is not between 1 and 7, print "Invalid day number".

const dayNumber = parseInt(prompt("Enter the day number between 1 and 7"));
console.log("The day number is: " + dayNumber);

switch (dayNumber) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day number");
}
