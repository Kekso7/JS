document.getElementById("button").addEventListener('click', kadaSeKlikneNaDugme);
document.getElementById("dugme2").addEventListener('click', kadaSeKlikneNaDugme);

function kadaSeKlikneNaDugme() {
 this.style.border = "3px double red"
}

function pozdraviKorisnika() {
    var ime = prompt("unesite vase ime");
    alert(ime);
}
function sracunaj(broj1, broj2) {
    console.log(broj1+broj2);
}

sracunaj(10, 20);
sracunaj(55, 33);

function pomnoziBrojeve(broj1, broj2) {
    console.log(broj1*broj2)
}
pomnoziBrojeve(55,20)

function proveraPunoletstva(godine) {
    if(godine < 18) {
        console.log("niste punoletni");
    }
    else {
        console.log("punoletni ste");
    }
}

proveraPunoletstva(30);
proveraPunoletstva(15);

function podeliBrojeve(broj, deljenje) {
    if(deljenje == 0) {
        console.log("Ne mozes podeliti sa 0");
    }
    else {
        console.log(broj / deljenje);
    }
}

podeliBrojeve(55,0);
podeliBrojeve(22,3);

var nekiBroj = prompt("Unesite neki broj");
var nekiDelilac = prompt("unesite delilac");

podeliBrojeve(nekiBroj, nekiDelilac);