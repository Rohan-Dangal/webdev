//try to change the 4th character of the given string.
const str = "hello";
const newstr = str.slice(0, 3) + "a" + str.slice(4);
console.log(newstr);