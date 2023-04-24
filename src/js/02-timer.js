import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const dateTime = document.querySelector("#datetime-picker");
const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

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

class ReverseTimer  {
    constructor ({onTick}){
     this.inrevalId = null;
     this.isActive = false; 
     this.onTick = onTick;
    }

    convertMs(ms) {
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

    addLeadingZero(value) {
      return String(value).padStart(2, '0');
      };

    updateReverseTimer ({ days, hours, minutes, seconds }) {
      this.daysEl.textContent = `${days}`;
      this.hoursEl.textContent = `${hours}`;
      this.minutesEl.textContent = `${minutes}`;
      this.secondsEl.textContent = `${seconds}`;
      };

    start (){
    if (this.isActive){
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval (() =>{
     const currentTime = Date.now();
     const timeLeft = startTime - currentTime;
     updateReverseTimer(addLeadingZero(convertMs(timeLeft)));
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

  const timer = new ReverseTimer({
    onTick: updateReverseTimer});
  
    startBtn.addEventListener('click', () =>{
      timer.start();
      timer.stop();
    });









