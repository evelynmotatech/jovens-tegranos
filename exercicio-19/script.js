function calcularAumento() {
    var inSalario = document.getElementById("inSalario");
    var outSalarioNovo = document.getElementById("outSalarioNovo");
    var outAumento = document.getElementById("outAumento");
    var outPorcentagem = document.getElementById("outPorcentagem");

    var salarioAtual = Number(inSalario.value);
    var porcentagem;

    if (salarioAtual < 999) {
        porcentagem = 0.2;        
    } else if (salarioAtual >= 1000 && salarioAtual < 2999) {
        porcentagem = 0.15;        
    } else if (salarioAtual >= 3000 && salarioAtual < 7999) {
        porcentagem = 0.1;        
    } else {        
        porcentagem = 0.05;       
    }

    var salarioNovo = parseFloat(salarioAtual) + (parseFloat(salarioAtual) * parseFloat(porcentagem));
    var aumento = parseFloat(salarioNovo) - parseFloat(salarioAtual)

    outSalarioNovo.innerHTML = `Novo salário: R$${salarioNovo.toFixed(2)}`;
    outAumento.innerHTML = `Aumento: R$${aumento.toFixed(2)}`;
    outPorcentagem.innerHTML = `Porcentagem: ${porcentagem}`;
}

btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularAumento);