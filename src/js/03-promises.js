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
    intervalOfPromises();
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

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
  
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// createPromise()
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//     Notiflix.Notify.success('✅ Fulfilled promise ${position} in ${delay}ms');
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//     Notiflix.Notify.warning('❌ Rejected promise ${position} in ${delay}ms');
//   });
