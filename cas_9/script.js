document.getElementById("buyButton").addEventListener('click', function(){
    var cena = document.getElementById("cenaProizvoda").getAttribute("data-cena");
    console.log("Cena ovog proizvoda je "+cena+" eura")
    console.log(`Cena ovog proizvoda je ${cena} eura`)
});

for(var i = 0; i < 100; i++) {
    document.getElementById("poruke").append(i)
}

document.getElementsByClassName("dugme")[0].addEventListener("click", function() {
    console.log("test");
    this.style.color = "red"
});
document.getElementsByClassName("dugme")[1].addEventListener("click", function() {
    console.log("test");
    this.style.color = "red"
});

var brojButtona = document.getElementsByClassName('dugme').length;
console.log(brojButtona); 

for(var brojElemenata = 0; brojElemenata < brojButtona; brojElemenata++) {
    document.getElementsByClassName("dugme")[brojElemenata].addEventListener('click', function(){
       this.style.color = "blue"
    });
}

for (var parniBroj = 0; parniBroj < 100; parniBroj++) {
    if (parniBroj % 2 == 0) {
      console.log(parniBroj);
    }
  }