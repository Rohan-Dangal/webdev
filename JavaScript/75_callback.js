// Example of callback to add two numbers and display the result
function add(a,b,callback)
{
    console.log(`the sum of ${a} and ${b} is ${a+b}`);
    callback(a+b);
}
function disp(){
    console.log("this must be called after the addition is done");
}
add(5,6,disp);


function greet(name,callback)
{
    console.log(`hello $`);
    callback();
}
function saybye()
{
    console.log("goodbye");
}
greet("rohan",saybye);

//here the saybye function is called after the greet function is executed.



//callback function for asynchronous execution

console.log("start");
setTimeout(() =>{
    console.log("this will execute after 2 sec");

}, 2000);
console.log("end");

// here the settimeout will be executed after 2 seconds as it is an asynchronous function.


