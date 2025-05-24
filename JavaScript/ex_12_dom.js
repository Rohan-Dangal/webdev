function getrandomcolor()
{
    let r = Math.floor(Math.random()*119)
    let g = Math.floor(Math.random()*139)
    let b = Math.floor(Math.random()*155)
    return `rgb(${r},${g},${b})`
}


document.querySelectorAll(".box")
.forEach(e => {
    e.style.backgroundColor = getrandomcolor();
    e.style.color = getrandomcolor();
});
