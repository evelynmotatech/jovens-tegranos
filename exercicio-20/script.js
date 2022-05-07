function calcularSoma() {
    var inNumInicial = document.getElementById("inNumInicial");
    var inNumFinal = document.getElementById("inNumFinal");
    var outResultado = document.getElementById("outResultado");

    var numInicial = Number(inNumInicial.value);
    var numFinal = Number(inNumFinal.value);

    var soma = 0;
    for (var i = numInicial; i <= numFinal; i++) {
        soma += i;
    }

    outResultado.innerHTML = `RESULTADO DA SOMA: ${soma}`;
}

btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularSoma);