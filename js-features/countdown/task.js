let time = 59;

const timerElement = document.getElementById('timer');

const timerId = setInterval(() => {
  if (time <= 0) {
    clearInterval(timerId);
    alert('Вы выиграли в конкурсе');
  } else {
    timerElement.textContent = time;
    time--;
  }
}, 1000);