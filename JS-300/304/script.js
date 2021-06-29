let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
let week = document.getElementById('week');

days.forEach(element => {
    if (element == 'Samedi' || element == 'Dimanche') {
        week.innerHTML += `<p>${element.bold()}</p>`;
    } else {
        week.innerHTML += `<p>${element}</p>`;
    }
});