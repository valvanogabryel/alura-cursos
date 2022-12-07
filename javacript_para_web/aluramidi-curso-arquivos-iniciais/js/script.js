const soundsBtn = document.querySelectorAll('button.tecla');

soundsBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        let btnName = btn.innerHTML.toLowerCase();
        let audio = document.querySelector(`#som_tecla_${btnName}`);
        audio.play();

        btn.addEventListener('keydown', (event) => {
            if (event.code === 'Enter' || event.code === 'Space') {
                btn.classList.add('ativa');
            }
            /*"code", no objeto "event", refere-se à tecla pressionada, assim como o "key". Porém, no "key", a tecla de espaço é representada como uma string com um espaço vazio (" "), diferetemente da informação que chega no "code", que é o nome da tecla em si ("Space"); Logo, essa condicional poderia também ser escrita da seguinte forma:
            
            if (event.key === 'Enter' || event.key === ' ') {
                btn.classList.add('ativa');
            }

            No code, por outro lado, uma tecla qualquer, como por exemplo o "w", é descrito como "KeyW", enquanto no "Key", o retorno é a tecla "w";
            */
        });
        btn.addEventListener('keyup', () => {
            btn.classList.remove('ativa');
        });
    });
})