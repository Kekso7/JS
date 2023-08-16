var boja = prompt("unesite boju").toLowerCase();
var dugme = document.getElementById("dugme");

if (boja == "plava") {
	dugme.style.backgroundColor = "blue";
} else if (boja == "crvena") {
	dugme.style.backgroundColor = "red";
} else {
	dugme.style.backgroundColor = "green";
}

var bojaTeksta = prompt("unesite boju teksta").toLowerCase();

if (bojaTeksta == "plava") {
	dugme.style.color = "blue";
} else if (bojaTeksta == "crvena") {
	dugme.style.color = "red";
}

while (true) {
	var visinaDugmeta = prompt("Unesite visinu dugmeta");
	var sirinaDugmeta = prompt("Unesite širinu dugmeta");

	var visina = parseInt(visinaDugmeta);
	var sirina = parseInt(sirinaDugmeta);

	if (visina < 50 || sirina < 50) {
		alert("Ni visina ni sirina ne smeju biti manje od 50");
	} else {
		dugme.style.height = visina + "px";
		dugme.style.width = sirina + "px";
		break;
	}
}
