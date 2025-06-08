
const { error } = require('console');
const readline = require('readline'); 

const rl = readline.createInterface({
  input: process.stdin,  
  output: process.stdout 
});

rl.question('Enter the first number: ', (answerA) => {
  rl.question('Enter the second number: ', (answerB) => {
    let a = parseInt(answerA);
    let b = parseInt(answerB);

    if (isNaN(a) || isNaN(b)) {
      throw new error("please enter a valid number")
    } else {
      let sum = a + b;
      console.log("The total sum is:", sum);
    }
    rl.close(); 
  });
});