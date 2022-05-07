function calcularTroco() {
    var inValorUnit = document.getElementById("inValorUnit");
    var inQntdProduto = document.getElementById("inQntdProduto");
    var inDinheiro = document.getElementById("inDinheiro");
    var outTroco = document.getElementById("outTroco");

    var valorUnit = Number(inValorUnit.value);
    var qntdProduto = Number(inQntdProduto.value);
    var dinheiro = Number(inDinheiro.value);

    var valorCompra = (valorUnit * qntdProduto);
    var troco = (dinheiro - valorCompra);

    outTroco.innerHTML = `TROCO: R$${troco.toFixed(2)}`;
}

btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularTroco);