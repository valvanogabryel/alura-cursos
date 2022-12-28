async function getVideos() {
    const response = await fetch('http://localhost:3000/videos');
    const videos = await response.json();
    return videos;
}

async function createVideos(element) {
    const response = await fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: {
            'Content-type': "application/json"
        },
        body: JSON.stringify({
            titulo: element.titulo,
            descricao: `${element.descricao} mil vizualizações`,
            url: element.url,
            imagem: element.imagem
        })
    });

    const convertedResponse = await response.json();
    return convertedResponse;
}

export const connectApi = {
    getVideos,
    createVideos
}