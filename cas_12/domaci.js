var gradovi = [];
var dodajGrad = document.querySelector("#dodajGrad");
var topliGradovi = document.querySelector("#topliGradovi");
var hladniGradovi = document.querySelector("#hladniGradovi");
var ispisiGradove = document.createElement("div");
ispisiGradove.id = "ispisiGradove";
document.body.appendChild(ispisiGradove);

dodajGrad.addEventListener("click", function () {
	var unos = prompt("Unesite grad i temperaturu:");
	if (unos) {
		var grad = unos.split(" ")[0];
		var temperatura = parseInt(unos.split(" ")[1]);
		gradovi.push({ grad: grad, temperatura: temperatura });
	}
});

topliGradovi.addEventListener("click", function () {
	var ispisi = "";
	for (var i = 0; i < gradovi.length; i++) {
		if (gradovi[i].temperatura >= 12) {
			ispisi +=
				"<p class='topliGrad'>" +
				gradovi[i].grad +
				" " +
				gradovi[i].temperatura +
				"°C</p>";
		}
	}
	document.getElementById("ispisiGradove").innerHTML = ispisi;
});

hladniGradovi.addEventListener("click", function () {
	var ispisi = "";
	for (var i = 0; i < gradovi.length; i++) {
		if (gradovi[i].temperatura <= 11) {
			ispisi+=
				"<p class='hladniGrad'>" +
				gradovi[i].grad +
				" " +
				gradovi[i].temperatura +
				"°C</p>";
		}
	}
	document.getElementById("ispisiGradove").innerHTML = ispisi;
});
