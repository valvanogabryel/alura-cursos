const startCameraBtn = document.querySelector('[data-video-botao]');
const video = document.querySelector('[data-video]');
const cameraField = document.querySelector('[data-camera]');
const takePicBtn = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');

startCameraBtn.addEventListener('click', async () => {
    const startVideo = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
    })

    startCameraBtn.style.display = 'none';
    cameraField.style.display = 'block';

    video.srcObject = startVideo;
})




































// window.location.href = '../pages/abrir-conta-form-3.html';
