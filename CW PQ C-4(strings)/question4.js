const str = "please give RS. 1000";
const amountString = str.replace(/.*RS\. (\d+).*/, "$1");

const amount = parseInt(amountString, 10);
console.log(amount);
