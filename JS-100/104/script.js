var userName = prompt("votre nom?");
var userAge = prompt("votre age?");
var userCountry = prompt("votre nationalité?");

document.querySelector('button').onclick = function() {
    alert("nom: " + userName + "\nage: " + userAge + "\npays: " + userCountry)
}

