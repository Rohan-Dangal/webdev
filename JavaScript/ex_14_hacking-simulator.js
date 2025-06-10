const output = document.getElementById("output");

function appendmessage(msg)
{
    output.innerHTML += msg + "<br>";
}
let firstmessage = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Initializing hacking...");
    }, 2000);
});

let secondmessage = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Reading your file...");
    }, 5000);
});
let thirdmessage = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Password file detected...");
    }, 7000);
})
let fourthmessage = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("sending all passwords and personal files to the server...");
    }, 9000);
})
async function hackingsimulator(){
    appendmessage(await firstmessage);
    appendmessage(await secondmessage);
    appendmessage(await thirdmessage);
    appendmessage(await fourthmessage);
}
hackingsimulator();

// question: create a hecking simulator which has green background and it shows these messages with random delay of 1 to 7 sec.  (initializing hacking..., reading your file...,password file detected..., sending all passwords and personal foles to the server...)  the three dots must blink so that that the terminal looks like a real terminal.