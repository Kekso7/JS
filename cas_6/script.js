var proizvodi = ["audi", "mercedes", "bmw"];

console.log(proizvodi[0], proizvodi[1], proizvodi[2]);

// for, foreach, white - petlje

for (var jedanProizvod in proizvodi) {
	console.log(jedanProizvod, proizvodi[jedanProizvod]);
}

// Testiranje
var broj1 = 1;
console.log(proizvodi[broj1]);

document.getElementById("listaKomponenata").innerHTML = "pozdrav";
document.getElementById("listaKomponenata").innerHTML += "Marina";
