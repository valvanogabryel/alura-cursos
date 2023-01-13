import { NegotiationController } from './src/controllers/negotiation-controller.js';

const controller = new NegotiationController();
const form = document.querySelector('[data-form]');

if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.add();
    });
} else {
    throw new Error('Não foi possível iniciar a aplicação');
}
const buttonImport = document.querySelector('[data-button-import]');

if (buttonImport) {
    buttonImport.addEventListener('click', () => {
        controller.importData();
    })
} else {
    throw new Error('Botão importa não foi encontrado');
}