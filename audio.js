//Setup the audio files
var hitSound = new Howl({
  src: ['assets/hit1.mp3'],
   volume: 0.1,
preload: true,
  });

var winSound = new Howl({
  src: ['assets/cardwin.mp3'],

   volume: 0.1,
   preload: true,
});



// create the playback and stop


function PlayHitSound() {  
    
    hitSound.play()
    console.log("play")
};
hitSound.on('end', function(){
  hitSound.stop();
  console.log("stop")
});


function PlayWinSound() {  
    
    winSound.play()
    console.log("play")
};
winSound.on('end', function(){
  winSound.stop();
  console.log("stop")
});
