var day = 3;

switch (day) {
    case 1:
        day = "Lundi"
        break;
    case 2:
        day = "Mardi"
        break;
    case 3:
        day = "Mercredi"
        break;
    case 4:
        day = "Jeudi"
        break;
    case 5:
        day = "Vendredi"
        break;
    case 6:
        day = "Samedi"
        break;
    case 7:
        day = "Dimanche"
        break;
    default:
        alert("La variable n'est pas correctement initialisée.")
        break;
}

console.log(day)