//filter for numbers that are divisible by 10 from array
const arr = [10, 20, 30, 45, 50, 60, 70, 80, 90, 100];
const filter = arr.filter((num)=> num % 10 === 0);

console.log("numbers divisible by 10:",filter);