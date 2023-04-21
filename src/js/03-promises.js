import Notiflix from 'notiflix';

const delay = document.querySelector('input[name="delay"]')
const step = document.querySelector('input[name="step"]')
const amount = document.querySelector('input[name="amount"]')
const form = document.querySelector('.form');

// form.addEventListener('submit', createPromise);

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
