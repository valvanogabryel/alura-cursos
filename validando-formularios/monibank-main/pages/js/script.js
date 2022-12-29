import isCPF from "./cpf-validation.js";
import isOfAge from "./age-validation.js";

const formElements = document.querySelectorAll('[required]');
formElements.forEach(element => {
    element.addEventListener('blur', () => {
        verifyfield(element);
    })

    element.addEventListener('invalid', event => {
        event.preventDefault();
    })
})

const typeOfErrors = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError',
    'tooShort'
];

const messages = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Muito curto, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function verifyfield(field) {
    let message = '';
    field.name == 'cpf' && field.value.length > 11 ? isCPF(field) : '';
    field.name == 'aniversario' && field.value != '' ? isOfAge(field) : '';

    typeOfErrors.forEach(error => {
        if (field.validity[error]) {
            message = messages[field.name][error];
            console.log(message);
        }
    })
}
