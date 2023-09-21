$(document).ready(function () {
	$("#hideText").click(function () {
		var paragraf = $(this).text();
		if (paragraf == "Hide Text") {
			$(this).text("Show Text");
		} else {
			$(this).text("Hide Text");
		}

		$(".hideName").toggle();
	});
});
