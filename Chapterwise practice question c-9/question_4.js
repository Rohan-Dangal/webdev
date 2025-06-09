
//wap using promise.all() inside async/await to await 3 promises. compare its results with the case where we await these promises one by one.
async function main() {
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise1 resolved");
        }, 1000);
    });

    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise2 resolved");
        }, 2000);
    });

    const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise3 resolved");
        }, 3000);
    });

    try {
        console.time("Promise.all");
        const results = await Promise.all([promise1, promise2, promise3]);
        console.timeEnd("Promise.all");
        console.log("Results from Promise.all():", results);
    } catch (err) {
        console.error("Error found:", err);
    }
}


async function mainSequential() {
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise1 resolved after 1 sec");
        }, 1000);
    });

    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise2 resolved after 2 sec");
        }, 2000);
    });

    const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise3 resolved after 1 sec");
        }, 1000);
    });

    try {
        console.time("Sequential");
        const result1 = await promise1;
        const result2 = await promise2;
        const result3 = await promise3;
        console.timeEnd("Sequential");
        console.log("Results one by one:", [result1, result2, result3]);
    } catch (err) {
        console.error("Error occurred:", err);
    }
}


main();
mainSequential();