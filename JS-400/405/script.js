function getStringLength(string) {
    let stringLength;
    if (string.length === 1) {
        stringLength = "La chaîne ne contient qu'un seul caractère.";
    } else {
        stringLength = `La chaîne contient ${string.length} caractères.`;
    }
    return stringLength
}

(getStringLength) => {
    if (string.length === 1) {
        console.log("La chaîne ne contient qu'un seul caractère.");
    } else {
        console.log(`La chaîne contient ${string.length} caractères.`);
    };
};