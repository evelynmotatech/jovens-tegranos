function calcularHoras() {
    var inSegundos = document.getElementById("inSegundos");
    var outHoras = document.getElementById("outHoras");

    var segundos = Number(inSegundos.value);    

    var horas = Math.round(segundos / 3600);
    var minutos = Math.round((segundos % 3600) / 60);
    var segundos = Math.round((segundos % 3600) % 60);

    outHoras.innerHTML = `Duração em horas <br> ${horas}:${minutos}:${segundos}`;
}

btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularHoras);