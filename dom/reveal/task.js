function revealOnScroll() {
  const revealElements = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;
  
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint && elementBottom > 0) {
      el.classList.add('reveal_active');
    } else {
      el.classList.remove('reveal_active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
