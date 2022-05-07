function calcularTroco() {
    var inValorUnit = document.getElementById("inValorUnit");
    var inQntdProduto = document.getElementById("inQntdProduto");
    var inDinheiro = document.getElementById("inDinheiro");
    var outTroco = document.getElementById("outTroco");

    var valorUnit = Number(inValorUnit.value);
    var qntdProduto = Number(inQntdProduto.value);
    var dinheiro = Number(inDinheiro.value);

    let valorCompra = (valorUnit * qntdProduto);
    let troco = (dinheiro - valorCompra);
    let valorFaltando = Math.abs(valorCompra - dinheiro) ;

    if(valorCompra > dinheiro){
        outTroco.innerHTML = `Valor insuficiente. Faltam: R$${valorFaltando.toFixed(2)}`;
    }else{
        outTroco.innerHTML = `TROCO: R$${troco.toFixed(2)}`;
    }
}

btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularTroco);