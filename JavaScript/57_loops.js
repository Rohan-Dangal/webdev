let i;
for(i=0;i<=1000;i++)
{
    console.log("i am the one");
}
const userprofile = {
    name: "rohan",
    lastname: "dangal",
    permanent_address: "damak,jhapa",
  };
  for (const key in userprofile) {
    const value = userprofile[key]; // Declare 'value' and assign the correct value
    console.log(key,value);             // Print the value
  }
  let i = 4
  while(i<6)
  {
    console.log(i)
    i++;
  }
