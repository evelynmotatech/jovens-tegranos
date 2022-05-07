function converterExtenso() {
    var inNum = document.getElementById("inNum");
    var outNumExtenso = document.getElementById("outNumExtenso");
    var numero = (inNum.value);

    var unidades = ["Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove"];
    var especiais = ["Dez", "Onze", "Doze", "Treze", "Catorze", "Quinze", "Dezesseis", "Dezessete", "Dezoito", "Dezenove"];
    var dezenas = ["Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"];

    if (numero.length === 1) {
        outNumExtenso.innerHTML = `${numero}: ${(unidades[parseInt(numero[0])])}`;
    }

    else if (numero.length === 2) {
        if ((numero[0] == '1') && (numero[1] == '0' || numero[1] == '1' || numero[1] == '2' || numero[1] == '3' || numero[1] == '4' || numero[1] == '5' || numero[1] == '6' || numero[1] == '7' || numero[1] == '8' || numero[1] == '9')) {
            outNumExtenso.innerHTML = `${numero}: ${(especiais[parseInt(numero[1])])}`;
        }

        else if ((numero[0] == '2' || numero[0] == '3' || numero[0] == '4' || numero[0] == '5' || numero[0] == '6' || numero[0] == '7' || numero[0] == '8' || numero[0] == '9') && numero[1] == '0') {
            outNumExtenso.innerHTML = `${numero}: ${(dezenas[parseInt(numero[0] - 2)])}`;
        }

        else {
            outNumExtenso.innerHTML = `${numero}: ${(dezenas[parseInt(numero[0] - 2)] + " e " + unidades[parseInt(numero[1])])}`;
        }
    }
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", converterExtenso);