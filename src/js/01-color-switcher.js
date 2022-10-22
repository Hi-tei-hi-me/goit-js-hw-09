const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

class ColorChanger {
  constructor() {
    this.intervalID = null;
  }

  start() {
    changeColor();
    refs.stopBtn.disabled = false;
    refs.startBtn.disabled = true;
    this.intervalID = setInterval(() => {
      changeColor();
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalID);
    refs.stopBtn.disabled = true;
    refs.startBtn.disabled = false;
  }
}

const colorChanger = new ColorChanger();

refs.startBtn.addEventListener('click', () => {
  colorChanger.start();
});

refs.stopBtn.addEventListener('click', () => {
  colorChanger.stop();
});

function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
