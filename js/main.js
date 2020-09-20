let audio = new Audio();
let currentSong = 0;
let audioVolume = 0.5;
audio.src = music[currentSong].songLocation;
updateSongInfoDisplay();
timeDisplay();

//**********************CONFIGURING THE MUSIC PLAYER****************************
//what happens when the play button is clicked
playBtn.addEventListener('click', event =>{
   if(playBtn.classList.contains('fa-pause-circle')){
       playBtn.classList.remove('fa-pause-circle');
       audio.pause();
       playBtn.classList.add('fa-play-circle');
   }
   else{
    playBtn.classList.add('fa-pause-circle');
    audio.play();
    playBtn.classList.remove('fa-play-circle');
   }
})

//what happens when the skip button is clicked
skipButton.addEventListener('click', event =>{
    if(currentSong < music.length-1){
        audio.pause();
        currentSong++;
        audio.src = music[currentSong].songLocation;
        updateSongInfoDisplay();
        timeDisplay()
        audio.play();
        playBtn.classList.remove('fa-play-circle');
        playBtn.classList.add('fa-pause-circle');
    }
})

//what happens when the previous button is clicked
previousButton.addEventListener('click', event =>{
    if(currentSong > 0){
        audio.pause();
        currentSong--;
        audio.src = music[currentSong].songLocation;
        updateSongInfoDisplay();
        timeDisplay()
        audio.play();
        playBtn.classList.remove('fa-play-circle');
        playBtn.classList.add('fa-pause-circle');
    }
})

//what happens when one of the music cards is clicked
//**not yet implemented

//song progress settings
setInterval(function(){
    let currentSongTime = (audio.currentTime)
    let songDuration = (audio.duration)
    songProgress.style.width = `${(currentSongTime/songDuration)*100}%`;
},500);

//shuffle settings
shuffleButton.addEventListener('click', function(){
    shuffleButton.classList.toggle('active');
})

//repeat one button settings
loopOneButton.addEventListener('click', function(){
    loopOneButton.classList.toggle('active');
    if(loopOneButton.classList.contains('active')){
        setInterval(function(){
            if(audio.currentTime == audio.duration){
                audio.currentTime = 0;
                audio.play();
            }
        },50)
    }
})

//like song settings
likeButton.addEventListener('click', function(){
    console.log('You have clicked me!')
    likeButton.classList.toggle('active')
})

//continous playing
setInterval(function(){
    if(
        !loopOneButton.classList.contains('active') &&
        audio.currentTime == audio.duration &&
        currentSong < music.length-1
    )
    {
        currentSong++;
        audio.src = music[currentSong].songLocation;
        updateSongInfoDisplay();
        audio.play();
    }
},100);

//volume settings
let currentVolumeLevel = 0.4;
volumeLevel.style.width = `${((currentVolumeLevel/1)*100)}%`;

decrease.addEventListener('click', function(){
    if(currentVolumeLevel > 0.3){
        currentVolumeLevel-=0.1;
        volumeLevel.style.width = `${((currentVolumeLevel/1)*100)}%`;
        console.log(currentVolumeLevel-0.1);
    }
    else{
        currentVolumeLevel = 0;
    }
})
increase.addEventListener('click', function(){
    if(currentVolumeLevel < 0.8){
        currentVolumeLevel+=0.1;
        volumeLevel.style.width = `${((currentVolumeLevel/1)*100)}%`;
        console.log(currentVolumeLevel+0.1);
    }
    else{
        currentVolumeLevel = 1;
    }
})
