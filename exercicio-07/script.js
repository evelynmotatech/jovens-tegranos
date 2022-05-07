function calcularConsumoMedio() {
    var inDistancia = document.getElementById("inDistancia");
    var inGasto = document.getElementById("inGasto");
    var outConsumo = document.getElementById("outConsumo");

    var distancia = Number(inDistancia.value);
    var gasto = Number(inGasto.value);    
    var consumo = (distancia / gasto);

    outConsumo.innerHTML = `Consumo médio: ${consumo.toFixed(3)} km/l`;
}

btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularConsumoMedio);