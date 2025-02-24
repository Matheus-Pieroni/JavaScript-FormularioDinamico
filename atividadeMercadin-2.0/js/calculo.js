/*
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
*/

function calculateTotal() {
    const p1 = parseFloat(document.getElementById('num1').value) || 0;
    const p2 = parseFloat(document.getElementById('num2').value) || 0;
    const p3 = parseFloat(document.getElementById('num3').value) || 0;
    const precoTotal = document.getElementById('resultado'); // Corrigido o ID

    const total = p1 + p2 + p3;
    if (total <= 100000.00)
        precoTotal.textContent = `R$ ${total.toFixed(2)}`; // Corrigida a formatação da string
    else
        window.alert("O valor colocado é grande demais! Que tal economizar um pouco?")
};
