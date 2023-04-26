import Notiflix from 'notiflix';

// let delayEl = document.querySelector('input[name="delay"]')
// let stepEl = document.querySelector('input[name="step"]')
// let amountEl = document.querySelector('input[name="amount"]')
const form = document.querySelector('.form');

// let delay = Number(delayEl.value);
// const step = Number(stepEl.value);
// const amount = Number(amountEl.value);

const {delay, step, amount} = evt.target.elements;

// const delay = Number(form.delay.value);
// const step = Number(form.step.value);
// const amount = Number(form.amount.value);


form.addEventListener('submit', onSubmit);
 
function onSubmit (evt){
  evt.preventDefault();
  for (let i = 0; i < amount.value; i += 1) {
    createPromise(i + 1, delay)
    .then(({position, delay}) => {Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);})
    .catch(({position, delay}) => {Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);});
  }
 delay += step.value; 
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
    if (shouldResolve) {
      resolve({position, delay});
    } else {
      reject({position, delay});
    }
  }, delay);
});
}


