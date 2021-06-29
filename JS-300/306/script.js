let firstNumber = 5;
let secondNumber = 2;

while (firstNumber / secondNumber > 1) {
    firstNumber = firstNumber / secondNumber;
    console.log(firstNumber);
}

// Bon c'est assez étrange: secondNumber / firstNumber il veut pas, meme avec secondNumber > firstNumber, il fait une infinite loop.