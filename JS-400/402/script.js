var txt = document.getElementById('currentTxt').innerHTML;

function boldness() {
    let boldtext = txt.bold();
    document.getElementById('currentTxt').innerHTML = boldtext;
}

function colorBtn() {
    document.getElementById('currentTxt').style.color = "red";
}

function big() {
    document.getElementById('currentTxt').style.fontSize = "5rem";
}

function normal() {
    txt = document.getElementById('currentTxt').innerHTML;
}