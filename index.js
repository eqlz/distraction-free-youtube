const BASE_URL = 'https://www.youtube.com/embed/';
const PARAMETER_LOOP = 'loop=1'
const getParameterPlaylist = (videoId) => `playlist=${videoId}`;

const getVideoIdFromUrl = (url) => {
    return url.split('?v=')[1];
}

const playButtonEle = document.getElementById("play-button");

playButtonEle.addEventListener("click", () => {
    const videoUrl = document.getElementById("video-url").value;
    const videoId = getVideoIdFromUrl(videoUrl);
    const embeddedVideoUrl = BASE_URL + videoId + '?' +
        getParameterPlaylist(videoId) + '&' +
        PARAMETER_LOOP;

    const iframeEle = document.getElementById("yt-player");
    iframeEle.setAttribute("src", embeddedVideoUrl);
});