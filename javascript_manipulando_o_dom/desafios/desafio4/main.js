const list = document.querySelector("ul");
const btn = document.querySelector('#botao');
const closeBtn = document.createElement('button');

btn.addEventListener('click', () => {
    list.setAttribute('data-lista', 'show');
    handleShowBtn()
})

function handleShowBtn() {
    document.body.appendChild(closeBtn);
    closeBtn.innerHTML = 'Deixar de ver';
    closeBtn.addEventListener('click', () => {
        list.setAttribute('data-lista', 'hide');
    })
}
