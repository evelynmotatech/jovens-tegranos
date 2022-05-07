function CalcularLetras() {
    var inPalavra = document.getElementById("inPalavra");
    var outVogais = document.getElementById("outVogais");
    var outConsoantes = document.getElementById("outConsoantes");

    var palavra = (inPalavra.value);
    var vogais = 0;
    var consoantes = 0;
    
    for (var i = 0; i < palavra.length; i++) {
        if (palavra[i] == "a" || palavra[i] == "A" || palavra[i] == "e" || palavra[i] == "E" || palavra[i] == "i" || palavra[i]=="I" || palavra[i] == "o" || palavra[i] == "O" || palavra[i] == "u" || palavra[i] == "U") {
            vogais++;
        } else {
            consoantes++;
        }
        outVogais.innerHTML = `VOGAIS: ${vogais}`;
        outConsoantes.innerHTML = `CONSOANTES: ${consoantes}`;
    }
}

btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", CalcularLetras);