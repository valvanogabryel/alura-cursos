import { connectApi } from "./connectAPI";

async function searchVideo() {
    const searchValue = document.querySelector('[data-pesquisa]').value;
    const search = await connectApi.searchVideos(searchValue);
    return search;
}


