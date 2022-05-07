function mostrarSituacao() {
    var inNota1 = document.getElementById("inNota1");
    var inNota2 = document.getElementById("inNota2");
    var outMedia = document.getElementById("outMedia");
    var outSituacao = document.getElementById("outSituacao");

    var nota1 = Number(inNota1.value);
    var nota2 = Number(inNota2.value);
    var media = ((parseFloat(nota1) + parseFloat(nota2)));
    var situacao;

    if(media >= 60.0){
        situacao = "APROVADO"
    }else{
        situacao = "REPROVADO"
    }

    outMedia.innerHTML = `NOTA FINAL: ${media.toFixed(1)}`;
    outSituacao.innerHTML = `${situacao}`;
}

btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostrarSituacao);