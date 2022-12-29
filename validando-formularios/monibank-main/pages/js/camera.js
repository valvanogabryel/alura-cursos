const startCameraBtn = document.querySelector('[data-video-botao]');
const video = document.querySelector('[data-video]');
const cameraField = document.querySelector('[data-camera]');
const takePicBtn = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
const message = document.querySelector('[data-mensagem]');
const sendPicBtn = document.querySelector('[data-enviar]');
let imageURL = '';

startCameraBtn.addEventListener('click', async () => {
    const startVideo = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
    })

    startCameraBtn.style.display = 'none';
    cameraField.style.display = 'block';

    video.srcObject = startVideo;
})

takePicBtn.addEventListener('click', function () {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    imageURL = canvas.toDataURL('image/jpeg');

    cameraField.style.display = 'none';
    message.style.display = 'block';
})

sendPicBtn.addEventListener('click', () => {
    const receiveData = localStorage.getItem("cadastro");
    const convertData = JSON.parse(receiveData);

    convertData.imagem = imageURL;

    localStorage.setItem('cadastro', JSON.stringify(convertData))

    window.location.href = '../pages/abrir-conta-form-3.html';
})