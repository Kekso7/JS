var pitanja = ["koliko je 2+2", "glavni grad Srbije", "najveca reka na svetu"];
var tacanOdgovor = ["4", "Beograd", "Nil"];

document.getElementById("askMe").addEventListener("click", function () {
	var nasumicanBroj = Math.floor(Math.random() * 3); // 0 1 2
	var odgovor = prompt(pitanja[nasumicanBroj]); // pitanja 0 1 2 da li je nasumican broj

	if (odgovor == tacanOdgovor[nasumicanBroj]) {
	console.log("tacan odgovor");
}
});

