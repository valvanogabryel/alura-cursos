window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const attemptElement = document.querySelector('div#attempt');
const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';
recognition.start();
recognition.addEventListener('result', onSpeak);

function onSpeak(event) {
    const attempt = event.results[0][0].transcript;
    printAttempt(attempt);
    verifyAttempt(attempt);
    handleGameover(attempt);
}

function printAttempt(attempt) {
    attemptElement.innerHTML = `
    <div>Você disse:</div>
            <span class="box">${attempt}</span>
    `
}

recognition.addEventListener('end', () => recognition.start());
