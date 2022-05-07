function validarCNPJ(cnpj) {
    //Entrada de dados
    var inCNPJ = document.getElementById("inCNPJ");
    var outValidacao = document.getElementById("outValidacao");;
    var cnpj = inCNPJ.value;

    cnpj = cnpj.replace(/[^\d]+/g, '');

    outValidacao.innerHTML = "";
    outValidacao.innerHTML = `CNPJ VÁLIDO`;

    if (cnpj == '') {
        outValidacao.innerHTML = `CNPJ INVÁLIDO`;
    };

    if (cnpj.length != 14) {
        outValidacao.innerHTML = `CNPJ INVÁLIDO`;
    }

    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999") {
        outValidacao.innerHTML = `CNPJ INVÁLIDO`;
    }

    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0, tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) {
            pos = 9;
        }
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)) {
        outValidacao.innerHTML = `CNPJ INVÁLIDO`;
    }

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) {
            pos = 9;
        }
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)) {
        outValidacao.innerHTML = `CNPJ INVÁLIDO`;
    }
}

btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", validarCNPJ);
