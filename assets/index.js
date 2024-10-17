const tabellone = document.getElementById('tabellone');
const estraiBtn = document.getElementById('estraiBtn');
const numeroEstrattoDisplay = document.getElementById('numeroEstratto');

for (let i = 0; i < 76; i++) {
    const cella = document.createElement('div');
    cella.classList.add('cella');
    cella.textContent = i + 1;
    cella.id = 'cella-' + i;
    tabellone.appendChild(cella);
}

let numeriEstratti = [];

function estraiNumero() {
    let numero;
    do {
        numero = Math.floor(Math.random() * 76) + 1;
    } while (numeriEstratti.includes(numero));

    numeriEstratti.push(numero);
    return numero;
}

estraiBtn.addEventListener('click', () => {
    if (numeriEstratti.length < 76) {
        const numero = estraiNumero();
        evidenziaCella(numero);
        numeroEstrattoDisplay.textContent = `Numero estratto: ${numero}`;
    } else {
        numeroEstrattoDisplay.textContent = 'Tutti i numeri sono stati estratti!';
        estraiBtn.disabled = true;
    }
});

function evidenziaCella(numero) {
    const cella = document.getElementById('cella-' + numero);
    cella.classList.add('evidenziata');
}
