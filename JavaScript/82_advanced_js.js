async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("--> sleep() promise resolved after 2 seconds.");
      resolve(45);
    }, 2000);
  });
}

(async function main() {
//   let a = await sleep();
//   console.log(a);

//   let b = await sleep();
//   console.log(b);

// let (a, b, ...rest) = 7,9, 11, 13, 18, 21;

let obj = {
    a:2,
    b:6,
    c:9
}
let {a,b} = obj;
console.log(a, b);  //we did this because while building big projects sometimes there we face big objects and we need to extract one the particular ones so in such case we need to know about this.


let arr = [1,5,9];
console.log(sum(...arr)); //spread operator is used to spread the elements of an array into individual elements. It is useful when you want to pass an array as individual arguments to a function or when you want to combine arrays.
})();

console.log("Script continues to execute outside the main IIFE...");
