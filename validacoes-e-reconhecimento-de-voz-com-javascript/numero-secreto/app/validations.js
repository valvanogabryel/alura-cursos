function verifyAttempt(attempt) {
    const number = Number.parseInt(attempt);

    if (!isNumber(number)) {
        attemptElement.innerHTML += `<div>Valor inválido</div>`;
        return;
    }
    if (isHigherOrLower(number)) {
        attemptElement.innerHTML += `<div>Valor inválido. O chute precisa ser entre ${lowerValue} e ${higherValue}</div>`;
        return;
    }

    number === secretNumber ? document.body.innerHTML = `
    <div class="victory__message">
    <h2>Você acertou!</h2>
    <h3>O número secreto era ${secretNumber}</h3>
    <button id="restart-btn" class="restart__button" onclick="restartGame()">Jogar Novamente</button>
    </div>
    `: attemptElement.innerHTML += ` <div>Você errou... O número é ${checkAnswer(number)} ${checkArrow(number)} que ${number}</div>`;
}

const isNumber = (number) => !Number.isNaN(number);

const isHigherOrLower = (number) => number > higherValue || number < lowerValue;

const checkAnswer = (number) => number < secretNumber ? 'maior' : 'menor';

const checkArrow = (number) => number < secretNumber ? '<i class="fa-solid fa-arrow-up-long"></i>' : '<i class="fa-solid fa-arrow-down-long"></i>';

