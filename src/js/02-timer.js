import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const dateTime = document.querySelector("#datetime-picker");
const startBtn = document.querySelector('button[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0].getTime());

    if (selectedDates[0].getTime() <= Date.now()){
      startBtn.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    }
    startBtn.disabled = false;
  },
};

const datePicker = flatpickr(dateTime, options);
const startTime = datePicker.selectedDates[0].getTime();

function updateReverseTimer ({ days, hours, minutes, seconds }) {
    days.textContent = `${days}`;
    hours.textContent = `${hours}`;
    minutes.textContent = `${minutes}`;
    seconds.textContent = `${seconds}`;
  };
  
  function addLeadingZero(value) {
  return String(value).padStart(2, '0');
  };
  
  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  };
        
class ReverseTimer  {
    constructor ({onTick}){
     this.inrevalId = null;
     this.isActive = false; 
     this.onTick = onTick;
    }

    start (){
    if (this.isActive){
      return;
    }
    this.isActive = true;
    this.inrevalId = setInterval (() =>{
     const currentTime = Date.now();
     const timeLeft = startTime - currentTime;
     const { days, hours, minutes, seconds } = addLeadingZero(convertMs(timeLeft));
     updateReverseTimer({ days, hours, minutes, seconds });
      },1000);
    }

    stop (){
      if(this.currentTime === this.startTime){
        clearInterval(this.inrevalId);
      this.isActive = false;
      updateReverseTimer(0);
      }
      return;
    }
  };

  startBtn.addEventListener('click', () =>{
    timer.start();
    timer.stop();
  });

  
const timer = new ReverseTimer({
  onTick: updateReverseTimer});








