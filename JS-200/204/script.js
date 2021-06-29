var userRate = parseInt(prompt("Saisissez une valeur entre 0 et 10."));

if (userRate <= 2) alert("Nul");
else if (userRate > 2 && userRate <= 4) alert("Moyen");
else if (userRate > 4 && userRate <= 6) alert("Assez Bien");
else if (userRate > 6 && userRate <= 8) alert("Bien");
else if (userRate > 8 && userRate < 10) alert("Très Bien");
else alert("Excellent");