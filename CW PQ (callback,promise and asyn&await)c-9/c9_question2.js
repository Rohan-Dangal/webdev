// q.n:1 wap to load a js file in a browser using promise.use async and await to display an alert when the load is completed.
function loadscript(src){
    return new Promise((resolve, reject)=>{
        let script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve("loaded successfully");
        }
        script.onerror = () => {
            reject("error in loading script");
        }
        document.body.appendChild(script);
    });
}
async function main()
{
    try{
        const message = await loadscript("c-9_callback-async-await.js");
        alert(message);
    }
    catch(err)
    {
        console.error(err);
    }
}
main();

