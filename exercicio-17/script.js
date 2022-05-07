function calcularMultiplos() {
    var inNum1 = document.getElementById("inNum1");
    var inNum2 = document.getElementById("inNum2");
    var outClassificacao = document.getElementById("outClassificacao");

    var num1 = Number(inNum1.value);
    var num2 = Number(inNum2.value);

    if (num1 % num2 == 0 || num2 % num1 == 0) {
        outClassificacao.innerHTML = "Os números são multiplos";
    }else{
        outClassificacao.innerHTML = "Os números não são multiplos";
    }
}

btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularMultiplos);