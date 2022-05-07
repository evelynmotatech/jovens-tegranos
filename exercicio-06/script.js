function gerarPagamento() {
    //Entrada de dados
    var inNome = (document.getElementById("inNome")).value;
    var inValorHora = document.getElementById("inValorHora");
    var inHoras = document.getElementById("inHoras");
    var outPagamento = document.getElementById("outPagamento");

    //Processamento de dados
    var valorHora = Number(inValorHora.value).toFixed(2);
    var qntdHoras = Number(inHoras.value);
    var pagamento = (valorHora * qntdHoras).toFixed(2);

    //Saída de dados
    outPagamento.innerHTML = `O pagamento para ${inNome} deve ser R$${pagamento}`;
}

btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", gerarPagamento);