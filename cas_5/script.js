document.getElementById("contentHolder").innerHTML = "<p>Test 123</p>";

var prviParagraf = document.createElement("p");
prviParagraf.innerHTML = "Prvi JS paragraf";
prviParagraf.style.color = "red";

document.getElementById("contentHolder").appendChild(prviParagraf);

var linkDoGoogla = document.createElement("a");
linkDoGoogla.setAttribute("href", "https://google.com");
linkDoGoogla.innerHTML = "Klikni da odes na google";
linkDoGoogla.style.color = "black";

document.getElementById("contentHolder").appendChild(linkDoGoogla);

var slika = document.createElement("img");
slika.setAttribute(
	"src",
	"https://images.unsplash.com/photo-1691231862377-7e55d4e6a2c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
);

slika.setAttribute("alt", "nature");
// slika.setAttribute("class", "slika border");
slika.classList.add("slika");
slika.classList.add("border");

document.getElementById("contentHolder").appendChild(slika);
