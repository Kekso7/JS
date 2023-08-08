var proizvodi = ["maticna ploca", "ram memorija", "graficka karta"];

for (var proizvod in proizvodi) {
	document.getElementById("vezba").innerHTML += proizvodi[proizvod];
}
