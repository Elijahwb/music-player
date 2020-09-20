function updateSongInfoDisplay(){
    songTitle.innerText = music[currentSong].songTitle;
    songArtist.innerText = music[currentSong].artist;
    songAlbum.innerText = music[currentSong].album.name;
    songAlbumInfo.innerText = `${music[currentSong].album.albumSongs} Songs | ${music[currentSong].album.artists}`;
}


//current time  and duration settings
function timeDisplay(){
    setTimeout(function(){
        document.querySelector('.duration').innerText = `${(audio.duration/60).toFixed(0)}:00`;
    },300)
    let currTime = document.querySelector('.current-time');
    setInterval(function(){
        if(audio.currentTime < 60){
            currTime.innerText = `0${(audio.currentTime/60).toFixed(0)}:${audio.currentTime.toFixed(0)}`
        }
        else if(audio.currentTime < 120){
            currTime.innerText = `0${(audio.currentTime/60).toFixed(0)}:${(audio.currentTime.toFixed(0) - 60)}`
        }
        else if(audio.currentTime < 180){
            currTime.innerText = `0${(audio.currentTime/60).toFixed(0)}:${(audio.currentTime.toFixed(0) - 120)}`
        }
        else if(audio.currentTime < 240){
            currTime.innerText = `0${(audio.currentTime/60).toFixed(0)}:${(audio.currentTime.toFixed(0) - 180)}`
        }
        else{
            
        }
    },100)
}
