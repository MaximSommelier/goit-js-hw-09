import Notiflix from 'notiflix';

const delay = document.querySelector('input[name="delay"]')
const step = document.querySelector('input[name="step"]')
const amount = document.querySelector('input[name="amount"]')
const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit (evt){
  evt.preventDefault();
  for (let i = 1; i < amount; i += 1) {
    createPromise(i, delay)
    .then(value => Notiflix.Notify.success(value))
    .catch(value => Notiflix.Notify.warning(value))
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  }, delay);
});
}


