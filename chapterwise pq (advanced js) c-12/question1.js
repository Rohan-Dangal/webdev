// wap in js to print the following after 2 second delay,   hello and world

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hello");
    }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("world");
    }, 2000);
});

async function main() {
    const message1 = await promise1;
    console.log(message1);  

    const message2 = await promise2;
    console.log(message2); 
} 

main();
