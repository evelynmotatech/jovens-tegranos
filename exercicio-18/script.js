function calcularConversao() {
    var inEscala = document.getElementById("inEscala");
    var inTemperatura = document.getElementById('inTemperatura')
    var outConversao = document.getElementById("outConversao");

    var escala = inEscala.value;
    var temperatura = Number(inTemperatura.value);
    var conversaoParaFarenheit = temperatura * (9 / 5) + 32;
    var conversaoParaCelsius = (temperatura - 32) * (5 / 9);

    switch (escala) {
        case "C":
            outConversao.innerHTML = `${temperatura}ºC = ${conversaoParaFarenheit.toFixed(2)}ºF`;
            break;
        case "F":
            outConversao.innerHTML = `${temperatura}ºF = ${conversaoParaCelsius.toFixed(2)}ºC`;
            break;
        default:
            outConversao.innerHTML = `Escala inválida`;
            break;
    }
}
btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularConversao);
