const progress = document.querySelector("#progress");
const song = document.querySelector("#song");
const ctrlIcon = document.querySelector("#play-pause");
const playDiv = document.querySelector("#play-pause-container");
const source = song.querySelector("source");
const forwardBtn = document.querySelector("#forward");
const forwardDiv = document.querySelector("#forward-container")
const backwardBtn = document.querySelector("#backward");
const backwardDiv = document.querySelector("#backward-container");
const mikuIcon = document.querySelector("#mikuIcon");
const caseIcon = document.querySelector("#caseIcon");

//This is gonna be really rough
const miku = [
    "songs/miku/[60fps Full] PoPiPo ぽっぴっぽー - Hatsune Miku 初音ミク DIVA Dreamy theater ドリーミーシアター English Romaji [TNf3GPizM58].mp3",
    "songs/miku/[60fps Full] カンタレラ Cantarella - Hatsune Miku KAITO 初音ミク カイト Project DIVA English lyrics Romaji PDA [H0EtICId6mI].mp3",
    "songs/miku/[60fps Full風] Magnet マグネット-Hatsune Miku Megurine Luka 初音ミク 巡音ルカ DIVA English lyrics romaji subtitles [vSnKX7kAgIc].mp3",
    "songs/miku/[60fps Full風] Sweet Devil - Hatsune Miku 初音ミク Project DIVA Arcade English lyrics Romaji subtitles [Gu0luN8SrIs].mp3",
    "songs/miku/[60fps Full風] The disappearance of Hatsune Miku -DEAD END-初音ミクの消失 DIVA Dreamy theater English Romaji [5qkTpJAhywg].mp3",
    "songs/miku/[60fps Full風]Butterfly on My(Your) Right Shoulder 右肩の蝶 -Kagamine Len Rin 鏡音レン リン DIVA English romaji [hyV4qGAPKac].mp3",
    "songs/miku/[60fps short] Clover Club - クローバークラブ Hatsune Miku 初音ミク Project DIVA Dreamy theater English Romaji [m_9pF4NpN6o].mp3",
    "songs/miku/[1080P Full] Weekender Girl ウィークエンダーガール - Hatsune Miku 初音ミク DIVA English lyrics Romaji subtitles [vpYkz5WU1Vg].mp3",
    "songs/miku/[1080P Full風] Romeo and Cinderella ロミオとシンデレラ -Hatsune Miku 初音ミク English lyrics romaji subtitles [naQjypGoOHY].mp3",
    "songs/miku/[1080P Full風] World is Mine ワールドイズマイン -Hatsune Miku 初音ミク Project DIVA English lyrics Romaji PDFT [NY__VTIUsiU].mp3",
    "songs/miku/[1080P Full風] 千本桜 Senbonzakura ＂One Thousand Cherry Trees＂- 初音ミク Hatsune Miku DIVA English Romaji [Mqps4anhz0Q].mp3",
    "songs/miku/[Hatsune Miku] AaAaAaAAaAaAAa あぁあぁあぁああぁあぁああぁ PV (English Subtitles) [59jHEoNSlA0].mp3",
    "songs/miku/[Hatsune Miku] Sharing The World by BIGHEAD feat.Hatsune Miku [MIKU EXPO] [GRc_Vz6kEjc].mp3",
    "songs/miku/GHPZ - Hatsune Miku [V3 Eng] - Glass Wall [MJQ Retune] [HPzDehcMa7g].mp3",
    "songs/miku/Hatsune Miku   Ievan Polkka Dance Comparison [DTSkygD1wR0].mp3",
    "songs/miku/Hatsune Miku Project Diva 2nd Opening Full [80mPRUHJ0kc].mp3",
    "songs/miku/Miku hatsune story rider (with lyrics) [QGhhs8xwxc8].mp3"
];

//Man these lists are ugly
const caseStudy = [
    "songs/caseStudy/ARE YOU OK？ [Bqh1krcUf6Q].mp3",
    "songs/caseStudy/COMPLEXITIES [bDDtP_03GM0].mp3",
    "songs/caseStudy/CYANIDE [Jnm3ukzmJe4].mp3",
    "songs/caseStudy/ENTROPY [CLx631jSEug].mp3",
    "songs/caseStudy/FRONTAL LOBE MUZIK (feat. Pharrell Williams) [GSpzscLeMuc].mp3",
    "songs/caseStudy/OPEN UP [XAP-fzjXR_A].mp3",
    "songs/caseStudy/RESTORE THE FEELING (feat. Sean Leon & Jacob Collier) [7CZmBMZclTY].mp3",
    "songs/caseStudy/SUPERPOSITION (feat. John Mayer) [LV_V4Rsd9eU].mp3",
    "songs/caseStudy/TOO DEEP TO TURN BACK [J5r3MDJGoaw].mp3"
];

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

mikuIcon.addEventListener("click", () => {
    song.src = miku[0];
    song.load();
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
});

caseIcon.addEventListener("click", () => {
    song.src = caseStudy[0];
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

forwardDiv.addEventListener("click", () => {
    if (song.src === "songs/Love You ⧸ Capchii feat. 初音ミク [i1umA0qoLa4].mp3") {
        return;
    }

    const currentSrc = song.src;
    let currentFolder = decodeURIComponent(currentSrc.split("/")[10]);
    if (currentFolder === "miku") {
        currentFolder = miku;
    } else if (currentFolder === "caseStudy") {
        currentFolder = caseStudy;
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
    song.load();
    song.play();

    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
});

backwardDiv.addEventListener("click", () => {
    if (song.src === "songs/Love You ⧸ Capchii feat. 初音ミク [i1umA0qoLa4].mp3") {
        return;
    }

    const currentSrc = song.src;
    let currentFolder = decodeURIComponent(currentSrc.split("/")[10]);
    if (currentFolder === "miku") {
        currentFolder = miku;
    } else if (currentFolder === "caseStudy") {
        currentFolder = caseStudy;
    }
    const currentFile = decodeURIComponent(currentSrc.split("/").pop());

    const currentIndex = currentFolder.findIndex(path => path.includes(currentFile));
    let nextIndex;

    if (currentIndex === -1) {
        return
    } else {
        nextIndex = (currentIndex - 1 + currentFolder.length) % currentFolder.length;
    }

    song.src = currentFolder[nextIndex];
    song.load();
    song.play();

    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
});