function ordenarNumeros() {
    var inNumeros = document.getElementById("inNumeros");
    var outOrdenados = document.getElementById("outOrdenados");
    var numeros = (inNumeros.value);

    var numerosOrdenados = numeros.split("").sort().join(" ").replace(/,/g, " ");

    numerosOrdenados = numerosOrdenados.replace(/,/g, " ");
    outOrdenados.innerHTML = `NÚMEROS ORDENADOS: ${numerosOrdenados}`;
}

btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", ordenarNumeros);