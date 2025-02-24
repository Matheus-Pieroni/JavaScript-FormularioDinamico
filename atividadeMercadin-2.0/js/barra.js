let barProgress = 0; // Variável global para rastrear o progresso
let interval; // Variável para armazenar o intervalo

const valor1 = document.getElementById('num1').value;
const valor2 = document.getElementById('num2').value;
const valor3 = document.getElementById('num3').value;

function barraLesgal() {
    barProgress = 0; // Reseta a barra toda vez que o botão é pressionado
    clearInterval(interval); // Para qualquer animação anterior
    document.getElementById('barra').style.display = 'block'; // Mostra a barra

    interval = setInterval(atualizaBarra, 100); // Inicia o progresso
}

function atualizaBarra() {
    const total = 100;
    const compraCompl = document.getElementById('compra-concluida');
    const barra = document.getElementById('barra');

    if (barProgress < total) {
        barProgress++;
        barra.style.width = barProgress + '%';
        barra.textContent = barProgress + '%';
    } else {
        clearInterval(interval); // Para a animação ao chegar em 100%
        compraCompl.style.display = 'block'; // Exibe "Compra Concluída!"
    }
}
