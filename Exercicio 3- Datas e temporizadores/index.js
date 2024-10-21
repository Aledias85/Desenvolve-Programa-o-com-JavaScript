// Função para calcular o tempo restante até a data futura
function calcularTempoRestante(dataFutura) {
    const agora = new Date().getTime(); // Data e hora atuais em milissegundos
    const tempoRestante = dataFutura - agora; // Diferença em milissegundos

    // Cálculo de dias, horas, minutos e segundos restantes
    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

    return { dias, horas, minutos, segundos };
}

// Função para atualizar o temporizador na tela
function atualizarTemporizador() {
    const dataFutura = new Date("December 31, 2024 23:59:59").getTime(); // Defina sua data futura aqui
    const { dias, horas, minutos, segundos } = calcularTempoRestante(dataFutura);

    // Atualizando o conteúdo da div com o tempo restante
    document.getElementById("countdown").innerHTML = 
        `${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos`;

    // Se o tempo terminar
    if (dias <= 0 && horas <= 0 && minutos <= 0 && segundos <= 0) {
        clearInterval(intervalo); // Para o temporizador
        document.getElementById("countdown").innerHTML = "Tempo esgotado!";
    }
}

// Atualizar o temporizador a cada segundo
const intervalo = setInterval(atualizarTemporizador, 1000);

  