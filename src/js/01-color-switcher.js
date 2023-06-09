const body = document.querySelector("body");
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);
let timerId;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  };

function onStartClick(evt){
    timerId = setInterval(()=>{
    body.style.background = getRandomHexColor();
},1000);
if (!timerId){
  startBtn.disabled =false;
}
startBtn.disabled = true;
};

function onStopClick(evt){
   clearInterval(timerId);
   startBtn.disabled =false;
};





