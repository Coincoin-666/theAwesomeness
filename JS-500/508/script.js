let btn = document.getElementById("plus");
let form = document.getElementById("form");

let cln = divForm.cloneNode(true);

btn.addEventListener("click", () => {
    let cln = divForm.cloneNode(true);
    form.append(cln);
});
