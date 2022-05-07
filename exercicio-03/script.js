function gerarTexto() {
    var inNomePessoa1 = (document.getElementById("inNomePessoa1")).value;
    var inIdadePessoa1 = document.getElementById("inIdadePessoa1");
    var inNomePessoa2 = (document.getElementById("inNomePessoa2")).value;
    var inIdadePessoa2 = document.getElementById("inIdadePessoa2");
    var outTexto = document.getElementById("outTexto");  
 
    var idade1 = Number(inIdadePessoa1.value);
    var idade2 = Number(inIdadePessoa2.value);
    var media = ((idade1 + idade2) / 2);

    outTexto.innerHTML = `A idade média de ${inNomePessoa1} e ${inNomePessoa2} é de ${media.toFixed(1)} anos.`;
}

btTexto = document.getElementById("btTexto");
btTexto.addEventListener("click", gerarTexto);