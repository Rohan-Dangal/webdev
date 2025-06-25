// wap to change the url to google.com (redirection) if user enters a number greater than 4
// Program to redirect to google.com if user enters a number greater than 4
const userInput = prompt("Enter a number greater than 4 to redirect to Google:");

if (parseInt(userInput) > 4) {
    window.location.href = "https://www.google.com";
} else {
    console.log("You entered a number less than or equal to 4.");
}