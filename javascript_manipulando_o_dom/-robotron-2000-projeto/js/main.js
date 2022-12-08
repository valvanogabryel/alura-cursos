const controls = document.querySelectorAll('[data-controle]');
const stats = document.querySelectorAll('[data-estatistica]')
const parts = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controls.forEach(element => {
    element.addEventListener('click', (event) => {
        changeData(event.target.dataset.controle, event.target.parentNode);
        updateStats(event.target.dataset.part, event.target.dataset.controle);
    });
})

function changeData(operation, control) {
    const part = control.querySelector('[data-contador]')

    if (operation === '-') {
        if (part.value > 0) part.value = parseInt(part.value) - 1;
    } else {
        part.value = parseInt(part.value) + 1;
    }
}

function updateStats(part, operator) {

    if (operator === '+') {
        stats.forEach(stat => {
            stat.textContent = parseInt(stat.textContent) + parts[part][stat.dataset.estatistica];
        });
    } else {
        stats.forEach(stat => {
            stat.textContent = parseInt(stat.textContent) - parts[part][stat.dataset.estatistica];
        });
    }
}