//O QUE - Matheus

const nameInput = document.getElementById('name');
const footer = document.getElementById('footer');

nameInput.addEventListener('input', () => {
    footer.textContent = nameInput.value || 'Seu nome aparecera aqui!'
});