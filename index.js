const BASE_URL = 'https://www.youtube.com/embed/';

const getParams = (parametersList) => {
    return parametersList.reduce((result, parameter, index) => {
        if (index === 0) {
            return result += parameter.key + '=' + parameter.value;
        }
        return result += '&' + parameter.key + '=' + parameter.value;
    }, '');
}


const getVideoIdFromUrl = (url) => {
    return url.split('?v=')[1];
}

const playButtonEle = document.getElementById("play-button");

playButtonEle.addEventListener("click", () => {
    const videoUrl = document.getElementById("video-url").value;

    if (!!videoUrl) {
        const videoId = getVideoIdFromUrl(videoUrl);
        const parametersList = [
            {
                key: 'playlist',
                value: videoId,
            },
            {
                key: 'loop',
                value: 1,
            }
        ];
        const embeddedVideoUrl = BASE_URL + videoId + '?' + getParams(parametersList);

        const iframeEle = document.getElementById("yt-player");
        iframeEle.setAttribute("src", embeddedVideoUrl);
    }
});