function mostrarMenorNumero() {
    var inNum1 = document.getElementById("inNum1");
    var inNum2 = document.getElementById("inNum2");
    var inNum3 = document.getElementById("inNum3");
    var outMenor = document.getElementById("outMenor");

    var num1 = Number(inNum1.value);
    var num2 = Number(inNum2.value);
    var num3 = Number(inNum3.value);
    var menorNumero;

    if(num1 < num2 && num1 < num3){
        menorNumero = num1;
    }else if(num2 < num1 && num2 < num3){
        menorNumero = num2;
    }else{
        menorNumero = num3;
    }

    outMenor.innerHTML = `MENOR: ${menorNumero}`;
}

btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostrarMenorNumero);