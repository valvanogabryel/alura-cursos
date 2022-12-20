const higherValue = 1000;
const lowerValue = 1;
let secretNumber = generateRandomNumber();


function generateRandomNumber() {
    return Math.round(Math.random() * (higherValue + 1));
}

const lowerValueElement = document.querySelector('span#lower-value');
const higherValueElement = document.querySelector('span#higher-value');

lowerValueElement.innerHTML = lowerValue;
higherValueElement.innerHTML = higherValue;

console.log(secretNumber)