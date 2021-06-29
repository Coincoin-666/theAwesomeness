let fname = document.getElementById("fname");
let lname = document.getElementById("lname");

fname.addEventListener("focus", () => {
    fname.style.border = "solid 2px black";
});

fname.addEventListener("blur", () => {
    fname.style.border = "none";
});

lname.addEventListener("focus", () => {
    lname.style.border = "solid 2px black";
});

lname.addEventListener("blur", () => {
    lname.style.border = "none";
});