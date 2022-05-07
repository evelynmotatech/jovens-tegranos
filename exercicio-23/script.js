function calcularSoma() {
    var inNum1 = document.getElementById("inNum1");
    var inNum2 = document.getElementById("inNum2");
    var outResultado = document.getElementById("outResultado");

    var num1 = Number(inNum1.value);
    var num2 = Number(inNum2.value);
    soma = 0;
    
    for (var i = num1; i < num2; i++) {
        if (i % 2 != 0) {
            soma += i;
        }
    }
    outResultado.innerHTML = `SOMA DOS ÍMPARES: ${soma}`;
}

btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularSoma);