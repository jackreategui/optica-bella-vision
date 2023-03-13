//*Para quien revise mi codigo dira... "Pero que mierda es esto un if enorme jajaja, es lo que se me ocurrio y lo mas sencillo que pude hacer para poder sacar una calculadora de precios :c ya en un futuro lo mejorare"

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


formSelect.addEventListener('click', (e) => {
    e.preventDefault();
    const select = e.target.value;

    let precioResinaBL = 100;
    let precioResinaAr = 160;
    let precioResinaBlue = 220;
    let precioResinaSensitiveAr = 260;
    let precioResinaSensitiveBlue = 320;
    let precioResinaFotomate = 280;
    let precioResinaFotomateAr = 320;
    let precioResinaFotomateBlue = 360;
    let precioResinaTransition = 400;
    let precioResinaTransitionAr = 460;
    let precioResinaTransitionBlue = 520;
    // cristal
    let precioCristalBl = 100;
    let precioCristalAr = 160;
    let precioCristalPhg = 180;
    let precioCristalPhb = 180;
    let precioCristalPhgAr = 240;
    let precioCristalPhbAr = 240;

    if (select == 'clase1') {
        precioResinaBL += 40;
        precioResinaAr += 40;
        precioResinaBlue += 40;
        precioResinaSensitiveAr += 40;
        precioResinaSensitiveBlue += 40;
        precioResinaFotomate += 40;
        precioResinaFotomateAr += 40;
        precioResinaFotomateBlue += 40;
        precioResinaTransition += 40;
        precioResinaTransitionAr += 40;
        precioResinaTransitionBlue += 40;
        // cristal
        precioCristalBl += 40;
        precioCristalAr += 40;
        precioCristalPhg += 40;
        precioCristalPhb += 40;
        precioCristalPhgAr += 40;
        precioCristalPhbAr += 40;
    }

    resinaBL.textContent = "Resina BL: s/." + precioResinaBL;
    resinaAr.textContent = "Resina AR: s/." + precioResinaAr;
    resinaBlue.textContent = "Resina Blue Def.: s/." + precioResinaBlue;
    resinaSensitiveAr.textContent = "Resina Sensitive Ar: s/." + precioResinaSensitiveAr;
    resinaSensitiveBlue.textContent = "Resina Sensitive Blue Def.: s/." + precioResinaSensitiveBlue;
    resinaFotomate.textContent = "Resina Fotomate: s/." + precioResinaFotomate;
    resinaFotomateAr.textContent = "Resina Fotomate AR: s/." + precioResinaFotomateAr;
    resinaFotomateBlue.textContent = "Resina Fotomate Blue Def.: s/." + precioResinaFotomateBlue;
    resinaTransition.textContent = "Resina Transition: s/." + precioResinaTransition;
    resinaTransitionAr.textContent = "Resina Transition AR: s/." + precioResinaTransitionAr;
    resinaTransitionBlue.textContent = "Resina Transition Blue: s/." + precioResinaTransitionBlue;
    // cristal
    cristalBl.textContent = "Cristal BL: s/." + precioCristalBl;
    cristalAr.textContent = "Cristal AR: s/." + precioCristalAr;
    cristalPhg.textContent = "Cristal PHG: s/." + precioCristalPhg;
    cristalPhb.textContent = "Cristal PHB: s/." + precioCristalPhb;
    cristalPhgAr.textContent = "Cristal PHG AR: s/." + precioCristalPhgAr;
    cristalPhbAr.textContent = "Cristal PHB AR: s/." + precioCristalPhbAr;
})