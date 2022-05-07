function calcularAreas() {
    var inMedidaA = document.getElementById("inMedidaA");
    var inMedidaB = document.getElementById("inMedidaB");
    var inMedidaC = document.getElementById("inMedidaC");
    var outQuadrado = document.getElementById("outQuadrado");
    var outTriangulo = document.getElementById("outTriangulo");
    var outTrapezio = document.getElementById("outTrapezio");

    let medidaA = Number(inMedidaA.value);
    let medidaB = Number(inMedidaB.value);
    let medidaC = Number(inMedidaC.value);

    let quadrado = (Math.pow(medidaA, 2));
    let triangulo = ((medidaA * medidaB)/2);  
    let trapezio = (((parseFloat(medidaA) + parseFloat(medidaB)) * parseFloat(medidaC)) / 2);

    outQuadrado.innerHTML = `ÁREA DO QUADRADO: ${quadrado.toFixed(3)}`;
    outTriangulo.innerHTML = `ÁREA DO TRIÂNGULO: ${triangulo.toFixed(3)}`;
    outTrapezio.innerHTML = `ÁREA DO TRAPÉZIO: ${trapezio.toFixed(3)}`;
}

btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularAreas);


