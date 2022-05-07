function calcularMaiorDistancia() {
    var inDistancia1 = document.getElementById("inDistancia1");
    var inDistancia2 = document.getElementById("inDistancia2");
    var inDistancia3 = document.getElementById("inDistancia3");
    var outMaior = document.getElementById("outMaior");

    var distancia1 = Number(inDistancia1.value);
    var distancia2 = Number(inDistancia2.value);
    var distancia3 = Number(inDistancia3.value);
    var maiorDistancia;

    if(distancia1 > distancia2 && distancia1 > distancia3){
        maiorDistancia = distancia1;
    }else if(distancia2 > distancia1 && distancia2 > distancia3){
        maiorDistancia = distancia2;
    }else{
        maiorDistancia = distancia3;
    }

    outMaior.innerHTML = `MAIOR DISTÂNCIA: ${maiorDistancia.toFixed(2)}`;
}

btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularMaiorDistancia);