import { NegotiationController } from "../app/src/controllers/negotiation-controller.js";
const controller = new NegotiationController;
const form = document.querySelector('[data-form]');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.add();
    });
}
else {
    throw new Error('Não foi possível iniciar a aplicação');
}
