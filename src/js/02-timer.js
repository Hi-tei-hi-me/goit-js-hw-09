import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';

const refs = {
  inputRef: document.querySelector('#datetime-picker'),
  startBtnRef: document.querySelector('button[data-start]'),
  daysRef: document.querySelector('span[data-days]'),
  hoursRef: document.querySelector('span[data-hours]'),
  minutesRef: document.querySelector('span[data-minutes]'),
  secondsRef: document.querySelector('span[data-seconds]'),
  timerRef: document.querySelector('.timer'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates, dateStr, instance) {
    if (selectedDates[0] < instance.now) {
      Notiflix.Notify.warning('Please choose a date in the future');
      return;
    }
    refs.startBtnRef.disabled = false;
  },
};

const calendar = flatpickr(refs.inputRef, options);

refs.startBtnRef.addEventListener('click', () => {
  refs.startBtnRef.disabled = true;
  const intervalID = setInterval(() => {
    refs.timerRef.classList.remove('visually-hidden');
    const remainingTime = calendar.selectedDates[0].getTime() - Date.now();
    const formattedTime = convertMs(remainingTime);
    if (remainingTime < 0) {
      refs.timerRef.style.color = 'red';
      clearInterval(intervalID);
      return;
    }
    updateTime(refs.daysRef, formattedTime.days);
    updateTime(refs.hoursRef, formattedTime.hours);
    updateTime(refs.minutesRef, formattedTime.minutes);
    updateTime(refs.secondsRef, formattedTime.seconds);
  }, 1000);
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function updateTime(el, value) {
  el.textContent = addLeadingZero(value);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
