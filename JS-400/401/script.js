// let x = multiply();
let result;

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// console.log(x);

function multiply_user() {
    let a = document.getElementById('num1').value;
    let b = document.getElementById('num2').value;
    result = a * b;
    if (result == 666) {alert("SHEITAN!")}
    else if (result != 0) {alert(result)}
    else {alert("OMG!")};
}