function calcularGlicemia() {
    var inQntdGlicose = document.getElementById("inQntdGlicose");
    var outClassificacao = document.getElementById("outClassificacao");

    var qntdGlicose = Number(inQntdGlicose.value);

    if(qntdGlicose <= 100){
        outClassificacao.innerHTML = `CLASSIFICAÇÃO: Normal`;
    }else if(qntdGlicose > 100 && qntdGlicose <= 140){
        outClassificacao.innerHTML = `CLASSIFICAÇÃO: Elevado`;
    }else{
        outClassificacao.innerHTML = `CLASSIFICAÇÃO: Diabetes`;
    }
}

btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularGlicemia);