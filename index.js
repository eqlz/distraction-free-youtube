const playButtonEle = document.getElementById("play-button");

playButtonEle.addEventListener("click", () => {
    const videoUrl = document.getElementById("video-url").value;

    const iframeEle = document.getElementById("yt-player");
    iframeEle.setAttribute("src", videoUrl);
});