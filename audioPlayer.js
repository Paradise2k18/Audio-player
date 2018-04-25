const MyAudioPlayer = new Audio();
const playlist = [];
playlist.push({
    src: "music/1.mp3",
    name: "1"

}, {
    src: "music/2.mp3",
    name: "2"
}, {
    src: "music/3.mp3",
    name: "3"
});
const playAudio = document.querySelector('#playAudio'),
    pauseAudio = document.querySelector('#pauseAudio'),
    nextSong = document.querySelector('#nextSong'),
    prevSong = document.querySelector('#prevSong'),
    volume = document.querySelector('#songVolume'),
    songTime = document.querySelector('#songTime'),
    SEC_INTO_MIN = 60,
    SINGLE_INTO_DECIMAL = 10;

let currentSong = playlist[0].src;
MyAudioPlayer.src = currentSong;
MyAudioPlayer.autoplay = false;
let arrayNumber = 0;

playAudio.addEventListener('click', () => MyAudioPlayer.play());

pauseAudio.addEventListener('click', () => MyAudioPlayer.pause());

nextSong.addEventListener('click', function () {
    if (arrayNumber < playlist.length - 1) {
        arrayNumber++;
        MyAudioPlayer.src = playlist[arrayNumber].src;
        MyAudioPlayer.play();
    } else {
        arrayNumber = 0;
        MyAudioPlayer.src = playlist[arrayNumber].src;
        MyAudioPlayer.play();
        alert("playlist started from the beginning");
    }
})

prevSong.addEventListener('click', function () {
    if (arrayNumber <= playlist.length - 1 && arrayNumber > 0) {
        arrayNumber--;
        MyAudioPlayer.src = playlist[arrayNumber].src;
        MyAudioPlayer.play();
    } else {
        arrayNumber = playlist.length - 1;
        MyAudioPlayer.src = playlist[arrayNumber].src;
        MyAudioPlayer.play();
        alert("Playing last song from the playlist")
    }
})

songPlaylist.onchange = function () {
    arrayNumber = this.value;
    MyAudioPlayer.src = playlist[arrayNumber].src;
    MyAudioPlayer.play();
}

volume.addEventListener('change', () => MyAudioPlayer.volume = volume.value);

MyAudioPlayer.addEventListener('timeupdate', function () {
    let sec = parseInt(MyAudioPlayer.currentTime % SEC_INTO_MIN);
    let min = parseInt((MyAudioPlayer.currentTime / SEC_INTO_MIN) % SEC_INTO_MIN);
    if (sec < SINGLE_INTO_DECIMAL) {
        sec = '0' + sec;
    }
    songTime.innerHTML = min + ':' + sec;
});