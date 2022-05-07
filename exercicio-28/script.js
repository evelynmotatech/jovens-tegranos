function listarNumerosEspecificos() {
    var numeros = document.getElementById("inNumeros").value;
    var outNumeros = document.getElementById("outNumeros");    

    var numeros = numeros.split(",");
    var array = Array.from(numeros);

    var minNum = Math.min(...array);
    var maxNum = Math.max(...array);

    outNumeros.innerHTML = `Menor número: ${minNum} <br> Maior número : ${maxNum}`;
}

btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", listarNumerosEspecificos);