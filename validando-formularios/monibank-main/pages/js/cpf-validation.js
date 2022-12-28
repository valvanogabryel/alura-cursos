export default function isCPF(field) {
    // pega o valor do campo de cpf e retira os caractéres especiais, deixando apenas o número.
    const cpf = field.value.replace(/\.|-/g, "");
    verifyRepeatedNumbers(cpf);
}

function verifyRepeatedNumbers(cpf) {
    const repeatedNumbers = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return repeatedNumbers.includes(cpf);
}
