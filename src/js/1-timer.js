import flatpickr from 'flatpickr';
import iziToast from 'izitoast';
import 'flatpickr/dist/flatpickr.min.css';
import 'izitoast/dist/css/iziToast.min.css';

import errorIcon from '../img/error.svg';

const startBtn = document.querySelector('button[data-start]');
const dateInput = document.querySelector('input#datetime-picker');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

let userSelectedDate = null;
let userHasPicked = false;

startBtn.disabled = true;

flatpickr(dateInput, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onChange() {
    userHasPicked = true;
  },
  onClose(selectedDates) {
    if (!userHasPicked) return;

    const picked = selectedDates[0];
    if (!picked) {
      userSelectedDate = null;
      startBtn.disabled = true;
      return;
    }

    if (picked.getTime() > Date.now()) {
      userSelectedDate = picked;
      startBtn.disabled = false;
    } else {
      userSelectedDate = null;
      startBtn.disabled = true;
      iziToast.show({
        message: 'Please choose a date in the future',
        messageColor: '#fff',
        messageSize: '18',
        backgroundColor: '#ef4040',
        iconUrl: errorIcon,
        position: 'topRight',
        close: false,
        timeout: 3000,
      });
    }
  },
});

startBtn.addEventListener('click', () => {
  if (!userSelectedDate) return;

  startBtn.disabled = true;
  dateInput.disabled = true;

  updateTimer(userSelectedDate.getTime() - Date.now());

  const timerId = setInterval(() => {
    const difference = userSelectedDate.getTime() - Date.now();

    if (difference <= 0) {
      clearInterval(timerId);
      updateTimer(0);
      dateInput.disabled = false;
      return;
    }

    updateTimer(difference);
  }, 1000);
});

function addStartingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimer(ms) {
  const { days, hours, minutes, seconds } = convertMs(ms);
  daysEl.textContent = addStartingZero(days);
  hoursEl.textContent = addStartingZero(hours);
  minutesEl.textContent = addStartingZero(minutes);
  secondsEl.textContent = addStartingZero(seconds);
}
