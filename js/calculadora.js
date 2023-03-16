const formSelect = document.querySelector('#select');
// Resina
const resinaBL = document.querySelector('#resinaBL');
const resinaAr = document.querySelector('#resinaAr');
const resinaBlue = document.querySelector('#resinaBlue');
const resinaSensitiveAr = document.querySelector('#resinaSensitiveAr');
const resinaSensitiveBlue = document.querySelector('#resinaSensitiveBlue');
const resinaFotomate = document.querySelector('#resinaFotomate');
const resinaFotomateAr = document.querySelector('#resinaFotomateAr');
const resinaFotomateBlue = document.querySelector('#resinaFotomateBlue');
const resinaTransition = document.querySelector('#resinaTransition');
const resinaTransitionAr = document.querySelector('#resinaTransitionAr');
const resinaTransitionBlue = document.querySelector('#resinaTransitionBlue');
// cristal
const cristalBl = document.querySelector('#cristalBl');
const cristalAr = document.querySelector('#cristalAr');
const cristalPhg = document.querySelector('#cristalPhg');
const cristalPhb = document.querySelector('#cristalPhb');
const cristalPhgAr = document.querySelector('#cristalPhgAr');
const cristalPhbAr = document.querySelector('#cristalPhbAr');

const precio = document.querySelector('#precio');


formSelect.addEventListener('click', (e) => {
    e.preventDefault();
    const select = e.target.value;

    let precioFinal = 0;

    if (select == 'clase0') {
        precioFinal += 100;
        console.log('hola');
    }

    precio.textContent = "Precio: s/." + precioFinal;
})