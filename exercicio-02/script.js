function calcularRetangulo() {
    var inBase = document.getElementById("inBase");
    var inAltura = document.getElementById("inAltura");
    var outArea = document.getElementById("outArea");
    var outPerimetro = document.getElementById("outPerimetro");    
    var outDiagonal = document.getElementById("outDiagonal");

    var base = Number(inBase.value);
    var altura = Number(inAltura.value);
    var area = (base * altura);
    var perimetro = 2 * (base * altura);
    var diagonal = Math.sqrt((Math.pow(base, 2) + Math.pow(altura,2)));

    outArea.innerHTML = `ÁREA: ${area.toFixed(4)}m²`;
    outPerimetro.innerHTML = `PERÍMETRO: ${perimetro.toFixed(4)}m`;
    outDiagonal.innerHTML = `DIAGONAL: ${diagonal.toFixed(4)}m`;
}

btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularRetangulo);