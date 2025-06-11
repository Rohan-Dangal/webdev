//wap to find avg of a number in an array using spread syntax.
function calculateavg(numbers)
{
    const sum = numbers.reduce((acc, num) => acc+num,0);
    return sum/numbers.length;
}
let arr = [22,33,44,55,66];
const result = calculateavg(...arr);
console.log("the avg of given numbers is:", result);