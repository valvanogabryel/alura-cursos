const calcBtn = document.querySelector('#calcular');
const results = document.querySelectorAll('.resultado');

calcBtn.addEventListener('click', () => {
    results[0].innerHTML = 'Fui clicado';
    results[1].innerHTML = 'Óia só que bacana!';
})