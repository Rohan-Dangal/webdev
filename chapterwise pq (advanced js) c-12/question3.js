//wap in js that resolves the promise after n seconds. the function takes n as the parameter.use an iife to execute the function with the different values of n.
function resolveafternseconds(n)
{
    return new Promise((resolve, reject)=>
    {
        setTimeout(()=>
        {
            resolve(`resolved after ${n} seconds`);
        }, n*1000);
    })
}
(async function executepromise()
{
    try
    {
        const message1 = await resolveafternseconds(2);
        console.log(message1);

        const message2 = await resolveafternseconds(4);
        console.log(message2);

        const message3 = await resolveafternseconds(6);
        console.log(message3);
    }
    catch (error)
    {
        console.error("error occurred:", error);
    }
})();