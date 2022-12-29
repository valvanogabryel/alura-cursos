export default function isCPF(field) {
    // pega o valor do campo de cpf e retira os caractéres especiais, deixando apenas o número.
    const cpf = field.value.replace(/\.|-/g, "");
    if (verifyRepeatedNumbers(cpf) ||
        validadeFirstDigit(cpf) ||
        validadeSecondDigit(cpf)) {
        console.log('Esse cpf não existe');
    } else {
        console.log('Cpf válido');
    }
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
    ];

    return repeatedNumbers.includes(cpf);
}

function validadeFirstDigit(cpf) {
    let sum = 0;
    let multiplicator = 10;

    for (let size = 0; size < 9; size++) {
        sum += cpf[size] * multiplicator;
        multiplicator--;
    }

    sum = (sum * 10) % 11;

    if (sum == 11 || sum == 10) {
        sum = 0;
    }

    console.log(sum)

    return sum != cpf[9];
}


function validadeSecondDigit(cpf) {
    let sum = 0;
    let multiplicator = 11;

    for (let size = 0; size < 10; size++) {
        sum += cpf[size] * multiplicator;
        multiplicator--;
    }

    sum = (sum * 10) % 11;

    if (sum == 11 || sum == 10) {
        sum = 0;
    }

    console.log(sum)

    return sum != cpf[10];
}
