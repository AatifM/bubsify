const progress = document.querySelector("#progress");
const volume = document.querySelector("#volume");

const song = document.querySelector("#song");
const source = song.querySelector("source");

const ctrlIcon = document.querySelector("#play-pause");
const playDiv = document.querySelector("#play-pause-container");

const forwardBtn = document.querySelector("#forward");
const forwardDiv = document.querySelector("#forward-container");
const backwardBtn = document.querySelector("#backward");
const backwardDiv = document.querySelector("#backward-container");

const songImg = document.querySelector("#song-img");
const songTitle = document.querySelector("#song-title");

const lofiIcon = document.querySelector("#lofi-icon");

const lofiSongs = [
    "songs/lofi/01 - [no copyright music] 'In Dreamland ' background music.mp3",
    "songs/lofi/03 - [no copyright music] '2_00 AM' cute background music.mp3",
    "songs/lofi/04 - [no copyright music] 'Taiyaki' cute background music.mp3",
    "songs/lofi/05 - [no copyright music] 'Gameplay' cute background music.mp3",
    "songs/lofi/06 - [no copyright music] 'Purple' lofi background music.mp3",
    "songs/lofi/13 - [no copyright music] 'Loading' cute background music.mp3",
    "songs/lofi/18 - [no copyright music] 'Dreamy Mode' cute background music.mp3",
    "songs/lofi/23 - [no copyright music] 'One Thing' cute background music.mp3",
    "songs/lofi/38 - [no copyright music] 'On The Top' lofi background music.mp3",
    "songs/lofi/43 - [no copyright music] 'Feeling Cozy ' lofi background music.mp3",
    "songs/lofi/54 - [no copyright music] 'Tomato farm' lofi background music.mp3",
    "songs/lofi/55 - [no copyright music] 'Dango' lofi background music.mp3",
    "songs/lofi/56 - [no copyright music] 'Wonder' cute lofi background music.mp3",
    "songs/lofi/57 - [no copyright music] 'Breakfast' lofi background music.mp3",
    "songs/lofi/58 - [no copyright music] 'Lovely' lofi background music.mp3",
    "songs/lofi/59 - [no copyright music] 'little break' lofi background music.mp3",
    "songs/lofi/60 - Space Aquarium - Lofi Study & Relaxation Music for Deep Focus.mp3"
];

const lofiThumbnails = [
    "songs/lofi/01 - [no copyright music] 'In Dreamland ' background music.webp",
    "songs/lofi/03 - [no copyright music] '2_00 AM' cute background music.webp",
    "songs/lofi/04 - [no copyright music] 'Taiyaki' cute background music.webp",
    "songs/lofi/05 - [no copyright music] 'Gameplay' cute background music.webp",
    "songs/lofi/06 - [no copyright music] 'Purple' lofi background music.webp",
    "songs/lofi/13 - [no copyright music] 'Loading' cute background music.webp",
    "songs/lofi/18 - [no copyright music] 'Dreamy Mode' cute background music.webp",
    "songs/lofi/23 - [no copyright music] 'One Thing' cute background music.webp",
    "songs/lofi/38 - [no copyright music] 'On The Top' lofi background music.webp",
    "songs/lofi/43 - [no copyright music] 'Feeling Cozy ' lofi background music.webp",
    "songs/lofi/54 - [no copyright music] 'Tomato farm' lofi background music.webp",
    "songs/lofi/55 - [no copyright music] 'Dango' lofi background music.webp",
    "songs/lofi/56 - [no copyright music] 'Wonder' cute lofi background music.webp",
    "songs/lofi/57 - [no copyright music] 'Breakfast' lofi background music.webp",
    "songs/lofi/58 - [no copyright music] 'Lovely' lofi background music.webp",
    "songs/lofi/59 - [no copyright music] 'little break' lofi background music.webp",
    "songs/lofi/60 - Space Aquarium - Lofi Study & Relaxation Music for Deep Focus.webp"
];

let currentFolder;
let currentImgs;

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

lofiIcon.addEventListener("click", () => {
    song.src = lofiSongs[0];
    songImg.src = lofiThumbnails[0];
    songTitle.textContent = decodeURIComponent(song.src.split("/").pop());
    song.load();
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
    currentFolder = lofiSongs;
    currentImgs = lofiThumbnails;
});

.addEventListener("click", () => {
    song.src = 
    songImg.src = 
    songTitle.textContent = decodeURIComponent(song.src.split("/").pop());
    song.load();
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
    currentFolder = ;
    currentImgs = ;
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
    console.log(decodeURIComponent(currentSrc));
    const currentFile = decodeURIComponent(currentSrc.split("/").pop());
    const currentIndex = currentFolder.findIndex(path => path.includes(currentFile));
    let nextIndex;

    if (currentIndex === -1) {
        nextIndex = 0;
    } else {
        nextIndex = (currentIndex + 1) % currentFolder.length;
    }

    song.src = currentFolder[nextIndex];
    songImg.src = currentImgs[nextIndex]
    songTitle.textContent = decodeURIComponent(song.src.split("/").pop());

    song.load();
    song.play();

    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
});

backwardDiv.addEventListener("click", () => {
    const currentSrc = song.src;
    const currentFile = decodeURIComponent(currentSrc.split("/").pop());
    const currentIndex = currentFolder.findIndex(path => path.includes(currentFile));
    let nextIndex;

    if (currentIndex === -1) {
        return;
    } else {
        nextIndex = (currentIndex - 1 + currentFolder.length) % currentFolder.length;
    }

    song.src = currentFolder[nextIndex];
    songImg.src = currentImgs[nextIndex]
    songTitle.textContent = decodeURIComponent(song.src.split("/").pop());

    song.load();
    song.play();

    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
});