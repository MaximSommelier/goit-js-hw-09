import Notiflix from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);
 
function onSubmit (evt){
  const {delay, step, amount} = evt.target.elements;
  evt.preventDefault();
  let delayValue = Number(form.delay.value);
  const stepValue = Number(form.step.value);
  const amountValue = Number(form.amount.value);

  for (let i = 0; i < amountValue; i += 1) {
    createPromise(i + 1, delayValue)
    .then(({position, delay}) => Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`))
    .catch(({position, delay}) => Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`));
    delayValue += stepValue; 
  }
 form.reset();
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


