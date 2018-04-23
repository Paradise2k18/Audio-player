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

var currentSong = playlist[0].src;
MyAudioPlayer.src = currentSong;
MyAudioPlayer.autoplay = false;
var arrayNumber = 0;

var playAudio = document.getElementById('playAudio');
playAudio.addEventListener('click', function () {
    MyAudioPlayer.play();

});

var pauseAudio = document.getElementById('pauseAudio');
pauseAudio.addEventListener('click', function () {
    MyAudioPlayer.pause();
});

var nextSong = document.getElementById('nextSong');

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

var prevSong = document.getElementById('prevSong');
prevSong.addEventListener('click', function () {
    if (arrayNumber <= playlist.length - 1 && arrayNumber > 0) {
        arrayNumber--;
        MyAudioPlayer.src = playlist[arrayNumber].src;
        MyAudioPlayer.play();
    } else {
        arrayNumber = playlist.length - 1;
        MyAudioPlayer.src = playlist[arrayNumber].src;
        MyAudioPlayer.play();
        alert("playing last song from the playlist")
    }
})

songPlaylist.onchange = function () {
    arrayNumber = this.value;
    MyAudioPlayer.src = playlist[arrayNumber].src;
    MyAudioPlayer.play();
}

var volume = document.getElementById('songVolume');
volume.addEventListener('change', function () {
    MyAudioPlayer.volume = volume.value;
});

var songTime = document.getElementById('songTime');
MyAudioPlayer.addEventListener('timeupdate', function () {
    var sec = parseInt(MyAudioPlayer.currentTime % 60);
    var min = parseInt((MyAudioPlayer.currentTime / 60) % 60);
    if (sec < 10) {
        sec = '0' + sec;
    }
    songTime.innerHTML = min + ':' + sec;
});