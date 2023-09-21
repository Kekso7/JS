var gradovi = [];

document.getElementById("dodajGrad").addEventListener("click", function () {
	var grad = prompt("Unesite ime grada");

	// document.getElementById("prognoza").innerHTML += grad;
	// plus doda grad beograd + subotica

	gradovi.push(grad);
});

document.getElementById("prikaziGrad").addEventListener("click", function () {
	for (var grad in gradovi) {
		document.getElementById("prognoza").innerHTML += gradovi[grad];
	}
});
