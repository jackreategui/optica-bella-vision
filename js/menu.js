const hamburgerIcon = document.querySelector('.nav_hamburger');
const navOverlay = document.querySelector('.nav_overlay');

hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('nav_hamburger--open');

  navOverlay.classList.toggle('nav_overlay--show');
})

navOverlay.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target);
})