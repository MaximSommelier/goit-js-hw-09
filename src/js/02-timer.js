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
    } else {
    startBtn.disabled = false;
    const timer = new ReverseTimer({ daysEl, hoursEl, minutesEl, secondsEl });
    }
  },
};

const datePicker = flatpickr(dateTime, options);
const startTime = datePicker.selectedDates[0].getTime();

startBtn.addEventListener('click', () =>{
  timer.start();
  timer.stop();
});

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
      daysEl.textContent = `${this.addLeadingZero(days)}`;
      hoursEl.textContent = `${this.addLeadingZero(hours)}`;
      minutesEl.textContent = `${this.addLeadingZero(minutes)}`;
      secondsEl.textContent = `${this.addLeadingZero(seconds)}`;
      };

    start (){
    if (this.isActive){
      return;
    }
    this.isActive = true;
    const startTime = datePicker.selectedDates[0].getTime();
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
  
    









