// Example of promise to check if a number is even or odd

const promise = new Promise((resolve, reject) => {
  let number = 10;
  if (number % 2 === 0) {
    resolve("The number is even");
  } else {
    reject("The number is odd");
  }
});

promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });



// Example of promise to compare two strings

const stringPromise = new Promise((resolve, reject) => {
  let str1 = "rohan dangal";
  let str2 = "rohan dangal";

  if (str1 === str2) {
    resolve();
  } else {
    reject();
  }
});

stringPromise
  .then(() => {
    console.log("Yes! You are Rohan Dangal");
  })
  .catch(() => {
    console.log("Sorry! You are not Rohan Dangal");
  });
  