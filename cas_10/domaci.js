
document.getElementById("dugme").addEventListener("click", izracunajCenu);
function izracunajCenu() {
  var cena = 990;

  var racun = cena * 1.25;
  alert(`Cena Iphone 14 PRO sa PDV-om je ${racun}`);
}