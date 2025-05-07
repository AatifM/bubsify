const progress = document.querySelector("#progress");
const volume = document.querySelector("#volume");
const song = document.querySelector("#song");
const ctrlIcon = document.querySelector("#play-pause");
const playDiv = document.querySelector("#play-pause-container");
const source = song.querySelector("source");
const forwardBtn = document.querySelector("#forward");
const forwardDiv = document.querySelector("#forward-container")
const backwardBtn = document.querySelector("#backward");
const backwardDiv = document.querySelector("#backward-container");
const songImg = document.querySelector("#song-img");
const songTitle = document.querySelector("#song-title");

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

.addEventListener("click", () => {
    song.src = 
    songImg.src = 
    //songTitle.textContent = decodeURIComponent(song.src.split("/").pop());
    song.load();
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
});

.addEventListener("click", () => {
    song.src = 
    songImg.src = 
    //songTitle.textContent = decodeURIComponent(song.src.split("/").pop());
    song.load();
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
});

song.addEventListener("timeupdate", () => {
    progress.value = song.currentTime;
});

progress.addEventListener("input", () => {
    song.currentTime = progress.value;
});

volume.addEventListener("input", (e) => {
    song.volume = volume.value;
});

forwardDiv.addEventListener("click", () => {
    const currentSrc = song.src;
    console.log(currentSrc);
    let currentFolder = decodeURIComponent(currentSrc.split("/")[10]);
    let currentImgs;
    if (currentFolder === "") {
        currentFolder = 
        currentImgs = 
    } else if (currentFolder === "") {
        currentFolder = 
        currentImgs = 
    }
    const currentFile = decodeURIComponent(currentSrc.split("/").pop());

    const currentIndex = currentFolder.findIndex(path => path.includes(currentFile));
    let nextIndex;

    if (currentIndex === -1) {
        nextIndex = 0;
    } else {
        nextIndex = (currentIndex + 1) % currentFolder.length;
    }

    song.src = currentFolder[nextIndex];
    songTitle.textContent = decodeURIComponent(song.src.split("/").pop());
    if (currentImgs === ) {songImg.src = currentImgs[0];}
    else {songImg.src = currentImgs[nextIndex];}
    song.load();
    song.play();

    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
});

backwardDiv.addEventListener("click", () => {
    const currentSrc = song.src;
    let currentFolder = decodeURIComponent(currentSrc.split("/")[10]);
    let currentImgs;
    if (currentFolder === "") {
        currentFolder = 
        currentImgs = 
    } else if (currentFolder === "") {
        currentFolder = 
        currentImgs = 
    }
    const currentFile = decodeURIComponent(currentSrc.split("/").pop());

    const currentIndex = currentFolder.findIndex(path => path.includes(currentFile));
    let nextIndex;

    if (currentIndex === -1) {
        return;
    } else {
        nextIndex = (currentIndex - 1 + currentFolder.length) % currentFolder.length;
    }

    song.src = currentFolder[nextIndex];
    songTitle.textContent = decodeURIComponent(song.src.split("/").pop());
    if (currentImgs === ) {songImg.src = currentImgs[0];} 
    else {songImg.src = currentImgs[nextIndex];}
    song.load();
    song.play();

    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
});