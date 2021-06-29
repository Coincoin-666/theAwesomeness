let paragraph = document.getElementById("paragraph");
let pinkBtn = document.getElementById("pink-btn");
let blueBtn = document.getElementById("blue-btn");
let purpleBtn = document.getElementById("purple-btn");
let boldBtn = document.getElementById("bold-btn");
let italicBtn = document.getElementById("italic-btn");

pinkBtn.addEventListener("click", () => {
    paragraph.classList.toggle("pink");
    
});

blueBtn.addEventListener("click", () => {
    paragraph.classList.toggle("blue");
    
});

purpleBtn.addEventListener("click", () => {
    paragraph.classList.toggle("purple");
    
});

boldBtn.addEventListener("click", () => {
    paragraph.classList.toggle("bold");
    
});

italicBtn.addEventListener("click", () => {
    paragraph.classList.toggle("italic");
    
});