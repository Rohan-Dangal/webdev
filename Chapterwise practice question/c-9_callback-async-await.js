// callback,async and await
// q.n:1 wap to load a js file in a browser using promise.use .then() to display an alert when the load is complete.
function loadscript(src){
    return new Promise((resolve, reject)=>{
        let script = document.createElement("script");
        script.src = src;
        script.onload = () =>
        {
            resolve("file loaded successfullty");
        };
        script.onerror = () => {
            reject("file did not load");
        }
       document.body.appendChild(script); 
    });
}
loadscript("c9_question2.js")
.then((message)=>{
    alert(message);
})
.catch((err)=>{
    console.error(err);
});