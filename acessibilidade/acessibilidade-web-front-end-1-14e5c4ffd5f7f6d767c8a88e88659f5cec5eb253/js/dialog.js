// Variáveis
let btnAbreDialog = document.querySelector('#abreDialog');
let dialog = document.querySelector('.dialogNewsletter');
let dialogBody = document.querySelector('.dialogNewsletter-body');
let dialogOverlay = document.querySelector('.dialogNewsletter-overlay');


// Quando abrir a dialog...
btnAbreDialog.addEventListener('click', function () {
  dialog.classList.add('dialogNewsletter--aberto');
});

function fechandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialogNewsletter--aberto');
}

// Listeners
document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fechandoDialog);