$(document).ready(function () {
	$("#izmene").click(function () {
		var sirina = $("#sirina").val();
		var visina = $("#visina").val();
		var boja = $("#boja").val();

		$("#container").css({
			width: sirina,
			height: visina,
			backgroundColor: boja,
		});
	});

	$("#boja").on("input", function () {
		var boja = $(this).val();
		$("#container").css({
			backgroundColor: boja,
		});
	});
});
