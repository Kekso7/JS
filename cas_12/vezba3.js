var gradovi = [];

document.getElementById("dodajGrad").addEventListener("click", function () {
	var grad = prompt("Unesite grad");
	grad = grad.split(" "); // Beograd -2 = ["Beograd", -2], " " (razmak)

	var privremeniGrad = {
		ime: grad[0],
		temperatura: grad[1],
	};

	gradovi.push(privremeniGrad);
	console.log(gradovi);
});

document
	.getElementById("prikaziGradove")
	.addEventListener("click", function () {
		document.getElementById("prognoza").innerHTML = "";

		for (var grad in gradovi) {
			document.getElementById("prognoza").innerHTML += gradovi[grad]['ime'] + gradovi[grad]['temperatura'];
		}
	});
