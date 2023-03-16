// cerrar menu cuando este abierto

window.addEventListener('scroll', () => {
  // cierra el menu cuando se hace scroll
  if (navOverlay.classList.contains('nav_overlay--show')) {
    closeMenu();
  };
})

navOverlay.addEventListener('click', () => {
  // Cierra el menu cuando se le da click
  closeMenu();
})

function closeMenu() {
  hamburgerIcon.classList.remove('nav_hamburger--open');

  navOverlay.classList.remove('nav_overlay--show');
};