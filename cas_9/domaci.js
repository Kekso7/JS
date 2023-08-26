var obojeneKocke = document.getElementById("kocke");
for (var kocka = 0; kocka < 100; kocka++) {
  var obojenaKocka = document.createElement("div");
  obojenaKocka.classList.add("bojaKocke");
  obojeneKocke.appendChild(obojenaKocka);

  document
    .getElementsByClassName("bojaKocke")
    [kocka].addEventListener("click", function () {
      this.style.backgroundColor = "black";
    });
}