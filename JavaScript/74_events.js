// let button = document.getElementById("btn");
// button.addEventListener("click", () =>{
    
//     document.getElementsByClassName("box")[0].innerHTML = "<b>Hey, I am being changed</b>";
// });


const btn = document.getElementById("btn")

function random(number)
{
    return Math.floor(Math.random() * (number+1));
}
btn.addEventListener("click", () =>{
    const rndm = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndm;
});

