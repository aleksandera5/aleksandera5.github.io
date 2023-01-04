var cena = 0;

function zamow14() {
    cena = cena + 14;
    document.getElementById("dozaplacenia").innerHTML=" " + cena + "zł";
}

function zamow22() {
    cena = cena + 22;
    document.getElementById("dozaplacenia").innerHTML=" " + cena + "zł";
}

function zamow12() {
    cena = cena + 12;
    document.getElementById("dozaplacenia").innerHTML=" " + cena + "zł";
}

function zamow19() {
    cena = cena + 19;
    document.getElementById("dozaplacenia").innerHTML=" " + cena + "zł";
}

function usun() {
    cena = 0;
    document.getElementById("dozaplacenia").innerHTML= " ";
}
