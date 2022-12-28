import isCPF from "./cpf-validation.js";

const formElements = document.querySelectorAll('[required]');
formElements.forEach(element => {
    element.addEventListener('blur', () => {
        verifyfield(element);
    })
})

function verifyfield(field) {
    field.name == 'cpf' && field.value.length > 11 ? isCPF(field) : '';
} 
