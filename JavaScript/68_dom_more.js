// selecting by id,class and more
let first = document.getElementsByClassName("box")
console.log(first)
first[2].style.backgroundColor = "yellow";

//query selector


document.querySelectorAll(".box")
.forEach(e => {
    e.style.backgroundColor = "yellow"
});

