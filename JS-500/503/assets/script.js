// let fname = document.getElementById("fname");
// let email = document.getElementById("email").value;
// let age = document.getElementById("age").value;

// var fnamePattern = RegExp(/^[a-z]+$/gmi);
// var mailPattern = /^[a-z0-9\.\-\_]+@{1}[a-z0-9]+\.{1}[a-z]{2,4}$/gmi;
// var agePattern = /^[0-9]$/gm;

// fname.addEventListener("focusout", (e) => {
//     e.preventDefault();
//     let fnameOK = (fname).value.match(fnamePattern);
//     if (fnameOK == false) {
//         fname.classList.toggle("red");
//     }
// });

// email.addEventListener("focusout", () => {
//     if (email.match(mailPattern)) {
//         email.classList.toggle("green");
//     } else {
//         email.classList.toggle("red");
//     }
// });

// age.addEventListener("focusout", () => {
//     if (age.match(agePattern)) {
//         age.classList.toggle("green");
//     } else {
//         age.classList.toggle("red");
//     }
// });

// btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     alert("Vous êtes enregistré!")
// })