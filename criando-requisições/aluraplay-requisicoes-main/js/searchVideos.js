import { connectApi } from "./connectAPI.js";
import createVideos from "./connectAPI.js";

const searchBtn = document.querySelector('[data-botao-pesquisa]');
searchBtn.addEventListener('click', event => searchVideo(event));

async function searchVideo(event) {
    event.preventDefault();

    const searchValue = document.querySelector('[data-pesquisa]').value;
    const search = await connectApi.searchVideos(searchValue);

    const list = document.querySelector('[data-lista]');

    while (list.firstChild == true) {
        list.removeChild(list.firstChild);
    }

    search.forEach(element => list.appendChild(
        createVideos(element.titulo, element.url, element.imagem, element.descricao)));
}


