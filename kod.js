
var cena = 0;
var licz = 0;
var licz2 = 0;
var licz3 = 0;
function zamow1() {
    licz = licz+1;
    cena = cena + 30;
    document.getElementById("dozaplacenia").innerHTML= cena + "zł";
    document.getElementById("ussushi").innerHTML="Usuń z koszyka maki sushi";
}

function zamow2() {
    licz2 = licz2 + 1;
    cena = cena + 25;
    document.getElementById("dozaplacenia").innerHTML= cena + "zł";
    document.getElementById("usonigiri").innerHTML="Usuń z koszyka onigiri";
}

function zamow3() {
    licz3 = licz3 + 1;
    cena = cena + 20;
    document.getElementById("dozaplacenia").innerHTML= cena + "zł";
    document.getElementById("usgyoza").innerHTML="Usuń z koszyka pierożki gyoza";
}

function usunsushi () {
    cena= cena - 30;
    document.getElementById("dozaplacenia").innerHTML= cena + "zł";
   licz = licz - 1;
   if (licz==0){
        document.getElementById("ussushi").innerHTML= "";
    }
}

function usunonigiri () {
    cena = cena - 25;
    document.getElementById("dozaplacenia").innerHTML= cena + "zł";
    licz2 = licz2 - 1;
    if (licz2==0){
         document.getElementById("usonigiri").innerHTML= "";
     }
}

function usungyoza() {
    cena = cena - 20;
    document.getElementById("dozaplacenia").innerHTML= cena + "zł";
    licz3 = licz3 - 1;
    if (licz3==0){
         document.getElementById("usgyoza").innerHTML= "";
     }
}