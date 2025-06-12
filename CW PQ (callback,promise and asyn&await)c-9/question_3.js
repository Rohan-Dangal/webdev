
// create a promise that rejects after 3 seconds. use an async/await to get it value.use try catch to handle the error.
const practice = new Promise((resolve, reject)=>{
    setTimeout(()=>
    {
        reject("promise is rejected")
    },3000)
});
async function main()
{
    try{
        const message = await practice;
        console.log(message)
    }
    catch(err)
    {
        console.error(err);
    }
}
main();