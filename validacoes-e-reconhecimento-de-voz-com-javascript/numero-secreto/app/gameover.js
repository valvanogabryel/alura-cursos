function handleGameover(attempt) {
    const gameoverPage = `
    <div class="gameover__message">
    <h2>Game Over...</h2>
    <button id="restart-btn" class="restart__button" onclick="restartGame()">Jogar Novamente</button>
    </div>
    `;

    attempt == 'game over' ? document.body.innerHTML = gameoverPage : '';
}