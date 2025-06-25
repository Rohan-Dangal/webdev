//change the color of background of the page to yellow, red or any other color based on user input through prompt.
const color = prompt("Enter a color to change the background (e.g., 'yellow', 'red', 'blue'):");
if(color)
{
    document.body.style.backgroundColor = color;
}