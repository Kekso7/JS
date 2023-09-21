
document.getElementById("dodajGrad").addEventListener("click", function () {
	var grad = prompt("Unesite grad");

	document.getElementById("prognoza").innerHTML += grad;
});
