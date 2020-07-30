const BASE_URL = 'https://www.youtube.com/embed/';

const getVideoIdFromUrl = (url) => {
    return url.split('?v=')[1];
}

const playButtonEle = document.getElementById("play-button");

playButtonEle.addEventListener("click", () => {
    const videoUrl = document.getElementById("video-url").value;
    const videoId = getVideoIdFromUrl(videoUrl);
    const embeddedVideoUrl = BASE_URL + videoId;

    const iframeEle = document.getElementById("yt-player");
    iframeEle.setAttribute("src", embeddedVideoUrl);
});