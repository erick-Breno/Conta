/* =====================================
   CBMMA 2026
   CONTAGEM REGRESSIVA
===================================== */


/*
    DATA DA PROVA

    O edital informa:
    18/10/2026
    Turno da tarde

    Como o horário oficial ainda não foi
    definido neste trecho do edital,
    estamos utilizando 13:00 como horário
    provisório.

    Quando o horário oficial sair,
    altere somente esta linha.
*/

const dataProva = new Date("2026-11-17T18:00:00-03:00");


/* =====================================
   ELEMENTOS
===================================== */

const dias = document.getElementById("days");
const horas = document.getElementById("hours");
const minutos = document.getElementById("minutes");
const segundos = document.getElementById("seconds");


/* =====================================
   FORMATAÇÃO
===================================== */

function formatarNumero(numero) {

    return numero.toString().padStart(2, "0");

}


/* =====================================
   CONTADOR
===================================== */

function atualizarContador() {

    const agora = new Date();

    const diferenca = dataProva - agora;


    /* =================================
       SE A PROVA JÁ ACONTECEU
    ================================= */

    if (diferenca <= 0) {

        dias.textContent = "00";
        horas.textContent = "00";
        minutos.textContent = "00";
        segundos.textContent = "00";

        document.querySelector(".hero h2").innerHTML =
            "A PROVA<br><span>COMEÇOU.</span>";

        return;
    }


    /* =================================
       CÁLCULO
    ================================= */

    const totalSegundos = Math.floor(
        diferenca / 1000
    );


    const totalMinutos = Math.floor(
        totalSegundos / 60
    );


    const totalHoras = Math.floor(
        totalMinutos / 60
    );


    const totalDias = Math.floor(
        totalHoras / 24
    );


    const horasRestantes = totalHoras % 24;


    const minutosRestantes = totalMinutos % 60;


    const segundosRestantes = totalSegundos % 60;


    /* =================================
       ATUALIZAÇÃO NA TELA
    ================================= */

    dias.textContent =
        formatarNumero(totalDias);


    horas.textContent =
        formatarNumero(horasRestantes);


    minutos.textContent =
        formatarNumero(minutosRestantes);


    segundos.textContent =
        formatarNumero(segundosRestantes);

}


/* =====================================
   INICIALIZAÇÃO
===================================== */

atualizarContador();


/* =====================================
   ATUALIZA A CADA SEGUNDO
===================================== */

setInterval(
    atualizarContador,
    1000
);
