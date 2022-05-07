function bhaskara() {
    var inCoefA = document.getElementById("inCoefA");
    var inCoefB = document.getElementById("inCoefB");
    var inCoefC = document.getElementById("inCoefC");
    var outAviso = document.getElementById("outAviso");
    var outRaizX1 = document.getElementById("outRaizX1");
    var outRaizX2 = document.getElementById("outRaizX2");

    var coeficienteA = Number(inCoefA.value);
    var coeficienteB = Number(inCoefB.value);
    var coeficienteC = Number(inCoefC.value);

    var delta = coeficienteB * coeficienteB - 4 * coeficienteA * coeficienteC;

    if (coeficienteA == 0) {
        outAviso.innerHTML = "O valor do Coeficiente A deve ser diferente de 0";
        outRaizX1.innerHTML = "";
        outRaizX2.innerHTML = "";
    } else if (delta < 0) {
        outAviso.innerHTML = "Sem raízes reais";
        outRaizX1.innerHTML = "";
        outRaizX2.innerHTML = "";
    } else {
        const x1 = ((-coeficienteB + Math.sqrt(delta)) / (2 * coeficienteA)).toFixed(4);
        const x2 = ((-coeficienteB - Math.sqrt(delta)) / (2 * coeficienteA)).toFixed(4);
        outAviso.innerHTML = "";
        outRaizX1.innerHTML = `X1: ${x1}`;
        outRaizX2.innerHTML = `X2: ${x2}`;
    }
}

btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", bhaskara);