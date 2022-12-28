import { connectApi } from "./connectApi.js";

const form = document.querySelector('[data-form]');
form.addEventListener('submit', event => createVideo(event));


async function createVideo(event) {
    event.preventDefault();
    const title = document.querySelector('[data-titulo]').value;
    const url = document.querySelector('[data-url]').value;
    const image = document.querySelector('[data-imagem]').value;
    const description = Math.floor(Math.random() * 10).toString();


    try {
        await connectApi.createVideos(title, url, image, description);
        window.location.href = '../pages/envio-concluido.html';
    } catch (error) {
        alert(error);
    }
}