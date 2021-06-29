let new_passwd = document.getElementById("new_passwd");
let confirm_passwd = document.getElementById("confirm_passwd");
let confirm = document.getElementById("btn");

confirm.addEventListener("click", (e) => {
    e.preventDefault();
    if(new_passwd.value === confirm_passwd.value) {
        new_passwd.classList.toggle("green");
        confirm_passwd.classList.toggle("green");
    } else {
        new_passwd.classList.toggle("red");
        confirm_passwd.classList.toggle("red");
    }
})
