//kod se izvrsava kada se ucita html
// document - eleent, docu, wind
// ready - dogadjaj, ready cancelIdleCallback, mouseIn mouseOut, hover

// copy paste
// $(document).ready(function() {});

// isto kao
// document.getElementById("clickButton").addEventListener('click', function(){})
$("#clickButton").click(function () {
	console.log("testtest");
});

$(".anchorLink").click(function () {
	//this.style.backgroundColor = "red"
	//this.style.color = "white"
	$(this).animate(
		{
			backgroundColor: "red",
			color: "white",
		},
		2000
	);
});

$("#hideParagraf").click(function () {
	$("#paragraf").slideToggle();
});
