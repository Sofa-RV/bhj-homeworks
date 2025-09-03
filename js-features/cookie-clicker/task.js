const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let clicks = 0;
let isSmall = false;

cookie.addEventListener('click', () => {
  clicks++;
  counter.textContent = clicks;

  if (isSmall) {
    cookie.style.width = '200px';
    cookie.style.height = 'auto';
  } else {
    cookie.style.width = '180px';
    cookie.style.height = 'auto';
  }
  
  isSmall = !isSmall;
});