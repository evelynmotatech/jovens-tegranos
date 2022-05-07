function calcularSoma() {
    var inNum = document.getElementById("inNum");
    var outResultado = document.getElementById("outResultado");
    var num = Number(inNum.value);
    var i = 1;    
    outResultado.innerHTML = "";
    
    while (i <= 10) {
        outResultado.innerHTML += `${num} x ${i} = ${num * i} <br> `;
        i++;
    }
}

btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularSoma);