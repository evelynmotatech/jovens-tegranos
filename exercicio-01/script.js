function calcularValorArea() {

    var inLargura = document.getElementById("inLargura");
    var inComprimento = document.getElementById("inComprimento");
    var inValor = document.getElementById("inValor");
    var outArea = document.getElementById("outArea");
    var outValorTotal = document.getElementById("outValorTotal");
    
    var largura = Number(inLargura.value);
    var comprimento = Number(inComprimento.value);
    var valor = Number(inValor.value);
    var area = (largura * comprimento);
    var preco = (area * valor);

    outArea.innerHTML = `Área do terreno: ${area.toFixed(2)}m²`;
    outValorTotal.innerHTML = `Preço do terreno: R$${preco.toFixed(2)}`;
}

btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularValorArea);