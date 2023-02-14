const hamburgerIcon = document.querySelector('.nav_hamburger');
const navOverlay = document.querySelector('.nav_overlay');
const textArea = document.querySelector('.input_messege');
const formulario = document.querySelector('#form');

hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('nav_hamburger--open');

  navOverlay.classList.toggle('nav_overlay--show');
})

// hacer mas grande el textarea cuando sobrepasa su altura

textArea.addEventListener("keyup", e => {
  textArea.style.height = "200px";
  let altura = e.target.scrollHeight;
  textArea.style.height = `${altura}px`;
})

// formulario

formulario.addEventListener('submit', handleSubmit)

async function handleSubmit(event){
  event.preventDefault()
  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    header: {
      'Accept': 'application/json'
    }
  })
  if (response.ok) {
    this.reset()
    alert('Gracias por contactarme');
  };
}