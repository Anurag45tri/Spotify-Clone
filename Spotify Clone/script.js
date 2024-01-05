console.log("Welcome to Spotify");

//Initialize the variable
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "DVRST", filePath: "1.mp3", coverPath: "1.jpg"},
    {songName: "DVRST", filePath: "2.mp3", coverPath: "2.jpg"},
    {songName: "DVRST", filePath: "3.mp3", coverPath: "3.jpg"},
    {songName: "DVRST", filePath: "4.mp3", coverPath: "4.jpg"},
    {songName: "DVRST", filePath: "5.mp3", coverPath: "5.jpg"},
    {songName: "DVRST", filePath: "6.mp3", coverPath: "6.jpg"},
    {songName: "DVRST", filePath: "7.mp3", coverPath: "7.jpg"},
    {songName: "DVRST", filePath: "7.mp3", coverPath: "3.jpg"},

]
songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.target.Classlist.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e) =>{
        makeAllPlays();
        e.target.Classlist.remove('fa-play-circle');
        e.target.Classlist.add('fa-pause-circle');

    })

})
