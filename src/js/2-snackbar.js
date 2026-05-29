import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import successIcon from '../img/success.svg';
import errorIcon from '../img/error.svg';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  })
    .then(delay => {
      iziToast.show({
        message: `Fulfilled promise in ${delay}ms`,
        messageColor: '#fff',
        messageSize: '18',
        backgroundColor: '#59A10D',
        iconUrl: successIcon,
        position: 'topRight',
        close: false,
        timeout: 3000,
      });
    })
    .catch(delay => {
      iziToast.show({
        message: `Rejected promise in ${delay}ms`,
        messageColor: '#fff',
        messageSize: '18',
        backgroundColor: '#EF4040',
        iconUrl: errorIcon,
        position: 'topRight',
        close: false,
        timeout: 3000,
      });
    });

  form.reset();
});
