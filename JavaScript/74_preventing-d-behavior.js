const form = document.getElementById("userForm");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.getElementById("message");

form.addEventListener("submit", (e) => {
    if (fname.value.trim() === "" || lname.value.trim() === "") {
        e.preventDefault();
        para.textContent = "You need to fill in both names.";
    }
});