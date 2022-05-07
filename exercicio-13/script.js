function calcularConta() {
    var inQntdMinutos = document.getElementById("inQntdMinutos");
    var outValor = document.getElementById("outValor");    

    var qntdMinutos = Number(inQntdMinutos.value);
    var valorExcedente = (parseFloat(qntdMinutos) - 100) * 2;
    var valorFixo = 50;
    var valorPagar;

    if(qntdMinutos > 100){
        valorPagar = valorFixo + valorExcedente;
    }else{
        valorPagar = valorFixo;
    }

    outValor.innerHTML = `VALOR A PAGAR: R$${valorPagar.toFixed(2)}`;
}

btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularConta);