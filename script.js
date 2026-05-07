console.log("Welcome to spotify");
let songIndex = 0;
let song = [
  {
    songName: "Warriyo -Mortals",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Warriyo -Mortals",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Warriyo -Mortals",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Warriyo -Mortals",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Warriyo -Mortals",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Warriyo -Mortals",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Warriyo -Mortals",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Warriyo -Mortals",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Warriyo -Mortals",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Warriyo -Mortals",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Warriyo -Mortals",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
];
let audioElement = new Audio("songs/1.mp3");
let masterPlay= document.getElementById("masterPlay");
let myProgressBar= document.getElementById("progress-bar");
let songName= document.getElementById('song-name')
let gif=document.getElementById('gif');
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
         masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
});
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
});
