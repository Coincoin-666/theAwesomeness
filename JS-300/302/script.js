let numList = document.getElementById("chiffres");

for (let chiffres = 0; chiffres < 101; chiffres++) {
    if (chiffres % 15 == 0) {
        numList.innerHTML += `<p>...</p>`;
    } else {
        numList.innerHTML += `<p>${chiffres}</p>`;
    }
}