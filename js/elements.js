let songTitle = document.querySelector('.text-info p:nth-child(1)');
let songAlbum = document.querySelector('.album-info p:nth-child(1)');
let songArtist = document.querySelector('.text-info p:nth-child(2)');
let songAlbumInfo = document.querySelector('.album-info p:nth-child(2)');

//these are for the music player
let playBtn = document.querySelector('.music-player .player-controls .play i');
let skipButton = document.querySelector('.music-player .player-controls .skip');
let previousButton = document.querySelector('.music-player .player-controls .back');
let songProgress = document.querySelector('.music-player .player-controls .song-progress .progress');
let shuffleButton = document.querySelector('.music-player .player-controls .shuffle');
let loopOneButton = document.querySelector('.music-player .player-controls .repeat');
let volumeLevel = document.querySelector('.music-player .player-controls .volume-level .level');
let likeButton = document.querySelector('.music-player .player-controls .like');
let decrease = document.querySelector('.music-player .player-controls .decrease');
let increase = document.querySelector('.music-player .player-controls .increase');