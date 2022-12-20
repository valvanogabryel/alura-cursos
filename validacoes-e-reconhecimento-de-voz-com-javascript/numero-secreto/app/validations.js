function verifyAttempt(attempt) {
    const number = Number.parseInt(attempt);

    if (isNumber(number)) {
        attemptElement.innerHTML += `<div>Valor válido</div>`;
    } else {
        attemptElement.innerHTML += `<div>Valor inválido</div>`;
    }

    if (!isHigherOrLower(number)) {
        console.log('Valor válido');
    } else {
        console.log(`Valor inválido. O chute precisa ser entre ${lowerValue} e ${higherValue}`);
    }
}

const isNumber = (number) => !Number.isNaN(number);

const isHigherOrLower = (number) => number > higherValue || number < lowerValue;
