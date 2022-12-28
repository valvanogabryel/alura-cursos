import { connectApi } from "./connectAPI.js";
import createListElement from "./showVideos.js";

const searchBtn = document.querySelector('[data-botao-pesquisa]');
searchBtn.addEventListener('click', event => searchVideo(event));

async function searchVideo(event) {
    event.preventDefault();

    const searchValue = document.querySelector('[data-pesquisa]').value;
    const search = await connectApi.searchVideos(searchValue);

    const list = document.querySelector('[data-lista]');

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    search.forEach(element => list.appendChild(
        createListElement(element)));

    if (search.length == 0) {
        list.innerHTML = '<h2 class="mensagem__titulo">Nenhum vídeo encontrado</h2>';
    }
}




