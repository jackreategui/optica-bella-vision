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
    } else if (select == 'clase2') {
        precioResinaBL += 80;
        precioResinaAr += 80;
        precioResinaBlue += 80;
        precioResinaSensitiveAr += 80;
        precioResinaSensitiveBlue += 80;
        precioResinaFotomate += 80;
        precioResinaFotomateAr += 80;
        precioResinaFotomateBlue += 80;
        precioResinaTransition += 80;
        precioResinaTransitionAr += 80;
        precioResinaTransitionBlue += 80;
        // cristal
        precioCristalBl += 80;
        precioCristalAr += 80;
        precioCristalPhg += 80;
        precioCristalPhb += 80;
        precioCristalPhgAr += 80;
        precioCristalPhbAr += 80;
    } else if (select == 'clase3') {
        precioResinaBL += 120;
        precioResinaAr += 120;
        precioResinaBlue += 120;
        precioResinaSensitiveAr += 120;
        precioResinaSensitiveBlue += 120;
        precioResinaFotomate += 120;
        precioResinaFotomateAr += 120;
        precioResinaFotomateBlue += 120;
        precioResinaTransition += 120;
        precioResinaTransitionAr += 120;
        precioResinaTransitionBlue += 120;
        // cristal
        precioCristalBl += 120;
        precioCristalAr += 120;
        precioCristalPhg += 120;
        precioCristalPhb += 120;
        precioCristalPhgAr += 120;
        precioCristalPhbAr += 120;
    } else if (select == 'clase4') {
        precioResinaBL += 160;
        precioResinaAr += 160;
        precioResinaBlue += 160;
        precioResinaSensitiveAr += 160;
        precioResinaSensitiveBlue += 160;
        precioResinaFotomate += 160;
        precioResinaFotomateAr += 160;
        precioResinaFotomateBlue += 160;
        precioResinaTransition += 160;
        precioResinaTransitionAr += 160;
        precioResinaTransitionBlue += 160;
        // cristal
        precioCristalBl += 160;
        precioCristalAr += 160;
        precioCristalPhg += 160;
        precioCristalPhb += 160;
        precioCristalPhgAr += 160;
        precioCristalPhbAr += 160;
    } else if (select == 'clase5') {
        precioResinaBL += 200;
        precioResinaAr += 200;
        precioResinaBlue += 200;
        precioResinaSensitiveAr += 200;
        precioResinaSensitiveBlue += 200;
        precioResinaFotomate += 200;
        precioResinaFotomateAr += 200;
        precioResinaFotomateBlue += 200;
        precioResinaTransition += 200;
        precioResinaTransitionAr += 200;
        precioResinaTransitionBlue += 200;
        // cristal
        precioCristalBl += 200;
        precioCristalAr += 200;
        precioCristalPhg += 200;
        precioCristalPhb += 200;
        precioCristalPhgAr += 200;
        precioCristalPhbAr += 200;
    } else if (select == 'clase6') {
        precioResinaBL += 240;
        precioResinaAr += 240;
        precioResinaBlue += 240;
        precioResinaSensitiveAr += 240;
        precioResinaSensitiveBlue += 240;
        precioResinaFotomate += 240;
        precioResinaFotomateAr += 240;
        precioResinaFotomateBlue += 240;
        precioResinaTransition += 240;
        precioResinaTransitionAr += 240;
        precioResinaTransitionBlue += 240;
        // cristal
        precioCristalBl += 240;
        precioCristalAr += 240;
        precioCristalPhg += 240;
        precioCristalPhb += 240;
        precioCristalPhgAr += 240;
        precioCristalPhbAr += 240;
    } else if (select == 'clase7') {
        precioResinaBL += 280;
        precioResinaAr += 280;
        precioResinaBlue += 280;
        precioResinaSensitiveAr += 280;
        precioResinaSensitiveBlue += 280;
        precioResinaFotomate += 280;
        precioResinaFotomateAr += 280;
        precioResinaFotomateBlue += 280;
        precioResinaTransition += 280;
        precioResinaTransitionAr += 280;
        precioResinaTransitionBlue += 280;
        // cristal
        precioCristalBl += 280;
        precioCristalAr += 280;
        precioCristalPhg += 280;
        precioCristalPhb += 280;
        precioCristalPhgAr += 280;
        precioCristalPhbAr += 280;
    } else if (select == 'clase8') {
        precioResinaBL += 320;
        precioResinaAr += 320;
        precioResinaBlue += 320;
        precioResinaSensitiveAr += 320;
        precioResinaSensitiveBlue += 320;
        precioResinaFotomate += 320;
        precioResinaFotomateAr += 320;
        precioResinaFotomateBlue += 320;
        precioResinaTransition += 320;
        precioResinaTransitionAr += 320;
        precioResinaTransitionBlue += 320;
        // cristal
        precioCristalBl += 320;
        precioCristalAr += 320;
        precioCristalPhg += 320;
        precioCristalPhb += 320;
        precioCristalPhgAr += 320;
        precioCristalPhbAr += 320;
    } else if (select == 'clase9') {
        precioResinaBL += 360;
        precioResinaAr += 360;
        precioResinaBlue += 360;
        precioResinaSensitiveAr += 360;
        precioResinaSensitiveBlue += 360;
        precioResinaFotomate += 360;
        precioResinaFotomateAr += 360;
        precioResinaFotomateBlue += 360;
        precioResinaTransition += 360;
        precioResinaTransitionAr += 360;
        precioResinaTransitionBlue += 360;
        // cristal
        precioCristalBl += 360;
        precioCristalAr += 360;
        precioCristalPhg += 360;
        precioCristalPhb += 360;
        precioCristalPhgAr += 360;
        precioCristalPhbAr += 360;
    } else if (select == 'clase10') {
        precioResinaBL += 400;
        precioResinaAr += 400;
        precioResinaBlue += 400;
        precioResinaSensitiveAr += 400;
        precioResinaSensitiveBlue += 400;
        precioResinaFotomate += 400;
        precioResinaFotomateAr += 400;
        precioResinaFotomateBlue += 400;
        precioResinaTransition += 400;
        precioResinaTransitionAr += 400;
        precioResinaTransitionBlue += 400;
        // cristal
        precioCristalBl += 400;
        precioCristalAr += 400;
        precioCristalPhg += 400;
        precioCristalPhb += 400;
        precioCristalPhgAr += 400;
        precioCristalPhbAr += 400;
    } else if (select == 'clase11') {
        precioResinaBL += 440;
        precioResinaAr += 440;
        precioResinaBlue += 440;
        precioResinaSensitiveAr += 440;
        precioResinaSensitiveBlue += 440;
        precioResinaFotomate += 440;
        precioResinaFotomateAr += 440;
        precioResinaFotomateBlue += 440;
        precioResinaTransition += 440;
        precioResinaTransitionAr += 440;
        precioResinaTransitionBlue += 440;
        // cristal
        precioCristalBl += 440;
        precioCristalAr += 440;
        precioCristalPhg += 440;
        precioCristalPhb += 440;
        precioCristalPhgAr += 440;
        precioCristalPhbAr += 440;
    } else if (select == 'clase12') {
        precioResinaBL += 480;
        precioResinaAr += 480;
        precioResinaBlue += 480;
        precioResinaSensitiveAr += 480;
        precioResinaSensitiveBlue += 480;
        precioResinaFotomate += 480;
        precioResinaFotomateAr += 480;
        precioResinaFotomateBlue += 480;
        precioResinaTransition += 480;
        precioResinaTransitionAr += 480;
        precioResinaTransitionBlue += 480;
        // cristal
        precioCristalBl += 480;
        precioCristalAr += 480;
        precioCristalPhg += 480;
        precioCristalPhb += 480;
        precioCristalPhgAr += 480;
        precioCristalPhbAr += 480;
    } else if (select == 'clase13') {
        precioResinaBL += 520;
        precioResinaAr += 520;
        precioResinaBlue += 520;
        precioResinaSensitiveAr += 520;
        precioResinaSensitiveBlue += 520;
        precioResinaFotomate += 520;
        precioResinaFotomateAr += 520;
        precioResinaFotomateBlue += 520;
        precioResinaTransition += 520;
        precioResinaTransitionAr += 520;
        precioResinaTransitionBlue += 520;
        // cristal
        precioCristalBl += 520;
        precioCristalAr += 520;
        precioCristalPhg += 520;
        precioCristalPhb += 520;
        precioCristalPhgAr += 520;
        precioCristalPhbAr += 520;
    } else if (select == 'clase14') {
        precioResinaBL += 560;
        precioResinaAr += 560;
        precioResinaBlue += 560;
        precioResinaSensitiveAr += 560;
        precioResinaSensitiveBlue += 560;
        precioResinaFotomate += 560;
        precioResinaFotomateAr += 560;
        precioResinaFotomateBlue += 560;
        precioResinaTransition += 560;
        precioResinaTransitionAr += 560;
        precioResinaTransitionBlue += 560;
        // cristal
        precioCristalBl += 560;
        precioCristalAr += 560;
        precioCristalPhg += 560;
        precioCristalPhb += 560;
        precioCristalPhgAr += 560;
        precioCristalPhbAr += 560;
    } else if (select == 'clase15') {
        precioResinaBL += 600;
        precioResinaAr += 600;
        precioResinaBlue += 600;
        precioResinaSensitiveAr += 600;
        precioResinaSensitiveBlue += 600;
        precioResinaFotomate += 600;
        precioResinaFotomateAr += 600;
        precioResinaFotomateBlue += 600;
        precioResinaTransition += 600;
        precioResinaTransitionAr += 600;
        precioResinaTransitionBlue += 600;
        // cristal
        precioCristalBl += 600;
        precioCristalAr += 600;
        precioCristalPhg += 600;
        precioCristalPhb += 600;
        precioCristalPhgAr += 600;
        precioCristalPhbAr += 600;
    } else if (select == 'clase16') {
        precioResinaBL += 640;
        precioResinaAr += 640;
        precioResinaBlue += 640;
        precioResinaSensitiveAr += 640;
        precioResinaSensitiveBlue += 640;
        precioResinaFotomate += 640;
        precioResinaFotomateAr += 640;
        precioResinaFotomateBlue += 640;
        precioResinaTransition += 640;
        precioResinaTransitionAr += 640;
        precioResinaTransitionBlue += 640;
        // cristal
        precioCristalBl += 640;
        precioCristalAr += 640;
        precioCristalPhg += 640;
        precioCristalPhb += 640;
        precioCristalPhgAr += 640;
        precioCristalPhbAr += 640;
    } else if (select == 'clase17') {
        precioResinaBL += 680;
        precioResinaAr += 680;
        precioResinaBlue += 680;
        precioResinaSensitiveAr += 680;
        precioResinaSensitiveBlue += 680;
        precioResinaFotomate += 680;
        precioResinaFotomateAr += 680;
        precioResinaFotomateBlue += 680;
        precioResinaTransition += 680;
        precioResinaTransitionAr += 680;
        precioResinaTransitionBlue += 680;
        // cristal
        precioCristalBl += 680;
        precioCristalAr += 680;
        precioCristalPhg += 680;
        precioCristalPhb += 680;
        precioCristalPhgAr += 680;
        precioCristalPhbAr += 680;
    } else if (select == 'clase18') {
        precioResinaBL += 720;
        precioResinaAr += 720;
        precioResinaBlue += 720;
        precioResinaSensitiveAr += 720;
        precioResinaSensitiveBlue += 720;
        precioResinaFotomate += 720;
        precioResinaFotomateAr += 720;
        precioResinaFotomateBlue += 720;
        precioResinaTransition += 720;
        precioResinaTransitionAr += 720;
        precioResinaTransitionBlue += 720;
        // cristal
        precioCristalBl += 720;
        precioCristalAr += 720;
        precioCristalPhg += 720;
        precioCristalPhb += 720;
        precioCristalPhgAr += 720;
        precioCristalPhbAr += 720;
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