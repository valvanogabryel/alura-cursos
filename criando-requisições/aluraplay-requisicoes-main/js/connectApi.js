async function getVideos() {
    const response = await fetch('http://localhost:3000/videos');
    const videos = await response.json();
    return videos;
}

async function createVideos(title, url, image, description) {
    const response = await fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            titulo: title,
            url: url,
            imagem: image,
            descricao: `${description} mil vizualizações`
        })
    });

    if (!response.ok) throw new Error('Não foi possível enviar o vídeo');

    const convertedResponse = await response.json();
    return convertedResponse;
}

async function searchVideos(searchTerm) {
    const response = await fetch(`http://localhost:3000/videos?q=${searchTerm}`);
    const convertedResponse = await response.json();

    return convertedResponse;
}

export const connectApi = {
    getVideos,
    createVideos,
    searchVideos
}