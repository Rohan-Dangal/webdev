// note: to use await it needs to be in the async function

// function getdata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(555);
//         }, 10000); // Waits 10 seconds
//     });
// }
async function getdata() {
    // Set up headers
    let myHeaders = {
        "Content-Type": "application/json"
    };

    // Make a POST request using fetch
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({ username: "example" })
    });

    // Wait for the response to be converted to JSON
    let data = await response.json();
    return data;
}

async function main() {
    console.log("first task");
    console.log("load data");

    let data = await getdata(); // Waits until data is fetched
    console.log("data received", data);

    console.log("last task");
}

main();


// imp note: settle means promise has resolved or reject where resolve means promise has settled sucessfullu and reject means promise has settled unsuccessfully.


//here if we had used only async the code would have run without waiting for the data to be received (i.e it would be running in the background) but here we used await to wait for the data to be received before moving to the next line of the code.