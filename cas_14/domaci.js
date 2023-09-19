$(document).ready(function () {
	$("#container").css({});

	var sirina = "";
	var visina = "";
	var boja = "";

	$("#sirina").on("input", function () {
		sirina = $(this).val();
		updateElementStyle();
	});

	$("#visina").on("input", function () {
		visina = $(this).val();
		updateElementStyle();
	});

	$("#boja").on("input", function () {
		boja = $(this).val();
		updateElementStyle();
	});

	function updateElementStyle() {
		$("#container").css({
			width: sirina,
			height: visina,
			backgroundColor: boja,
		});
	}

	$("#borderRadius").on("input", function () {
		var borderRadius = $(this).val() + "px";
		$("#container").css({
			borderRadius: borderRadius,
		});
	});
});
