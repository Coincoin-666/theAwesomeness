let new_passwd = document.getElementById("new_passwd");
let confirm_passwd = document.getElementById("confirm_passwd");
let confirm = document.getElementById("btn");

confirm.addEventListener("click", () => {
    if(new_passwd.value === confirm_passwd.value) {
        new_passwd.style.border = "solid 1.5px lightGreen";
        confirm_passwd.style.border = "solid 1.5px lightGreen";
    } else {
        new_passwd.style.border = "solid 1.5px red";
        confirm_passwd.style.border = "solid 1.5px red";
    }
})

// V2 !important : e.preventDefault()

let new_passwd_2 = document.getElementById("new_passwd_2");
let confirm_passwd_2 = document.getElementById("confirm_passwd_2");
let confirm_2 = document.getElementById("btn_2");

confirm_2.addEventListener("click", (e) => {
    e.preventDefault();
    if(new_passwd_2.value === confirm_passwd_2.value) {
        new_passwd_2.style.border = "solid 1.5px lightGreen";
        confirm_passwd_2.style.border = "solid 1.5px lightGreen";
    } else {
        new_passwd_2.style.border = "solid 1.5px red";
        confirm_passwd_2.style.border = "solid 1.5px red";
    }
})