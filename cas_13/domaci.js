$(document).ready(function () {
	$(".container").css({
		display: "flex",
	});
	var input = $('input[type="text"]');
	var konacanRezultat = $("<p>").addClass("rez").insertAfter(".container");

	$(".saberi, .pomnozi, .podeli, .oduzmi").click(function () {
		var broj1 = parseFloat(input.eq(0).val());
		var broj2 = parseFloat(input.eq(1).val());

		if (broj1 === 0 && broj2 === 0) {
			konacanRezultat.text("Upisali ste u oba polja 0");
		} else {
			var operator = $(this).text();
			var rezultat;

			if (operator === "Saberi") {
				rezultat = broj1 + broj2;
				konacanRezultat.text(rezultat);
			} else if (operator === "Pomnozi") {
				rezultat = broj1 * broj2;
				konacanRezultat.text(rezultat);
			} else if (operator === "Oduzmi") {
				rezultat = broj1 - broj2;
				konacanRezultat.text(rezultat);
			} else if (operator === "Podeli") {
				if (broj1 === 0 || broj2 === 0) {
					konacanRezultat.text("Ne mozete deliti sa 0");
				} else {
					rezultat = broj1 / broj2;
					konacanRezultat.text(rezultat);
				}
			}
		}

		konacanRezultat.show();
	});
});
