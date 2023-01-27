const hamburgerIcon = document.querySelector('.nav_hamburger');
const navOverlay = document.querySelector('.nav_overlay');
const textArea = document.querySelector('.input_messege');

hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('nav_hamburger--open');

  navOverlay.classList.toggle('nav_overlay--show');
})

navOverlay.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target);
})

textArea.addEventListener("keyup", e => {
  textArea.style.height = "200px";
  let altura = e.target.scrollHeight;
  textArea.style.height = `${altura}px`;
})