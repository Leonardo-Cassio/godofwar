const triggerElement = document.getElementById('clica1');
const textDisplay = document.getElementById('textoclicahistoria1');

triggerElement.addEventListener('click', () => {
    textDisplay.classList.toggle('esconde');
});

const triggerElemente = document.getElementById('clica2');
const textoDisplay = document.getElementById('textoclicahistoria2');

triggerElemente.addEventListener('click', () => {
    textoDisplay.classList.toggle('esconde2');
});

const triggerElemento = document.getElementById('clica3');
const texDisplay = document.getElementById('textoclicahistoria3');

triggerElemento.addEventListener('click', () => {
    texDisplay.classList.toggle('esconde3');
});

