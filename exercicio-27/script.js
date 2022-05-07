function verificarPalindromo() {
    var inPalavra = document.getElementById("inPalavra");
    var outSaida = document.getElementById("outSaida");
    var palavra = (inPalavra.value);
    
    for (var i = 0; i < palavra.length; i++) {
        if (palavra[i] != palavra[palavra.length - 1 - i]) {
            outSaida.innerHTML = `${palavra}: NÃO É PALÍNDROMO`;
        }else{
            outSaida.innerHTML = `${palavra}: É PALÍNDROMO`;
        }
    }
}

btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", verificarPalindromo);