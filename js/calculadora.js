const selectMedidas = document.querySelector('#selectMedidas');
const selectMaterial = document.querySelector('#selectMaterial');

const formMedidasMaterial = document.querySelector('#formMedidasMaterial');
const monturaEconomica = document.querySelector('#monturaEconomica');
const monturaCalidad = document.querySelector('#monturaCalidad');
const monturaAltaCalidad = document.querySelector('#monturaAltaCalidad');

const bifocalPlattop = document.querySelector('#bifocalPlattop');
const bifocalInvisible = document.querySelector('#bifocalInvisible');
const multifocal = document.querySelector('#multifocal');

const precio = document.querySelector('#precio');

let precioFinal = 0;

const precioResinaCristalBl = 100;
const precioResinaAr = 160;
const precioResinaBlue = 220;
const precioResinaSensitiveFotomateAr = 280;
const precioResinaSensitiveFotomateBlue = 340;
const precioResinaFotocromatica = 400;
const precioResinaTransition = 460;
const precioResinaTransitionAr = 520;
const precioResinaTransitionBlue = 580;
const precioCristalAr = 180;
const precioCristalPhgPhb = 220;
const precioCristalPhgPhbAr = 280;

const precioAumento = 40;

function precioLunas() {
    if (selectMedidas.selectedIndex == 1 && selectMaterial.selectedIndex == 1) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaCristalBl;
    } else if (selectMedidas.selectedIndex == 1 && selectMaterial.selectedIndex == 2) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaAr;
    } else if (selectMedidas.selectedIndex == 1 && selectMaterial.selectedIndex == 3) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaBlue;
    } else if (selectMedidas.selectedIndex == 1 && selectMaterial.selectedIndex == 4) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateAr;
    } else if (selectMedidas.selectedIndex == 1 && selectMaterial.selectedIndex == 5) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateBlue;
    } else if (selectMedidas.selectedIndex == 1 && selectMaterial.selectedIndex == 6) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaFotocromatica;
    } else if (selectMedidas.selectedIndex == 1 && selectMaterial.selectedIndex == 7) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransition;
    } else if (selectMedidas.selectedIndex == 1 && selectMaterial.selectedIndex == 8) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionAr;
    } else if (selectMedidas.selectedIndex == 1 && selectMaterial.selectedIndex == 9) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionBlue;
    } else if (selectMedidas.selectedIndex == 1 && selectMaterial.selectedIndex == 10) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalAr;
    } else if (selectMedidas.selectedIndex == 1 && selectMaterial.selectedIndex == 11) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhb;
    } else if (selectMedidas.selectedIndex == 1 && selectMaterial.selectedIndex == 12) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhbAr;
    }

    if (selectMedidas.selectedIndex == 2 && selectMaterial.selectedIndex == 1) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaCristalBl+precioAumento;
    } else if (selectMedidas.selectedIndex == 2 && selectMaterial.selectedIndex == 2) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaAr+precioAumento;
    } else if (selectMedidas.selectedIndex == 2 && selectMaterial.selectedIndex == 3) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaBlue+precioAumento;
    } else if (selectMedidas.selectedIndex == 2 && selectMaterial.selectedIndex == 4) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateAr+precioAumento;
    } else if (selectMedidas.selectedIndex == 2 && selectMaterial.selectedIndex == 5) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateBlue+precioAumento;
    } else if (selectMedidas.selectedIndex == 2 && selectMaterial.selectedIndex == 6) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaFotocromatica+precioAumento;
    } else if (selectMedidas.selectedIndex == 2 && selectMaterial.selectedIndex == 7) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransition+precioAumento;
    } else if (selectMedidas.selectedIndex == 2 && selectMaterial.selectedIndex == 8) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionAr+precioAumento;
    } else if (selectMedidas.selectedIndex == 2 && selectMaterial.selectedIndex == 9) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionBlue+precioAumento;
    } else if (selectMedidas.selectedIndex == 2 && selectMaterial.selectedIndex == 10) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalAr+precioAumento;
    } else if (selectMedidas.selectedIndex == 2 && selectMaterial.selectedIndex == 11) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhb+precioAumento;
    } else if (selectMedidas.selectedIndex == 2 && selectMaterial.selectedIndex == 12) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhbAr+precioAumento;
    }

    if (selectMedidas.selectedIndex == 3 && selectMaterial.selectedIndex == 1) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaCristalBl+(precioAumento*2);
    } else if (selectMedidas.selectedIndex == 3 && selectMaterial.selectedIndex == 2) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaAr+(precioAumento*2);
    } else if (selectMedidas.selectedIndex == 3 && selectMaterial.selectedIndex == 3) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaBlue+(precioAumento*2);
    } else if (selectMedidas.selectedIndex == 3 && selectMaterial.selectedIndex == 4) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*2);
    } else if (selectMedidas.selectedIndex == 3 && selectMaterial.selectedIndex == 5) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*2);
    } else if (selectMedidas.selectedIndex == 3 && selectMaterial.selectedIndex == 6) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaFotocromatica+(precioAumento*2);
    } else if (selectMedidas.selectedIndex == 3 && selectMaterial.selectedIndex == 7) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransition+(precioAumento*2);
    } else if (selectMedidas.selectedIndex == 3 && selectMaterial.selectedIndex == 8) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionAr+(precioAumento*2);
    } else if (selectMedidas.selectedIndex == 3 && selectMaterial.selectedIndex == 9) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionBlue+(precioAumento*2);
    } else if (selectMedidas.selectedIndex == 3 && selectMaterial.selectedIndex == 10) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalAr+(precioAumento*2);
    } else if (selectMedidas.selectedIndex == 3 && selectMaterial.selectedIndex == 11) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhb+(precioAumento*2);
    } else if (selectMedidas.selectedIndex == 3 && selectMaterial.selectedIndex == 12) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhbAr+(precioAumento*2);
    }

    if (selectMedidas.selectedIndex == 4 && selectMaterial.selectedIndex == 1) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaCristalBl+(precioAumento*3);
    } else if (selectMedidas.selectedIndex == 4 && selectMaterial.selectedIndex == 2) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaAr+(precioAumento*3);
    } else if (selectMedidas.selectedIndex == 4 && selectMaterial.selectedIndex == 3) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaBlue+(precioAumento*3);
    } else if (selectMedidas.selectedIndex == 4 && selectMaterial.selectedIndex == 4) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*3);
    } else if (selectMedidas.selectedIndex == 4 && selectMaterial.selectedIndex == 5) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*3);
    } else if (selectMedidas.selectedIndex == 4 && selectMaterial.selectedIndex == 6) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaFotocromatica+(precioAumento*3);
    } else if (selectMedidas.selectedIndex == 4 && selectMaterial.selectedIndex == 7) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransition+(precioAumento*3);
    } else if (selectMedidas.selectedIndex == 4 && selectMaterial.selectedIndex == 8) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionAr+(precioAumento*3);
    } else if (selectMedidas.selectedIndex == 4 && selectMaterial.selectedIndex == 9) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionBlue+(precioAumento*3);
    } else if (selectMedidas.selectedIndex == 4 && selectMaterial.selectedIndex == 10) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalAr+(precioAumento*3);
    } else if (selectMedidas.selectedIndex == 4 && selectMaterial.selectedIndex == 11) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhb+(precioAumento*3);
    } else if (selectMedidas.selectedIndex == 4 && selectMaterial.selectedIndex == 12) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhbAr+(precioAumento*3);
    }

    if (selectMedidas.selectedIndex == 5 && selectMaterial.selectedIndex == 1) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaCristalBl+(precioAumento*4);
    } else if (selectMedidas.selectedIndex == 5 && selectMaterial.selectedIndex == 2) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaAr+(precioAumento*4);
    } else if (selectMedidas.selectedIndex == 5 && selectMaterial.selectedIndex == 3) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaBlue+(precioAumento*4);
    } else if (selectMedidas.selectedIndex == 5 && selectMaterial.selectedIndex == 4) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*4);
    } else if (selectMedidas.selectedIndex == 5 && selectMaterial.selectedIndex == 5) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*4);
    } else if (selectMedidas.selectedIndex == 5 && selectMaterial.selectedIndex == 6) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaFotocromatica+(precioAumento*4);
    } else if (selectMedidas.selectedIndex == 5 && selectMaterial.selectedIndex == 7) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransition+(precioAumento*4);
    } else if (selectMedidas.selectedIndex == 5 && selectMaterial.selectedIndex == 8) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionAr+(precioAumento*4);
    } else if (selectMedidas.selectedIndex == 5 && selectMaterial.selectedIndex == 9) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionBlue+(precioAumento*4);
    } else if (selectMedidas.selectedIndex == 5 && selectMaterial.selectedIndex == 10) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalAr+(precioAumento*4);
    } else if (selectMedidas.selectedIndex == 5 && selectMaterial.selectedIndex == 11) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhb+(precioAumento*4);
    } else if (selectMedidas.selectedIndex == 5 && selectMaterial.selectedIndex == 12) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhbAr+(precioAumento*4);
    }

    if (selectMedidas.selectedIndex == 6 && selectMaterial.selectedIndex == 1) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaCristalBl+(precioAumento*5);
    } else if (selectMedidas.selectedIndex == 6 && selectMaterial.selectedIndex == 2) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaAr+(precioAumento*5);
    } else if (selectMedidas.selectedIndex == 6 && selectMaterial.selectedIndex == 3) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaBlue+(precioAumento*5);
    } else if (selectMedidas.selectedIndex == 6 && selectMaterial.selectedIndex == 4) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*5);
    } else if (selectMedidas.selectedIndex == 6 && selectMaterial.selectedIndex == 5) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*5);
    } else if (selectMedidas.selectedIndex == 6 && selectMaterial.selectedIndex == 6) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaFotocromatica+(precioAumento*5);
    } else if (selectMedidas.selectedIndex == 6 && selectMaterial.selectedIndex == 7) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransition+(precioAumento*5);
    } else if (selectMedidas.selectedIndex == 6 && selectMaterial.selectedIndex == 8) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionAr+(precioAumento*5);
    } else if (selectMedidas.selectedIndex == 6 && selectMaterial.selectedIndex == 9) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionBlue+(precioAumento*5);
    } else if (selectMedidas.selectedIndex == 6 && selectMaterial.selectedIndex == 10) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalAr+(precioAumento*5);
    } else if (selectMedidas.selectedIndex == 6 && selectMaterial.selectedIndex == 11) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhb+(precioAumento*5);
    } else if (selectMedidas.selectedIndex == 6 && selectMaterial.selectedIndex == 12) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhbAr+(precioAumento*5);
    }

    if (selectMedidas.selectedIndex == 7 && selectMaterial.selectedIndex == 1) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaCristalBl+(precioAumento*6);
    } else if (selectMedidas.selectedIndex == 7 && selectMaterial.selectedIndex == 2) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaAr+(precioAumento*6);
    } else if (selectMedidas.selectedIndex == 7 && selectMaterial.selectedIndex == 3) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaBlue+(precioAumento*6);
    } else if (selectMedidas.selectedIndex == 7 && selectMaterial.selectedIndex == 4) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*6);
    } else if (selectMedidas.selectedIndex == 7 && selectMaterial.selectedIndex == 5) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*6);
    } else if (selectMedidas.selectedIndex == 7 && selectMaterial.selectedIndex == 6) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaFotocromatica+(precioAumento*6);
    } else if (selectMedidas.selectedIndex == 7 && selectMaterial.selectedIndex == 7) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransition+(precioAumento*6);
    } else if (selectMedidas.selectedIndex == 7 && selectMaterial.selectedIndex == 8) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionAr+(precioAumento*6);
    } else if (selectMedidas.selectedIndex == 7 && selectMaterial.selectedIndex == 9) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionBlue+(precioAumento*6);
    } else if (selectMedidas.selectedIndex == 7 && selectMaterial.selectedIndex == 10) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalAr+(precioAumento*6);
    } else if (selectMedidas.selectedIndex == 7 && selectMaterial.selectedIndex == 11) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhb+(precioAumento*6);
    } else if (selectMedidas.selectedIndex == 7 && selectMaterial.selectedIndex == 12) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhbAr+(precioAumento*6);
    }

    if (selectMedidas.selectedIndex == 8 && selectMaterial.selectedIndex == 1) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaCristalBl+(precioAumento*7);
    } else if (selectMedidas.selectedIndex == 8 && selectMaterial.selectedIndex == 2) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaAr+(precioAumento*7);
    } else if (selectMedidas.selectedIndex == 8 && selectMaterial.selectedIndex == 3) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaBlue+(precioAumento*7);
    } else if (selectMedidas.selectedIndex == 8 && selectMaterial.selectedIndex == 4) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*7);
    } else if (selectMedidas.selectedIndex == 8 && selectMaterial.selectedIndex == 5) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*7);
    } else if (selectMedidas.selectedIndex == 8 && selectMaterial.selectedIndex == 6) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaFotocromatica+(precioAumento*7);
    } else if (selectMedidas.selectedIndex == 8 && selectMaterial.selectedIndex == 7) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransition+(precioAumento*7);
    } else if (selectMedidas.selectedIndex == 8 && selectMaterial.selectedIndex == 8) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionAr+(precioAumento*7);
    } else if (selectMedidas.selectedIndex == 8 && selectMaterial.selectedIndex == 9) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionBlue+(precioAumento*7);
    } else if (selectMedidas.selectedIndex == 8 && selectMaterial.selectedIndex == 10) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalAr+(precioAumento*7);
    } else if (selectMedidas.selectedIndex == 8 && selectMaterial.selectedIndex == 11) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhb+(precioAumento*7);
    } else if (selectMedidas.selectedIndex == 8 && selectMaterial.selectedIndex == 12) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhbAr+(precioAumento*7);
    }

    if (selectMedidas.selectedIndex == 9 && selectMaterial.selectedIndex == 1) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaCristalBl+(precioAumento*8);
    } else if (selectMedidas.selectedIndex == 9 && selectMaterial.selectedIndex == 2) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaAr+(precioAumento*8);
    } else if (selectMedidas.selectedIndex == 9 && selectMaterial.selectedIndex == 3) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaBlue+(precioAumento*8);
    } else if (selectMedidas.selectedIndex == 9 && selectMaterial.selectedIndex == 4) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*8);
    } else if (selectMedidas.selectedIndex == 9 && selectMaterial.selectedIndex == 5) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*8);
    } else if (selectMedidas.selectedIndex == 9 && selectMaterial.selectedIndex == 6) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaFotocromatica+(precioAumento*8);
    } else if (selectMedidas.selectedIndex == 9 && selectMaterial.selectedIndex == 7) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransition+(precioAumento*8);
    } else if (selectMedidas.selectedIndex == 9 && selectMaterial.selectedIndex == 8) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionAr+(precioAumento*8);
    } else if (selectMedidas.selectedIndex == 9 && selectMaterial.selectedIndex == 9) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionBlue+(precioAumento*8);
    } else if (selectMedidas.selectedIndex == 9 && selectMaterial.selectedIndex == 10) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalAr+(precioAumento*8);
    } else if (selectMedidas.selectedIndex == 9 && selectMaterial.selectedIndex == 11) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhb+(precioAumento*8);
    } else if (selectMedidas.selectedIndex == 9 && selectMaterial.selectedIndex == 12) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhbAr+(precioAumento*8);
    }

    if (selectMedidas.selectedIndex == 10 && selectMaterial.selectedIndex == 1) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaCristalBl+(precioAumento*9);
    } else if (selectMedidas.selectedIndex == 10 && selectMaterial.selectedIndex == 2) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaAr+(precioAumento*9);
    } else if (selectMedidas.selectedIndex == 10 && selectMaterial.selectedIndex == 3) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaBlue+(precioAumento*9);
    } else if (selectMedidas.selectedIndex == 10 && selectMaterial.selectedIndex == 4) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*9);
    } else if (selectMedidas.selectedIndex == 10 && selectMaterial.selectedIndex == 5) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*9);
    } else if (selectMedidas.selectedIndex == 10 && selectMaterial.selectedIndex == 6) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaFotocromatica+(precioAumento*9);
    } else if (selectMedidas.selectedIndex == 10 && selectMaterial.selectedIndex == 7) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransition+(precioAumento*9);
    } else if (selectMedidas.selectedIndex == 10 && selectMaterial.selectedIndex == 8) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionAr+(precioAumento*9);
    } else if (selectMedidas.selectedIndex == 10 && selectMaterial.selectedIndex == 9) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionBlue+(precioAumento*9);
    } else if (selectMedidas.selectedIndex == 10 && selectMaterial.selectedIndex == 10) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalAr+(precioAumento*9);
    } else if (selectMedidas.selectedIndex == 10 && selectMaterial.selectedIndex == 11) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhb+(precioAumento*9);
    } else if (selectMedidas.selectedIndex == 10 && selectMaterial.selectedIndex == 12) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhbAr+(precioAumento*9);
    }

    if (selectMedidas.selectedIndex == 11 && selectMaterial.selectedIndex == 1) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaCristalBl+(precioAumento*10);
    } else if (selectMedidas.selectedIndex == 11 && selectMaterial.selectedIndex == 2) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaAr+(precioAumento*10);
    } else if (selectMedidas.selectedIndex == 11 && selectMaterial.selectedIndex == 3) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaBlue+(precioAumento*10);
    } else if (selectMedidas.selectedIndex == 11 && selectMaterial.selectedIndex == 4) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*10);
    } else if (selectMedidas.selectedIndex == 11 && selectMaterial.selectedIndex == 5) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*10);
    } else if (selectMedidas.selectedIndex == 11 && selectMaterial.selectedIndex == 6) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaFotocromatica+(precioAumento*10);
    } else if (selectMedidas.selectedIndex == 11 && selectMaterial.selectedIndex == 7) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransition+(precioAumento*10);
    } else if (selectMedidas.selectedIndex == 11 && selectMaterial.selectedIndex == 8) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionAr+(precioAumento*10);
    } else if (selectMedidas.selectedIndex == 11 && selectMaterial.selectedIndex == 9) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionBlue+(precioAumento*10);
    } else if (selectMedidas.selectedIndex == 11 && selectMaterial.selectedIndex == 10) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalAr+(precioAumento*10);
    } else if (selectMedidas.selectedIndex == 11 && selectMaterial.selectedIndex == 11) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhb+(precioAumento*10);
    } else if (selectMedidas.selectedIndex == 11 && selectMaterial.selectedIndex == 12) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhbAr+(precioAumento*10);
    }

    if (selectMedidas.selectedIndex == 12 && selectMaterial.selectedIndex == 1) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaCristalBl+(precioAumento*11);
    } else if (selectMedidas.selectedIndex == 12 && selectMaterial.selectedIndex == 2) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaAr+(precioAumento*11);
    } else if (selectMedidas.selectedIndex == 12 && selectMaterial.selectedIndex == 3) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaBlue+(precioAumento*11);
    } else if (selectMedidas.selectedIndex == 12 && selectMaterial.selectedIndex == 4) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*11);
    } else if (selectMedidas.selectedIndex == 12 && selectMaterial.selectedIndex == 5) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*11);
    } else if (selectMedidas.selectedIndex == 12 && selectMaterial.selectedIndex == 6) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaFotocromatica+(precioAumento*11);
    } else if (selectMedidas.selectedIndex == 12 && selectMaterial.selectedIndex == 7) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransition+(precioAumento*11);
    } else if (selectMedidas.selectedIndex == 12 && selectMaterial.selectedIndex == 8) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionAr+(precioAumento*11);
    } else if (selectMedidas.selectedIndex == 12 && selectMaterial.selectedIndex == 9) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionBlue+(precioAumento*11);
    } else if (selectMedidas.selectedIndex == 12 && selectMaterial.selectedIndex == 10) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalAr+(precioAumento*11);
    } else if (selectMedidas.selectedIndex == 12 && selectMaterial.selectedIndex == 11) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhb+(precioAumento*11);
    } else if (selectMedidas.selectedIndex == 12 && selectMaterial.selectedIndex == 12) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhbAr+(precioAumento*11);
    }

    if (selectMedidas.selectedIndex == 13 && selectMaterial.selectedIndex == 1) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaCristalBl+(precioAumento*12);
    } else if (selectMedidas.selectedIndex == 13 && selectMaterial.selectedIndex == 2) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaAr+(precioAumento*12);
    } else if (selectMedidas.selectedIndex == 13 && selectMaterial.selectedIndex == 3) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaBlue+(precioAumento*12);
    } else if (selectMedidas.selectedIndex == 13 && selectMaterial.selectedIndex == 4) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*12);
    } else if (selectMedidas.selectedIndex == 13 && selectMaterial.selectedIndex == 5) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*12);
    } else if (selectMedidas.selectedIndex == 13 && selectMaterial.selectedIndex == 6) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaFotocromatica+(precioAumento*12);
    } else if (selectMedidas.selectedIndex == 13 && selectMaterial.selectedIndex == 7) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransition+(precioAumento*12);
    } else if (selectMedidas.selectedIndex == 13 && selectMaterial.selectedIndex == 8) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionAr+(precioAumento*12);
    } else if (selectMedidas.selectedIndex == 13 && selectMaterial.selectedIndex == 9) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionBlue+(precioAumento*12);
    } else if (selectMedidas.selectedIndex == 13 && selectMaterial.selectedIndex == 10) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalAr+(precioAumento*12);
    } else if (selectMedidas.selectedIndex == 13 && selectMaterial.selectedIndex == 11) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhb+(precioAumento*12);
    } else if (selectMedidas.selectedIndex == 13 && selectMaterial.selectedIndex == 12) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhbAr+(precioAumento*12);
    }

    if (selectMedidas.selectedIndex == 14 && selectMaterial.selectedIndex == 1) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaCristalBl+(precioAumento*13);
    } else if (selectMedidas.selectedIndex == 14 && selectMaterial.selectedIndex == 2) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaAr+(precioAumento*13);
    } else if (selectMedidas.selectedIndex == 14 && selectMaterial.selectedIndex == 3) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaBlue+(precioAumento*13);
    } else if (selectMedidas.selectedIndex == 14 && selectMaterial.selectedIndex == 4) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*13);
    } else if (selectMedidas.selectedIndex == 14 && selectMaterial.selectedIndex == 5) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*13);
    } else if (selectMedidas.selectedIndex == 14 && selectMaterial.selectedIndex == 6) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaFotocromatica+(precioAumento*13);
    } else if (selectMedidas.selectedIndex == 14 && selectMaterial.selectedIndex == 7) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransition+(precioAumento*13);
    } else if (selectMedidas.selectedIndex == 14 && selectMaterial.selectedIndex == 8) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionAr+(precioAumento*13);
    } else if (selectMedidas.selectedIndex == 14 && selectMaterial.selectedIndex == 9) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionBlue+(precioAumento*13);
    } else if (selectMedidas.selectedIndex == 14 && selectMaterial.selectedIndex == 10) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalAr+(precioAumento*13);
    } else if (selectMedidas.selectedIndex == 14 && selectMaterial.selectedIndex == 11) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhb+(precioAumento*13);
    } else if (selectMedidas.selectedIndex == 14 && selectMaterial.selectedIndex == 12) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhbAr+(precioAumento*13);
    }

    if (selectMedidas.selectedIndex == 15 && selectMaterial.selectedIndex == 1) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaCristalBl+(precioAumento*14);
    } else if (selectMedidas.selectedIndex == 15 && selectMaterial.selectedIndex == 2) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaAr+(precioAumento*14);
    } else if (selectMedidas.selectedIndex == 15 && selectMaterial.selectedIndex == 3) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaBlue+(precioAumento*14);
    } else if (selectMedidas.selectedIndex == 15 && selectMaterial.selectedIndex == 4) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*14);
    } else if (selectMedidas.selectedIndex == 15 && selectMaterial.selectedIndex == 5) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*14);
    } else if (selectMedidas.selectedIndex == 15 && selectMaterial.selectedIndex == 6) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaFotocromatica+(precioAumento*14);
    } else if (selectMedidas.selectedIndex == 15 && selectMaterial.selectedIndex == 7) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransition+(precioAumento*14);
    } else if (selectMedidas.selectedIndex == 15 && selectMaterial.selectedIndex == 8) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionAr+(precioAumento*14);
    } else if (selectMedidas.selectedIndex == 15 && selectMaterial.selectedIndex == 9) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionBlue+(precioAumento*14);
    } else if (selectMedidas.selectedIndex == 15 && selectMaterial.selectedIndex == 10) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalAr+(precioAumento*14);
    } else if (selectMedidas.selectedIndex == 15 && selectMaterial.selectedIndex == 11) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhb+(precioAumento*14);
    } else if (selectMedidas.selectedIndex == 15 && selectMaterial.selectedIndex == 12) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhbAr+(precioAumento*14);
    }

    if (selectMedidas.selectedIndex == 16 && selectMaterial.selectedIndex == 1) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaCristalBl+(precioAumento*15);
    } else if (selectMedidas.selectedIndex == 16 && selectMaterial.selectedIndex == 2) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaAr+(precioAumento*15);
    } else if (selectMedidas.selectedIndex == 16 && selectMaterial.selectedIndex == 3) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaBlue+(precioAumento*15);
    } else if (selectMedidas.selectedIndex == 16 && selectMaterial.selectedIndex == 4) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*15);
    } else if (selectMedidas.selectedIndex == 16 && selectMaterial.selectedIndex == 5) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*15);
    } else if (selectMedidas.selectedIndex == 16 && selectMaterial.selectedIndex == 6) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaFotocromatica+(precioAumento*15);
    } else if (selectMedidas.selectedIndex == 16 && selectMaterial.selectedIndex == 7) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransition+(precioAumento*15);
    } else if (selectMedidas.selectedIndex == 16 && selectMaterial.selectedIndex == 8) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionAr+(precioAumento*15);
    } else if (selectMedidas.selectedIndex == 16 && selectMaterial.selectedIndex == 9) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionBlue+(precioAumento*15);
    } else if (selectMedidas.selectedIndex == 16 && selectMaterial.selectedIndex == 10) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalAr+(precioAumento*15);
    } else if (selectMedidas.selectedIndex == 16 && selectMaterial.selectedIndex == 11) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhb+(precioAumento*15);
    } else if (selectMedidas.selectedIndex == 16 && selectMaterial.selectedIndex == 12) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhbAr+(precioAumento*15);
    }

    if (selectMedidas.selectedIndex == 17 && selectMaterial.selectedIndex == 1) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaCristalBl+(precioAumento*16);
    } else if (selectMedidas.selectedIndex == 17 && selectMaterial.selectedIndex == 2) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaAr+(precioAumento*16);
    } else if (selectMedidas.selectedIndex == 17 && selectMaterial.selectedIndex == 3) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaBlue+(precioAumento*16);
    } else if (selectMedidas.selectedIndex == 17 && selectMaterial.selectedIndex == 4) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*16);
    } else if (selectMedidas.selectedIndex == 17 && selectMaterial.selectedIndex == 5) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*16);
    } else if (selectMedidas.selectedIndex == 17 && selectMaterial.selectedIndex == 6) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaFotocromatica+(precioAumento*16);
    } else if (selectMedidas.selectedIndex == 17 && selectMaterial.selectedIndex == 7) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransition+(precioAumento*16);
    } else if (selectMedidas.selectedIndex == 17 && selectMaterial.selectedIndex == 8) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionAr+(precioAumento*16);
    } else if (selectMedidas.selectedIndex == 17 && selectMaterial.selectedIndex == 9) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionBlue+(precioAumento*16);
    } else if (selectMedidas.selectedIndex == 17 && selectMaterial.selectedIndex == 10) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalAr+(precioAumento*16);
    } else if (selectMedidas.selectedIndex == 17 && selectMaterial.selectedIndex == 11) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhb+(precioAumento*16);
    } else if (selectMedidas.selectedIndex == 17 && selectMaterial.selectedIndex == 12) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhbAr+(precioAumento*16);
    }

    if (selectMedidas.selectedIndex == 18 && selectMaterial.selectedIndex == 1) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaCristalBl+(precioAumento*17);
    } else if (selectMedidas.selectedIndex == 18 && selectMaterial.selectedIndex == 2) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaAr+(precioAumento*17);
    } else if (selectMedidas.selectedIndex == 18 && selectMaterial.selectedIndex == 3) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaBlue+(precioAumento*17);
    } else if (selectMedidas.selectedIndex == 18 && selectMaterial.selectedIndex == 4) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*17);
    } else if (selectMedidas.selectedIndex == 18 && selectMaterial.selectedIndex == 5) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*17);
    } else if (selectMedidas.selectedIndex == 18 && selectMaterial.selectedIndex == 6) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaFotocromatica+(precioAumento*17);
    } else if (selectMedidas.selectedIndex == 18 && selectMaterial.selectedIndex == 7) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransition+(precioAumento*17);
    } else if (selectMedidas.selectedIndex == 18 && selectMaterial.selectedIndex == 8) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionAr+(precioAumento*17);
    } else if (selectMedidas.selectedIndex == 18 && selectMaterial.selectedIndex == 9) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionBlue+(precioAumento*17);
    } else if (selectMedidas.selectedIndex == 18 && selectMaterial.selectedIndex == 10) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalAr+(precioAumento*17);
    } else if (selectMedidas.selectedIndex == 18 && selectMaterial.selectedIndex == 11) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhb+(precioAumento*17);
    } else if (selectMedidas.selectedIndex == 18 && selectMaterial.selectedIndex == 12) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhbAr+(precioAumento*17);
    }

    if (selectMedidas.selectedIndex == 19 && selectMaterial.selectedIndex == 1) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaCristalBl+(precioAumento*18);
    } else if (selectMedidas.selectedIndex == 19 && selectMaterial.selectedIndex == 2) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaAr+(precioAumento*18);
    } else if (selectMedidas.selectedIndex == 19 && selectMaterial.selectedIndex == 3) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaBlue+(precioAumento*18);
    } else if (selectMedidas.selectedIndex == 19 && selectMaterial.selectedIndex == 4) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*18);
    } else if (selectMedidas.selectedIndex == 19 && selectMaterial.selectedIndex == 5) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*18);
    } else if (selectMedidas.selectedIndex == 19 && selectMaterial.selectedIndex == 6) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaFotocromatica+(precioAumento*18);
    } else if (selectMedidas.selectedIndex == 19 && selectMaterial.selectedIndex == 7) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransition+(precioAumento*18);
    } else if (selectMedidas.selectedIndex == 19 && selectMaterial.selectedIndex == 8) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionAr+(precioAumento*18);
    } else if (selectMedidas.selectedIndex == 19 && selectMaterial.selectedIndex == 9) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioResinaTransitionBlue+(precioAumento*18);
    } else if (selectMedidas.selectedIndex == 19 && selectMaterial.selectedIndex == 10) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalAr+(precioAumento*18);
    } else if (selectMedidas.selectedIndex == 19 && selectMaterial.selectedIndex == 11) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhb+(precioAumento*18);
    } else if (selectMedidas.selectedIndex == 19 && selectMaterial.selectedIndex == 12) {
        precioFinal = 0;
        precio.textContent = "Precio: s/." + precioFinal;
        precioFinal += precioCristalPhgPhbAr+(precioAumento*18);
    }

    precio.textContent = "Precio: s/." + precioFinal;
}

formMedidasMaterial.addEventListener('change', precioLunas);

// Tipo de lunas

bifocalPlattop.addEventListener('click', () => {
    if (bifocalPlattop.checked) {
        precioFinal += precioFinal * 0.8;
    } else {
        precioFinal = parseInt(precioFinal / (1 + 80 / 100));
    }

    precio.textContent = "Precio: s/." + precioFinal;
})

bifocalInvisible.addEventListener('click', () => {
    if (bifocalInvisible.checked) {
        precioFinal += precioFinal * 1.00;
    } else {
        precioFinal = parseInt(precioFinal / (1 + 100 / 100));
    }

    precio.textContent = "Precio: s/." + precioFinal;
})

multifocal.addEventListener('click', () => {
    if (multifocal.checked) {
        precioFinal += precioFinal * 2.1;
    } else {
        precioFinal = parseInt(precioFinal / (1 + 210 / 100));
    }

    precio.textContent = "Precio: s/." + precioFinal;
})

// Precio monturas
monturaEconomica.addEventListener('click', () => {
    if (monturaEconomica.checked) {
        precioFinal += 100;
    } else {
        precioFinal -= 100;
    }

    precio.textContent = "Precio: s/." + precioFinal;
})

monturaCalidad.addEventListener('click', () => {
    if (monturaCalidad.checked) {
        precioFinal += 200;
    } else {
        precioFinal -= 200;
    }

    precio.textContent = "Precio: s/." + precioFinal;
})

monturaAltaCalidad.addEventListener('click', () => {
    if (monturaAltaCalidad.checked) {
        precioFinal += 400;
    } else {
        precioFinal -= 400;
    }

    precio.textContent = "Precio: s/." + precioFinal;
})

