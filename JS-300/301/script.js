let decade = document.getElementById("decade");

for (let year = 2020; year <= 2030; year++) {
    if (year % 100 != 0 && year % 4 == 0) {
        decade.innerHTML += `<p class="colorRed">${year}</p>`;
    } else {
        decade.innerHTML += `<p>${year}</p>`;
    }
}