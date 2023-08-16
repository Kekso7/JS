var ime = prompt("Kako se zovete?");
ime = ime.toLowerCase();

if (ime == "toma") {
	// ako je toma ispisi dobrodosli
	console.log("dobrodosli");
} else if (ime == "petar") {
	// ako je petar ispisi dobrodosao petre
	console.log("Dobrodosao Petre");
} else {
	// ako je bilo sta drugo ispisi da ne postoji
	console.log("uneli ste nepostojece ime");
}
