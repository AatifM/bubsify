let progress = document.querySelector("#progress");
let song = document.querySelector("#song");
let ctrlIcon = document.querySelector("#play-pause");
let playDiv = document.querySelector("#play-pause-container");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

playDiv.addEventListener("click", () => {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
});

if (song.play) {
    setInterval(() => {progress.value = song.currentTime}, 500);
}

song.addEventListener("timeupdate", () => {
    progress.value = song.currentTime;
});

progress.addEventListener("input", () => {
    song.currentTime = progress.value;
});