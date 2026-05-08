
let songIndex = 0;
let song = [
  {
    songName: "Warriyo -Mortals",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Warriyo -Mortals",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Warriyo -Mortals",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Warriyo -Mortals",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Warriyo -Mortals",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Warriyo -Mortals",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Warriyo -Mortals",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Warriyo -Mortals",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Warriyo -Mortals",
    filePath: "songs/9.mp3",
    coverPath: "covers/9.jpg",
  },
];
let songItems=Array.from(document.getElementsByClassName('song'));
songItems.forEach((element,i) => {
  console.log(element,i);
  element.getElementsByTagName('img')[0].src=song[i].coverPath;
  element.getElementsByClassName('song-name')[0].innerText =song[i].songName;
});

let audioElement = new Audio("songs/1.mp3");
let masterPlay= document.getElementById("masterPlay");
let forwardPlay= document.getElementById("forwardPlay");
let backwardPlay = document.getElementById("backwardPlay");
let myProgressBar= document.getElementById("progress-bar");
let songName= document.getElementById('song-name');
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
backwardPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        gif.style.opacity=1;
    }
});
forwardPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
      
        gif.style.opacity=1;
    }
});
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt(audioElement.currentTime/audioElement.duration*100);
    myProgressBar.value = progress;
});
myProgressBar.addEventListener('change',()=>{
audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});

let makeAllPlays = () => {
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
  });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
  element.addEventListener('click', (e) => {
    makeAllPlays();
    index=parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.currentTime=0;
    audioElement.src= `songs/${index}.mp3`;
    audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  });
});