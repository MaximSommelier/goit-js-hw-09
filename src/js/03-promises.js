import Notiflix from 'notiflix';

// let delay = document.querySelector('input[name="delay"]')
// let step = document.querySelector('input[name="step"]')
// let amount = document.querySelector('input[name="amount"]')
const form = document.querySelector('.form');

const delay = Number(form.delay.value);
const step = Number(form.step.value);
const amount = Number(form.amount.value);


form.addEventListener('submit', onSubmit);

function onSubmit (evt){
  evt.preventDefault();
  for (let i = 0; i < amount; i += 1) {
    createPromise(i, delay + 1 * step)
    .then(value => Notiflix.Notify.success(value))
    .catch(value => Notiflix.Notify.warning(value))
  }
}

// function createPromise(position, delay) {
  function createPromise(delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
    if (shouldResolve) {
      // resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      resolve(`✅ Fulfilled promise  ${delay}ms`);
    } else {
      // reject(`❌ Rejected promise ${position} in ${delay}ms`);
      reject(`❌ Rejected promise  ${delay}ms`);
    }
  }, delay);
});
}


