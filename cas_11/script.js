
    document.getElementById('imagesHolder').addEventListener('click', function(slikaNaKojuSeKliknulo){
        slikaNaKojuSeKliknulo.target.classList.toggle('zoom');
});



document.getElementById("paraHolder").addEventListener("click", function(e) {
    var target = e.target;
    target.style.color = "white";

});