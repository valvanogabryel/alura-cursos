import { connectApi } from "./connectApi.js";

const list = document.querySelector('[data-lista]');

export default function createListElement(listElement) {
    const video = document.createElement('li');
    video.className = 'videos__item';
    video.innerHTML =
        `<iframe width="100%" height="72%" src="${listElement.url}"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
<div class="descricao-video">
    <img src="${listElement.imagem}">
    <h3>${listElement.titulo}</h3>
    <p>${listElement.descricao}</p>
</div>`

    return video;
}

async function videoList() {
    const apiList = await connectApi.getVideos();
    apiList.forEach(element => list.appendChild(createListElement(element)));
}

videoList();