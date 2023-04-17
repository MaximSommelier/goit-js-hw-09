const body = document.querySelector("body");
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  };

function onStartClick(evt){
    timerId = setInterval(()=>{
    body.style.background = getRandomHexColor();
},1000);
};

function onStopClick(evt){
   clearInterval(timerId)
};





