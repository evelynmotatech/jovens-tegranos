function calcularArea() {
    var inRaio = document.getElementById("inRaio");
    var outArea = document.getElementById("outArea");

    var raio = Number(inRaio.value);
    var area = (Math.PI * (Math.pow(raio,2)));

    outArea.innerHTML = `ÁREA : ${area.toFixed(3)}m²`;
}

btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularArea);