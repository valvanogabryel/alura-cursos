async function getVideos() {
    const response = await fetch('http://localhost:3000/videos');
    const videos = await response.json();
    console.table(videos)
    return videos;
}

export const connectApi = {
    getVideos
}