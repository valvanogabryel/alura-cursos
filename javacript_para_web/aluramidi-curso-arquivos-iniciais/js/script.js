const soundsBtn = document.querySelectorAll('button.tecla');

soundsBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        let btnName = btn.innerHTML.toLowerCase();
        let audio = document.querySelector(`#som_tecla_${btnName}`);
        audio.play();
    });
});