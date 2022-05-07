function mostrarPar() {
    var inNum = document.getElementById("inNum");
    var outResultado = document.getElementById("outResultado");

    var num = Number(inNum.value);
    var i = 1;
    outResultado.innerHTML = "";

    while (i <= num) {
        if (i % 2 == 0) {
            outResultado.innerHTML += `${i} <br> `;
        }
        i++;
    }
}

btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostrarPar);