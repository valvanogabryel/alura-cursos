const controls = document.querySelectorAll('[data-controle]');

controls.forEach(element => {
    element.addEventListener('click', (event) => {
        handleClick(event.target.dataset.controle, event.target.parentNode);
    });
})

function handleClick(operation, control) {
    const part = control.querySelector('[data-contador]')

    if (operation === '-') {
        if (part.value > 0) part.value = parseInt(part.value) - 1;
    } else {
        part.value = parseInt(part.value) + 1;
    }
}