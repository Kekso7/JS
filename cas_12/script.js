var gradovi = [
	{
		ime: "Beograd",
		temperatura: -2,
		padavine: "sneg",
	},
	{
		ime: "Subotica",
		temperatura: -4,
		padavine: "bez padavina",
	},
];

for (var i = 0; i < gradovi.length; i++) {
	var temperatura = document.createElement("p");
	temperatura.innerHTML = gradovi[i]["ime"] + " " + gradovi[i]["temperatura"];

	document.getElementById("prognoza").appendChild(temperatura);
}
