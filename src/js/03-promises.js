import Notiflix from 'notiflix';

const delay = document.querySelector('input[name="delay"]')
const step = document.querySelector('input[name="step"]')
const amount = document.querySelector('input[name="amount"]')
const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);
let promiseCounter = 0;

function onSubmit (evt){
  evt.preventDefault();
  setTimeout(() => {
    intervalOfPromises(
    createPromise()
    .then(({ position, delay }) => {
      Notiflix.Notify.success('✅ Fulfilled promise ${position} in ${delay}ms');
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.warning('❌ Rejected promise ${position} in ${delay}ms');
    }),);
    console.log(`Timeout`);
  }, delay);
}

function intervalOfPromises(){
  timerId = setInterval(() => {
    if (amount === promiseCounter){
      return
    }
    console.log(`Interval`);
    promiseCounter +=1;
  }, step);
  return promiseCounter
}

function createPromise(position, delay) {
  return new Promise((resolve ,Reject) => {
    const shouldResolve = Math.random() > 0.3;
  
    if (shouldResolve) {
      Notiflix.Notify.success('✅ Fulfilled promise ${position} in ${delay}ms');
    } else {
      Notiflix.Notify.warning('❌ Rejected promise ${position} in ${delay}ms');
    }
  })
}


