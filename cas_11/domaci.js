document.getElementById('imagesHolder').addEventListener('click', function(slikaNaKojuSeKliknulo) {
    if (slikaNaKojuSeKliknulo.target.classList.contains('zoom')) {
      slikaNaKojuSeKliknulo.target.classList.remove('zoom'); // Uklanja klasu "zoom" za zoom out
    } else {
      slikaNaKojuSeKliknulo.target.classList.add('zoom'); // Dodaje klasu "zoom" za zoom in
    }
  });