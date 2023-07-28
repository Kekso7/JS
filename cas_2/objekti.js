var korpa = {
	SSD: 500,
	"maticna ploca": 450,
};

console.log(korpa["SSD"]);

// primer 1
korpa = {
	...korpa,
	RAM: 200,
	GPU: 600,
	HDD: 300,
};
console.log(korpa);

// primer 2
korpa["ram memorija"] = 200;
korpa["GPU"] = 600;
korpa["HDD"] = 300;

console.log(korpa);
