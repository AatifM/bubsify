const sliders = document.querySelector(".sliders");
const progress = document.querySelector("#progress");
const volume = document.querySelector("#volume");

const song = document.querySelector("#song");
const source = song.querySelector("source");

const ctrlIcon = document.querySelector("#play-pause");
const playDiv = document.querySelector("#play-pause-container");

const controls = document.querySelector(".controls");
const forwardBtn = document.querySelector("#forward");
const forwardDiv = document.querySelector("#forward-container");
const backwardBtn = document.querySelector("#backward");
const backwardDiv = document.querySelector("#backward-container");

const info = document.querySelector(".info");
const songImg = document.querySelector("#song-img");
const songTitle = document.querySelector("#song-title");

const lofiIcon = document.querySelector("#lofi-icon");
const cityPopIcon = document.querySelector("#citypop-icon");
const classicalIcon = document.querySelector("#classical-icon");

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

const cityPopSongs = [
    "songs/citypop/＂ C R Y S T A L 宝 ＂ City Pop Beat Instrumental [Free].mp3",
    "songs/citypop/(FREE) City Pop Type Beat - Stars In The  City.mp3",
    "songs/citypop/[FREE BEAT] Kpop style House beat [DIVE INTO]  ⧸⧸ Prod by. Disko.mp3",
    "songs/citypop/[FREE BEAT] Retro, City Pop [Retro City] Type Beat Prod. by Disko.mp3",
    "songs/citypop/[No Copyright Music] retro city pop music _ Automatic Love.mp3",
    "songs/citypop/[royalty free music] bedroom beats vol. 2 (bandlab).mp3",
    "songs/citypop/[royalty free music] lo-fi hiphop (bandlab).mp3",
    "songs/citypop/[royalty free music] retro city pop (bandlab).mp3",
    "songs/citypop/[무료비트 Free Beat] City pop Beat ＂Lighting＂ - [LIGHTING instrumental].mp3",
    "songs/citypop/[무료비트 Free Beat] 차분하고 몽환적인 알앤비 - Pandora.mp3",
    "songs/citypop/Aries Beats - NU DISCO FUNK ｜ Funky 80s Slap Bass TalkBox Music (FORTNITE REMIX).mp3",
    "songs/citypop/City Lights (No Copyright Music) - Make Studio.mp3",
    "songs/citypop/Roller - POMO City Pop Type Beat ｜ Prod. Noden.mp3"
];

const cityPopThumbnails = [
    "songs/citypop/＂ C R Y S T A L 宝 ＂ City Pop Beat Instrumental [Free].webp",
    "songs/citypop/(FREE) City Pop Type Beat - Stars In The  City.webp",
    "songs/citypop/[FREE BEAT] Kpop style House beat [DIVE INTO]  ⧸⧸ Prod by. Disko.webp",
    "songs/citypop/[FREE BEAT] Retro, City Pop [Retro City] Type Beat Prod. by Disko.webp",
    "songs/citypop/[No Copyright Music] retro city pop music _ Automatic Love.webp",
    "songs/citypop/[royalty free music] bedroom beats vol. 2 (bandlab).webp",
    "songs/citypop/[royalty free music] lo-fi hiphop (bandlab).webp",
    "songs/citypop/[royalty free music] retro city pop (bandlab).webp",
    "songs/citypop/[무료비트 Free Beat] City pop Beat ＂Lighting＂ - [LIGHTING instrumental].webp",
    "songs/citypop/[무료비트 Free Beat] 차분하고 몽환적인 알앤비 - Pandora.webp",
    "songs/citypop/Aries Beats - NU DISCO FUNK ｜ Funky 80s Slap Bass TalkBox Music (FORTNITE REMIX).webp",
    "songs/citypop/City Lights (No Copyright Music) - Make Studio.webp",
    "songs/citypop/Roller - POMO City Pop Type Beat ｜ Prod. Noden.webp"
];

const classicalSongs = [
    "songs/classical/Also Sprach Zarathustra - Strauss [COPYRIGHT FREE].mp3",
    "songs/classical/Blue Danube - Strauss [COPYRIGHT FREE].mp3",
    "songs/classical/Cello Suite - Bach [COPYRIGHT FREE].mp3",
    "songs/classical/Love Theme - Tchaikovsky [COPYRIGHT FREE].mp3",
    "songs/classical/Ride of the Valkyries - Wagner [COPYRIGHT FREE].mp3",
    "songs/classical/Russian Dance - Tchaikovsky Nutcracker Suite [COPYRIGHT FREE].mp3",
    "songs/classical/The Flower Duet - Leo Delibes [COPYRIGHT FREE].mp3",
    "songs/classical/Winter - Vivaldi [COPYRIGHT FREE].mp3"
];

const classicalThumbnails = [
    "songs/classical/Also Sprach Zarathustra - Strauss [COPYRIGHT FREE].webp",
    "songs/classical/Blue Danube - Strauss [COPYRIGHT FREE].webp",
    "songs/classical/Cello Suite - Bach [COPYRIGHT FREE].webp",
    "songs/classical/Love Theme - Tchaikovsky [COPYRIGHT FREE].webp",
    "songs/classical/Ride of the Valkyries - Wagner [COPYRIGHT FREE].webp",
    "songs/classical/Russian Dance - Tchaikovsky Nutcracker Suite [COPYRIGHT FREE].webp",
    "songs/classical/The Flower Duet - Leo Delibes [COPYRIGHT FREE].webp",
    "songs/classical/Winter - Vivaldi [COPYRIGHT FREE].webp"
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
    controls.style.display = "flex";
    sliders.style.display = "flex";
    info.style.display = "block";
});

cityPopIcon.addEventListener("click", () => {
    song.src = cityPopSongs[0];
    songImg.src = cityPopThumbnails[0];
    songTitle.textContent = decodeURIComponent(song.src.split("/").pop());
    song.load();
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
    currentFolder = cityPopSongs;
    currentImgs = cityPopThumbnails;
    controls.style.display = "flex";
    sliders.style.display = "flex";
    info.style.display = "block";
});

classicalIcon.addEventListener("click", () => {
    song.src = classicalSongs[0];
    songImg.src = classicalThumbnails[0];
    songTitle.textContent = decodeURIComponent(song.src.split("/").pop());
    song.load();
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
    currentFolder = classicalSongs;
    currentImgs = classicalThumbnails;
    controls.style.display = "flex";
    sliders.style.display = "flex";
    info.style.display = "block";
});

song.addEventListener("timeupdate", () => {
    progress.value = song.currentTime;
});

progress.addEventListener("input", () => {
    song.currentTime = progress.value;
});

volume.addEventListener("input", () => {
    song.volume = volume.value;
});

forwardDiv.addEventListener("click", () => {
    const currentSrc = song.src;
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