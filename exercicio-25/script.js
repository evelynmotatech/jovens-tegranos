function verificarSigno() {
    var inNascimento = document.getElementById("inNascimento");
    var outSigno = document.getElementById("outSigno");

    var nascimento = inNascimento.value;
    var dataNascimento = nascimento.substring(0, 2);
    var mesNascimento = nascimento.substring(3, 5);
    var signo = "";

    if (mesNascimento == 01 && dataNascimento <= 20) {
        signo = "Capricórnio";
    } else if (mesNascimento == 01 && dataNascimento >= 21) {
        signo = "Aquário";
    } else if (mesNascimento == 02 && dataNascimento <= 18) {
        signo = "Aquário";
    } else if (mesNascimento == 02 && dataNascimento >= 19) {
        signo = "Peixes";
    } else if (mesNascimento == 03 && dataNascimento <= 20) {
        signo = "Peixes";
    } else if (mesNascimento == 03 && dataNascimento >= 21) {
        signo = "Aries";
    } else if (mesNascimento == 04 && dataNascimento <= 20) {
        signo = "Aries";
    } else if (mesNascimento == 04 && dataNascimento >= 21) {
        signo = "Touro";
    } else if (mesNascimento == 05 && dataNascimento <= 20) {
        signo = "Touro";
    } else if (mesNascimento == 05 && dataNascimento >= 21) {
        signo = "Gêmeos";
    } else if (mesNascimento == 06 && dataNascimento <= 20) {
        signo = "Gêmeos";
    } else if (mesNascimento == 06 && dataNascimento >= 21) {
        signo = "Câncer";
    } else if (mesNascimento == 07 && dataNascimento <= 22) {
        signo = "Câncer";
    } else if (mesNascimento == 07 && dataNascimento >= 23) {
        signo = "Leão";
    } else if (mesNascimento == 08 && dataNascimento <= 22) {
        signo = "Leão";
    } else if (mesNascimento == 08 && dataNascimento >= 23) {
        signo = "Virgem";
    } else if (mesNascimento == 09 && dataNascimento <= 22) {
        signo = "Virgem";
    } else if (mesNascimento == 09 && dataNascimento >= 23) {
        signo = "Libra";
    } else if (mesNascimento == 10 && dataNascimento <= 22) {
        signo = "Libra";
    } else if (mesNascimento == 10 && dataNascimento >= 23) {
        signo = "Escorpião";
    } else if (mesNascimento == 11 && dataNascimento <= 21) {
        signo = "Escorpião";
    } else if (mesNascimento == 11 && dataNascimento >= 22) {
        signo = "Sagitário";
    } else if (mesNascimento == 12 && dataNascimento <= 20) {
        signo = "Sagitário";
    } else if (mesNascimento == 12 && dataNascimento >= 22) {
        signo = "Capricórnio";
    }

    outSigno.innerHTML = `Seu signo é: ${signo}`;
}

btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", verificarSigno);