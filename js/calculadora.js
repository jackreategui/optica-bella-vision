

const formMedidasMaterial = document.querySelector('#formMedidasMaterial');
const monturaEconomica = document.querySelector('#monturaEconomica');
const monturaCalidad = document.querySelector('#monturaCalidad');
const monturaAltaCalidad = document.querySelector('#monturaAltaCalidad');

const bifocalPlattop = document.querySelector('#bifocalPlattop');
const bifocalInvisible = document.querySelector('#bifocalInvisible');
const multifocal = document.querySelector('#multifocal');

const precio = document.querySelector('#precio');

let precioMedida = 0;
let porcentajePrecio = 0;
let precioMontura = 0;

const preciosBases = {
    resinaBl: 100,
    resinaAr: 160,
    resinaBlue: 220,
    resinaSenAr: 280,
    resinaSenBlue: 340,
    resinaFoto: 400,
    resinaTrans: 460,
    resinaTransAr: 520,
    resinaTransBlue: 580,
    cristalAr: 180,
    cristalPhg: 220,
    cristalPhgAr: 280,
};

const preciosMonturas = {
    economico: 100,
    calidad: 200,
    premiun: 400,
};

const clases = [
    'clase0',
    'clase1',
    'clase2',
    'clase3',
    'clase4',
    'clase5',
    'clase6',
    'clase7',
    'clase8',
    'clase9',
    'clase10',
    'clase11',
    'clase12',
    'clase13',
    'clase14',
    'clase15',
    'clase16',
    'clase17',
    'clase18',
];

let claseLunas = undefined;

const precioAumento = 10;
const precioAumentoCil = 20;

// const precioResinaCristalBl = 100;
// const precioResinaAr = 160;
// const precioResinaBlue = 220;
// const precioResinaSensitiveFotomateAr = 280;
// const precioResinaSensitiveFotomateBlue = 340;
// const precioResinaFotocromatica = 400;
// const precioResinaTransition = 460;
// const precioResinaTransitionAr = 520;
// const precioResinaTransitionBlue = 580;
// const precioCristalAr = 180;
// const precioCristalPhgPhb = 220;
// const precioCristalPhgPhbAr = 280;

formMedidasMaterial.addEventListener('change', precioLunas);

function precioLunas() {
    const selectMedidasEsf = document.querySelector('#selectMedidasEsf');
    const medidasEsf = selectMedidasEsf.value;

    const selectMedidasCil = document.querySelector('#selectMedidasCil');
    const medidasCil = selectMedidasCil.value;

    const selectMaterial = document.querySelector('#selectMaterial');
    const material = selectMaterial.value;
    
    function averiguarClase() {
        for (let i = 0; i < clases.length; i++) {
            if (clases[i] == medidasEsf) {
                claseLunas = clases[i];
            }
        }
    }

    averiguarClase();
    if (medidasEsf && material || medidasCil && material) {
        if (medidasEsf == claseLunas && material == 'resinaBl') {
            console.log(preciosBases[material]);
        } else if (medidasEsf == claseLunas && material == 'resinaAr') {
            console.log(preciosBases[material]);
        }
    }
    
}


// function precioLunasEsf() {
//     if (selectMedidasEsf.selectedIndex == 1 && selectMaterial.selectedIndex == 1) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaCristalBl;
//     } else if (selectMedidasEsf.selectedIndex == 1 && selectMaterial.selectedIndex == 2) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaAr;
//     } else if (selectMedidasEsf.selectedIndex == 1 && selectMaterial.selectedIndex == 3) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaBlue;
//     } else if (selectMedidasEsf.selectedIndex == 1 && selectMaterial.selectedIndex == 4) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateAr;
//     } else if (selectMedidasEsf.selectedIndex == 1 && selectMaterial.selectedIndex == 5) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateBlue;
//     } else if (selectMedidasEsf.selectedIndex == 1 && selectMaterial.selectedIndex == 6) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaFotocromatica;
//     } else if (selectMedidasEsf.selectedIndex == 1 && selectMaterial.selectedIndex == 7) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransition;
//     } else if (selectMedidasEsf.selectedIndex == 1 && selectMaterial.selectedIndex == 8) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionAr;
//     } else if (selectMedidasEsf.selectedIndex == 1 && selectMaterial.selectedIndex == 9) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionBlue;
//     } else if (selectMedidasEsf.selectedIndex == 1 && selectMaterial.selectedIndex == 10) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalAr;
//     } else if (selectMedidasEsf.selectedIndex == 1 && selectMaterial.selectedIndex == 11) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhb;
//     } else if (selectMedidasEsf.selectedIndex == 1 && selectMaterial.selectedIndex == 12) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhbAr;
//     }

//     if (selectMedidasEsf.selectedIndex == 2 && selectMaterial.selectedIndex == 1) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaCristalBl+precioAumento;
//     } else if (selectMedidasEsf.selectedIndex == 2 && selectMaterial.selectedIndex == 2) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaAr+precioAumento;
//     } else if (selectMedidasEsf.selectedIndex == 2 && selectMaterial.selectedIndex == 3) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaBlue+precioAumento;
//     } else if (selectMedidasEsf.selectedIndex == 2 && selectMaterial.selectedIndex == 4) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateAr+precioAumento;
//     } else if (selectMedidasEsf.selectedIndex == 2 && selectMaterial.selectedIndex == 5) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateBlue+precioAumento;
//     } else if (selectMedidasEsf.selectedIndex == 2 && selectMaterial.selectedIndex == 6) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaFotocromatica+precioAumento;
//     } else if (selectMedidasEsf.selectedIndex == 2 && selectMaterial.selectedIndex == 7) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransition+precioAumento;
//     } else if (selectMedidasEsf.selectedIndex == 2 && selectMaterial.selectedIndex == 8) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionAr+precioAumento;
//     } else if (selectMedidasEsf.selectedIndex == 2 && selectMaterial.selectedIndex == 9) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionBlue+precioAumento;
//     } else if (selectMedidasEsf.selectedIndex == 2 && selectMaterial.selectedIndex == 10) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalAr+precioAumento;
//     } else if (selectMedidasEsf.selectedIndex == 2 && selectMaterial.selectedIndex == 11) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhb+precioAumento;
//     } else if (selectMedidasEsf.selectedIndex == 2 && selectMaterial.selectedIndex == 12) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhbAr+precioAumento;
//     }

//     if (selectMedidasEsf.selectedIndex == 3 && selectMaterial.selectedIndex == 1) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaCristalBl+(precioAumento*2);
//     } else if (selectMedidasEsf.selectedIndex == 3 && selectMaterial.selectedIndex == 2) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaAr+(precioAumento*2);
//     } else if (selectMedidasEsf.selectedIndex == 3 && selectMaterial.selectedIndex == 3) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaBlue+(precioAumento*2);
//     } else if (selectMedidasEsf.selectedIndex == 3 && selectMaterial.selectedIndex == 4) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*2);
//     } else if (selectMedidasEsf.selectedIndex == 3 && selectMaterial.selectedIndex == 5) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*2);
//     } else if (selectMedidasEsf.selectedIndex == 3 && selectMaterial.selectedIndex == 6) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaFotocromatica+(precioAumento*2);
//     } else if (selectMedidasEsf.selectedIndex == 3 && selectMaterial.selectedIndex == 7) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransition+(precioAumento*2);
//     } else if (selectMedidasEsf.selectedIndex == 3 && selectMaterial.selectedIndex == 8) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionAr+(precioAumento*2);
//     } else if (selectMedidasEsf.selectedIndex == 3 && selectMaterial.selectedIndex == 9) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionBlue+(precioAumento*2);
//     } else if (selectMedidasEsf.selectedIndex == 3 && selectMaterial.selectedIndex == 10) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalAr+(precioAumento*2);
//     } else if (selectMedidasEsf.selectedIndex == 3 && selectMaterial.selectedIndex == 11) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhb+(precioAumento*2);
//     } else if (selectMedidasEsf.selectedIndex == 3 && selectMaterial.selectedIndex == 12) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhbAr+(precioAumento*2);
//     }

//     if (selectMedidasEsf.selectedIndex == 4 && selectMaterial.selectedIndex == 1) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaCristalBl+(precioAumento*3);
//     } else if (selectMedidasEsf.selectedIndex == 4 && selectMaterial.selectedIndex == 2) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaAr+(precioAumento*3);
//     } else if (selectMedidasEsf.selectedIndex == 4 && selectMaterial.selectedIndex == 3) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaBlue+(precioAumento*3);
//     } else if (selectMedidasEsf.selectedIndex == 4 && selectMaterial.selectedIndex == 4) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*3);
//     } else if (selectMedidasEsf.selectedIndex == 4 && selectMaterial.selectedIndex == 5) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*3);
//     } else if (selectMedidasEsf.selectedIndex == 4 && selectMaterial.selectedIndex == 6) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaFotocromatica+(precioAumento*3);
//     } else if (selectMedidasEsf.selectedIndex == 4 && selectMaterial.selectedIndex == 7) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransition+(precioAumento*3);
//     } else if (selectMedidasEsf.selectedIndex == 4 && selectMaterial.selectedIndex == 8) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionAr+(precioAumento*3);
//     } else if (selectMedidasEsf.selectedIndex == 4 && selectMaterial.selectedIndex == 9) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionBlue+(precioAumento*3);
//     } else if (selectMedidasEsf.selectedIndex == 4 && selectMaterial.selectedIndex == 10) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalAr+(precioAumento*3);
//     } else if (selectMedidasEsf.selectedIndex == 4 && selectMaterial.selectedIndex == 11) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhb+(precioAumento*3);
//     } else if (selectMedidasEsf.selectedIndex == 4 && selectMaterial.selectedIndex == 12) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhbAr+(precioAumento*3);
//     }

//     if (selectMedidasEsf.selectedIndex == 5 && selectMaterial.selectedIndex == 1) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaCristalBl+(precioAumento*4);
//     } else if (selectMedidasEsf.selectedIndex == 5 && selectMaterial.selectedIndex == 2) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaAr+(precioAumento*4);
//     } else if (selectMedidasEsf.selectedIndex == 5 && selectMaterial.selectedIndex == 3) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaBlue+(precioAumento*4);
//     } else if (selectMedidasEsf.selectedIndex == 5 && selectMaterial.selectedIndex == 4) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*4);
//     } else if (selectMedidasEsf.selectedIndex == 5 && selectMaterial.selectedIndex == 5) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*4);
//     } else if (selectMedidasEsf.selectedIndex == 5 && selectMaterial.selectedIndex == 6) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaFotocromatica+(precioAumento*4);
//     } else if (selectMedidasEsf.selectedIndex == 5 && selectMaterial.selectedIndex == 7) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransition+(precioAumento*4);
//     } else if (selectMedidasEsf.selectedIndex == 5 && selectMaterial.selectedIndex == 8) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionAr+(precioAumento*4);
//     } else if (selectMedidasEsf.selectedIndex == 5 && selectMaterial.selectedIndex == 9) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionBlue+(precioAumento*4);
//     } else if (selectMedidasEsf.selectedIndex == 5 && selectMaterial.selectedIndex == 10) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalAr+(precioAumento*4);
//     } else if (selectMedidasEsf.selectedIndex == 5 && selectMaterial.selectedIndex == 11) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhb+(precioAumento*4);
//     } else if (selectMedidasEsf.selectedIndex == 5 && selectMaterial.selectedIndex == 12) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhbAr+(precioAumento*4);
//     }

//     if (selectMedidasEsf.selectedIndex == 6 && selectMaterial.selectedIndex == 1) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaCristalBl+(precioAumento*5);
//     } else if (selectMedidasEsf.selectedIndex == 6 && selectMaterial.selectedIndex == 2) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaAr+(precioAumento*5);
//     } else if (selectMedidasEsf.selectedIndex == 6 && selectMaterial.selectedIndex == 3) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaBlue+(precioAumento*5);
//     } else if (selectMedidasEsf.selectedIndex == 6 && selectMaterial.selectedIndex == 4) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*5);
//     } else if (selectMedidasEsf.selectedIndex == 6 && selectMaterial.selectedIndex == 5) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*5);
//     } else if (selectMedidasEsf.selectedIndex == 6 && selectMaterial.selectedIndex == 6) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaFotocromatica+(precioAumento*5);
//     } else if (selectMedidasEsf.selectedIndex == 6 && selectMaterial.selectedIndex == 7) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransition+(precioAumento*5);
//     } else if (selectMedidasEsf.selectedIndex == 6 && selectMaterial.selectedIndex == 8) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionAr+(precioAumento*5);
//     } else if (selectMedidasEsf.selectedIndex == 6 && selectMaterial.selectedIndex == 9) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionBlue+(precioAumento*5);
//     } else if (selectMedidasEsf.selectedIndex == 6 && selectMaterial.selectedIndex == 10) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalAr+(precioAumento*5);
//     } else if (selectMedidasEsf.selectedIndex == 6 && selectMaterial.selectedIndex == 11) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhb+(precioAumento*5);
//     } else if (selectMedidasEsf.selectedIndex == 6 && selectMaterial.selectedIndex == 12) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhbAr+(precioAumento*5);
//     }

//     if (selectMedidasEsf.selectedIndex == 7 && selectMaterial.selectedIndex == 1) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaCristalBl+(precioAumento*6);
//     } else if (selectMedidasEsf.selectedIndex == 7 && selectMaterial.selectedIndex == 2) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaAr+(precioAumento*6);
//     } else if (selectMedidasEsf.selectedIndex == 7 && selectMaterial.selectedIndex == 3) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaBlue+(precioAumento*6);
//     } else if (selectMedidasEsf.selectedIndex == 7 && selectMaterial.selectedIndex == 4) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*6);
//     } else if (selectMedidasEsf.selectedIndex == 7 && selectMaterial.selectedIndex == 5) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*6);
//     } else if (selectMedidasEsf.selectedIndex == 7 && selectMaterial.selectedIndex == 6) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaFotocromatica+(precioAumento*6);
//     } else if (selectMedidasEsf.selectedIndex == 7 && selectMaterial.selectedIndex == 7) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransition+(precioAumento*6);
//     } else if (selectMedidasEsf.selectedIndex == 7 && selectMaterial.selectedIndex == 8) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionAr+(precioAumento*6);
//     } else if (selectMedidasEsf.selectedIndex == 7 && selectMaterial.selectedIndex == 9) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionBlue+(precioAumento*6);
//     } else if (selectMedidasEsf.selectedIndex == 7 && selectMaterial.selectedIndex == 10) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalAr+(precioAumento*6);
//     } else if (selectMedidasEsf.selectedIndex == 7 && selectMaterial.selectedIndex == 11) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhb+(precioAumento*6);
//     } else if (selectMedidasEsf.selectedIndex == 7 && selectMaterial.selectedIndex == 12) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhbAr+(precioAumento*6);
//     }

//     if (selectMedidasEsf.selectedIndex == 8 && selectMaterial.selectedIndex == 1) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaCristalBl+(precioAumento*7);
//     } else if (selectMedidasEsf.selectedIndex == 8 && selectMaterial.selectedIndex == 2) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaAr+(precioAumento*7);
//     } else if (selectMedidasEsf.selectedIndex == 8 && selectMaterial.selectedIndex == 3) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaBlue+(precioAumento*7);
//     } else if (selectMedidasEsf.selectedIndex == 8 && selectMaterial.selectedIndex == 4) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*7);
//     } else if (selectMedidasEsf.selectedIndex == 8 && selectMaterial.selectedIndex == 5) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*7);
//     } else if (selectMedidasEsf.selectedIndex == 8 && selectMaterial.selectedIndex == 6) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaFotocromatica+(precioAumento*7);
//     } else if (selectMedidasEsf.selectedIndex == 8 && selectMaterial.selectedIndex == 7) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransition+(precioAumento*7);
//     } else if (selectMedidasEsf.selectedIndex == 8 && selectMaterial.selectedIndex == 8) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionAr+(precioAumento*7);
//     } else if (selectMedidasEsf.selectedIndex == 8 && selectMaterial.selectedIndex == 9) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionBlue+(precioAumento*7);
//     } else if (selectMedidasEsf.selectedIndex == 8 && selectMaterial.selectedIndex == 10) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalAr+(precioAumento*7);
//     } else if (selectMedidasEsf.selectedIndex == 8 && selectMaterial.selectedIndex == 11) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhb+(precioAumento*7);
//     } else if (selectMedidasEsf.selectedIndex == 8 && selectMaterial.selectedIndex == 12) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhbAr+(precioAumento*7);
//     }

//     if (selectMedidasEsf.selectedIndex == 9 && selectMaterial.selectedIndex == 1) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaCristalBl+(precioAumento*8);
//     } else if (selectMedidasEsf.selectedIndex == 9 && selectMaterial.selectedIndex == 2) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaAr+(precioAumento*8);
//     } else if (selectMedidasEsf.selectedIndex == 9 && selectMaterial.selectedIndex == 3) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaBlue+(precioAumento*8);
//     } else if (selectMedidasEsf.selectedIndex == 9 && selectMaterial.selectedIndex == 4) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*8);
//     } else if (selectMedidasEsf.selectedIndex == 9 && selectMaterial.selectedIndex == 5) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*8);
//     } else if (selectMedidasEsf.selectedIndex == 9 && selectMaterial.selectedIndex == 6) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaFotocromatica+(precioAumento*8);
//     } else if (selectMedidasEsf.selectedIndex == 9 && selectMaterial.selectedIndex == 7) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransition+(precioAumento*8);
//     } else if (selectMedidasEsf.selectedIndex == 9 && selectMaterial.selectedIndex == 8) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionAr+(precioAumento*8);
//     } else if (selectMedidasEsf.selectedIndex == 9 && selectMaterial.selectedIndex == 9) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionBlue+(precioAumento*8);
//     } else if (selectMedidasEsf.selectedIndex == 9 && selectMaterial.selectedIndex == 10) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalAr+(precioAumento*8);
//     } else if (selectMedidasEsf.selectedIndex == 9 && selectMaterial.selectedIndex == 11) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhb+(precioAumento*8);
//     } else if (selectMedidasEsf.selectedIndex == 9 && selectMaterial.selectedIndex == 12) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhbAr+(precioAumento*8);
//     }

//     if (selectMedidasEsf.selectedIndex == 10 && selectMaterial.selectedIndex == 1) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaCristalBl+(precioAumento*9);
//     } else if (selectMedidasEsf.selectedIndex == 10 && selectMaterial.selectedIndex == 2) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaAr+(precioAumento*9);
//     } else if (selectMedidasEsf.selectedIndex == 10 && selectMaterial.selectedIndex == 3) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaBlue+(precioAumento*9);
//     } else if (selectMedidasEsf.selectedIndex == 10 && selectMaterial.selectedIndex == 4) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*9);
//     } else if (selectMedidasEsf.selectedIndex == 10 && selectMaterial.selectedIndex == 5) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*9);
//     } else if (selectMedidasEsf.selectedIndex == 10 && selectMaterial.selectedIndex == 6) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaFotocromatica+(precioAumento*9);
//     } else if (selectMedidasEsf.selectedIndex == 10 && selectMaterial.selectedIndex == 7) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransition+(precioAumento*9);
//     } else if (selectMedidasEsf.selectedIndex == 10 && selectMaterial.selectedIndex == 8) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionAr+(precioAumento*9);
//     } else if (selectMedidasEsf.selectedIndex == 10 && selectMaterial.selectedIndex == 9) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionBlue+(precioAumento*9);
//     } else if (selectMedidasEsf.selectedIndex == 10 && selectMaterial.selectedIndex == 10) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalAr+(precioAumento*9);
//     } else if (selectMedidasEsf.selectedIndex == 10 && selectMaterial.selectedIndex == 11) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhb+(precioAumento*9);
//     } else if (selectMedidasEsf.selectedIndex == 10 && selectMaterial.selectedIndex == 12) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhbAr+(precioAumento*9);
//     }

//     if (selectMedidasEsf.selectedIndex == 11 && selectMaterial.selectedIndex == 1) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaCristalBl+(precioAumento*10);
//     } else if (selectMedidasEsf.selectedIndex == 11 && selectMaterial.selectedIndex == 2) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaAr+(precioAumento*10);
//     } else if (selectMedidasEsf.selectedIndex == 11 && selectMaterial.selectedIndex == 3) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaBlue+(precioAumento*10);
//     } else if (selectMedidasEsf.selectedIndex == 11 && selectMaterial.selectedIndex == 4) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*10);
//     } else if (selectMedidasEsf.selectedIndex == 11 && selectMaterial.selectedIndex == 5) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*10);
//     } else if (selectMedidasEsf.selectedIndex == 11 && selectMaterial.selectedIndex == 6) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaFotocromatica+(precioAumento*10);
//     } else if (selectMedidasEsf.selectedIndex == 11 && selectMaterial.selectedIndex == 7) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransition+(precioAumento*10);
//     } else if (selectMedidasEsf.selectedIndex == 11 && selectMaterial.selectedIndex == 8) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionAr+(precioAumento*10);
//     } else if (selectMedidasEsf.selectedIndex == 11 && selectMaterial.selectedIndex == 9) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionBlue+(precioAumento*10);
//     } else if (selectMedidasEsf.selectedIndex == 11 && selectMaterial.selectedIndex == 10) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalAr+(precioAumento*10);
//     } else if (selectMedidasEsf.selectedIndex == 11 && selectMaterial.selectedIndex == 11) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhb+(precioAumento*10);
//     } else if (selectMedidasEsf.selectedIndex == 11 && selectMaterial.selectedIndex == 12) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhbAr+(precioAumento*10);
//     }

//     if (selectMedidasEsf.selectedIndex == 12 && selectMaterial.selectedIndex == 1) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaCristalBl+(precioAumento*11);
//     } else if (selectMedidasEsf.selectedIndex == 12 && selectMaterial.selectedIndex == 2) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaAr+(precioAumento*11);
//     } else if (selectMedidasEsf.selectedIndex == 12 && selectMaterial.selectedIndex == 3) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaBlue+(precioAumento*11);
//     } else if (selectMedidasEsf.selectedIndex == 12 && selectMaterial.selectedIndex == 4) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*11);
//     } else if (selectMedidasEsf.selectedIndex == 12 && selectMaterial.selectedIndex == 5) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*11);
//     } else if (selectMedidasEsf.selectedIndex == 12 && selectMaterial.selectedIndex == 6) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaFotocromatica+(precioAumento*11);
//     } else if (selectMedidasEsf.selectedIndex == 12 && selectMaterial.selectedIndex == 7) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransition+(precioAumento*11);
//     } else if (selectMedidasEsf.selectedIndex == 12 && selectMaterial.selectedIndex == 8) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionAr+(precioAumento*11);
//     } else if (selectMedidasEsf.selectedIndex == 12 && selectMaterial.selectedIndex == 9) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionBlue+(precioAumento*11);
//     } else if (selectMedidasEsf.selectedIndex == 12 && selectMaterial.selectedIndex == 10) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalAr+(precioAumento*11);
//     } else if (selectMedidasEsf.selectedIndex == 12 && selectMaterial.selectedIndex == 11) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhb+(precioAumento*11);
//     } else if (selectMedidasEsf.selectedIndex == 12 && selectMaterial.selectedIndex == 12) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhbAr+(precioAumento*11);
//     }

//     if (selectMedidasEsf.selectedIndex == 13 && selectMaterial.selectedIndex == 1) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaCristalBl+(precioAumento*12);
//     } else if (selectMedidasEsf.selectedIndex == 13 && selectMaterial.selectedIndex == 2) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaAr+(precioAumento*12);
//     } else if (selectMedidasEsf.selectedIndex == 13 && selectMaterial.selectedIndex == 3) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaBlue+(precioAumento*12);
//     } else if (selectMedidasEsf.selectedIndex == 13 && selectMaterial.selectedIndex == 4) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*12);
//     } else if (selectMedidasEsf.selectedIndex == 13 && selectMaterial.selectedIndex == 5) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*12);
//     } else if (selectMedidasEsf.selectedIndex == 13 && selectMaterial.selectedIndex == 6) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaFotocromatica+(precioAumento*12);
//     } else if (selectMedidasEsf.selectedIndex == 13 && selectMaterial.selectedIndex == 7) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransition+(precioAumento*12);
//     } else if (selectMedidasEsf.selectedIndex == 13 && selectMaterial.selectedIndex == 8) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionAr+(precioAumento*12);
//     } else if (selectMedidasEsf.selectedIndex == 13 && selectMaterial.selectedIndex == 9) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionBlue+(precioAumento*12);
//     } else if (selectMedidasEsf.selectedIndex == 13 && selectMaterial.selectedIndex == 10) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalAr+(precioAumento*12);
//     } else if (selectMedidasEsf.selectedIndex == 13 && selectMaterial.selectedIndex == 11) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhb+(precioAumento*12);
//     } else if (selectMedidasEsf.selectedIndex == 13 && selectMaterial.selectedIndex == 12) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhbAr+(precioAumento*12);
//     }

//     if (selectMedidasEsf.selectedIndex == 14 && selectMaterial.selectedIndex == 1) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaCristalBl+(precioAumento*13);
//     } else if (selectMedidasEsf.selectedIndex == 14 && selectMaterial.selectedIndex == 2) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaAr+(precioAumento*13);
//     } else if (selectMedidasEsf.selectedIndex == 14 && selectMaterial.selectedIndex == 3) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaBlue+(precioAumento*13);
//     } else if (selectMedidasEsf.selectedIndex == 14 && selectMaterial.selectedIndex == 4) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*13);
//     } else if (selectMedidasEsf.selectedIndex == 14 && selectMaterial.selectedIndex == 5) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*13);
//     } else if (selectMedidasEsf.selectedIndex == 14 && selectMaterial.selectedIndex == 6) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaFotocromatica+(precioAumento*13);
//     } else if (selectMedidasEsf.selectedIndex == 14 && selectMaterial.selectedIndex == 7) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransition+(precioAumento*13);
//     } else if (selectMedidasEsf.selectedIndex == 14 && selectMaterial.selectedIndex == 8) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionAr+(precioAumento*13);
//     } else if (selectMedidasEsf.selectedIndex == 14 && selectMaterial.selectedIndex == 9) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionBlue+(precioAumento*13);
//     } else if (selectMedidasEsf.selectedIndex == 14 && selectMaterial.selectedIndex == 10) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalAr+(precioAumento*13);
//     } else if (selectMedidasEsf.selectedIndex == 14 && selectMaterial.selectedIndex == 11) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhb+(precioAumento*13);
//     } else if (selectMedidasEsf.selectedIndex == 14 && selectMaterial.selectedIndex == 12) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhbAr+(precioAumento*13);
//     }

//     if (selectMedidasEsf.selectedIndex == 15 && selectMaterial.selectedIndex == 1) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaCristalBl+(precioAumento*14);
//     } else if (selectMedidasEsf.selectedIndex == 15 && selectMaterial.selectedIndex == 2) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaAr+(precioAumento*14);
//     } else if (selectMedidasEsf.selectedIndex == 15 && selectMaterial.selectedIndex == 3) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaBlue+(precioAumento*14);
//     } else if (selectMedidasEsf.selectedIndex == 15 && selectMaterial.selectedIndex == 4) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*14);
//     } else if (selectMedidasEsf.selectedIndex == 15 && selectMaterial.selectedIndex == 5) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*14);
//     } else if (selectMedidasEsf.selectedIndex == 15 && selectMaterial.selectedIndex == 6) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaFotocromatica+(precioAumento*14);
//     } else if (selectMedidasEsf.selectedIndex == 15 && selectMaterial.selectedIndex == 7) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransition+(precioAumento*14);
//     } else if (selectMedidasEsf.selectedIndex == 15 && selectMaterial.selectedIndex == 8) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionAr+(precioAumento*14);
//     } else if (selectMedidasEsf.selectedIndex == 15 && selectMaterial.selectedIndex == 9) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionBlue+(precioAumento*14);
//     } else if (selectMedidasEsf.selectedIndex == 15 && selectMaterial.selectedIndex == 10) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalAr+(precioAumento*14);
//     } else if (selectMedidasEsf.selectedIndex == 15 && selectMaterial.selectedIndex == 11) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhb+(precioAumento*14);
//     } else if (selectMedidasEsf.selectedIndex == 15 && selectMaterial.selectedIndex == 12) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhbAr+(precioAumento*14);
//     }

//     if (selectMedidasEsf.selectedIndex == 16 && selectMaterial.selectedIndex == 1) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaCristalBl+(precioAumento*15);
//     } else if (selectMedidasEsf.selectedIndex == 16 && selectMaterial.selectedIndex == 2) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaAr+(precioAumento*15);
//     } else if (selectMedidasEsf.selectedIndex == 16 && selectMaterial.selectedIndex == 3) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaBlue+(precioAumento*15);
//     } else if (selectMedidasEsf.selectedIndex == 16 && selectMaterial.selectedIndex == 4) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*15);
//     } else if (selectMedidasEsf.selectedIndex == 16 && selectMaterial.selectedIndex == 5) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*15);
//     } else if (selectMedidasEsf.selectedIndex == 16 && selectMaterial.selectedIndex == 6) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaFotocromatica+(precioAumento*15);
//     } else if (selectMedidasEsf.selectedIndex == 16 && selectMaterial.selectedIndex == 7) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransition+(precioAumento*15);
//     } else if (selectMedidasEsf.selectedIndex == 16 && selectMaterial.selectedIndex == 8) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionAr+(precioAumento*15);
//     } else if (selectMedidasEsf.selectedIndex == 16 && selectMaterial.selectedIndex == 9) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionBlue+(precioAumento*15);
//     } else if (selectMedidasEsf.selectedIndex == 16 && selectMaterial.selectedIndex == 10) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalAr+(precioAumento*15);
//     } else if (selectMedidasEsf.selectedIndex == 16 && selectMaterial.selectedIndex == 11) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhb+(precioAumento*15);
//     } else if (selectMedidasEsf.selectedIndex == 16 && selectMaterial.selectedIndex == 12) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhbAr+(precioAumento*15);
//     }

//     if (selectMedidasEsf.selectedIndex == 17 && selectMaterial.selectedIndex == 1) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaCristalBl+(precioAumento*16);
//     } else if (selectMedidasEsf.selectedIndex == 17 && selectMaterial.selectedIndex == 2) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaAr+(precioAumento*16);
//     } else if (selectMedidasEsf.selectedIndex == 17 && selectMaterial.selectedIndex == 3) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaBlue+(precioAumento*16);
//     } else if (selectMedidasEsf.selectedIndex == 17 && selectMaterial.selectedIndex == 4) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*16);
//     } else if (selectMedidasEsf.selectedIndex == 17 && selectMaterial.selectedIndex == 5) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*16);
//     } else if (selectMedidasEsf.selectedIndex == 17 && selectMaterial.selectedIndex == 6) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaFotocromatica+(precioAumento*16);
//     } else if (selectMedidasEsf.selectedIndex == 17 && selectMaterial.selectedIndex == 7) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransition+(precioAumento*16);
//     } else if (selectMedidasEsf.selectedIndex == 17 && selectMaterial.selectedIndex == 8) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionAr+(precioAumento*16);
//     } else if (selectMedidasEsf.selectedIndex == 17 && selectMaterial.selectedIndex == 9) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionBlue+(precioAumento*16);
//     } else if (selectMedidasEsf.selectedIndex == 17 && selectMaterial.selectedIndex == 10) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalAr+(precioAumento*16);
//     } else if (selectMedidasEsf.selectedIndex == 17 && selectMaterial.selectedIndex == 11) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhb+(precioAumento*16);
//     } else if (selectMedidasEsf.selectedIndex == 17 && selectMaterial.selectedIndex == 12) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhbAr+(precioAumento*16);
//     }

//     if (selectMedidasEsf.selectedIndex == 18 && selectMaterial.selectedIndex == 1) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaCristalBl+(precioAumento*17);
//     } else if (selectMedidasEsf.selectedIndex == 18 && selectMaterial.selectedIndex == 2) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaAr+(precioAumento*17);
//     } else if (selectMedidasEsf.selectedIndex == 18 && selectMaterial.selectedIndex == 3) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaBlue+(precioAumento*17);
//     } else if (selectMedidasEsf.selectedIndex == 18 && selectMaterial.selectedIndex == 4) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*17);
//     } else if (selectMedidasEsf.selectedIndex == 18 && selectMaterial.selectedIndex == 5) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*17);
//     } else if (selectMedidasEsf.selectedIndex == 18 && selectMaterial.selectedIndex == 6) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaFotocromatica+(precioAumento*17);
//     } else if (selectMedidasEsf.selectedIndex == 18 && selectMaterial.selectedIndex == 7) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransition+(precioAumento*17);
//     } else if (selectMedidasEsf.selectedIndex == 18 && selectMaterial.selectedIndex == 8) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionAr+(precioAumento*17);
//     } else if (selectMedidasEsf.selectedIndex == 18 && selectMaterial.selectedIndex == 9) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionBlue+(precioAumento*17);
//     } else if (selectMedidasEsf.selectedIndex == 18 && selectMaterial.selectedIndex == 10) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalAr+(precioAumento*17);
//     } else if (selectMedidasEsf.selectedIndex == 18 && selectMaterial.selectedIndex == 11) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhb+(precioAumento*17);
//     } else if (selectMedidasEsf.selectedIndex == 18 && selectMaterial.selectedIndex == 12) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhbAr+(precioAumento*17);
//     }

//     if (selectMedidasEsf.selectedIndex == 19 && selectMaterial.selectedIndex == 1) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaCristalBl+(precioAumento*18);
//     } else if (selectMedidasEsf.selectedIndex == 19 && selectMaterial.selectedIndex == 2) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaAr+(precioAumento*18);
//     } else if (selectMedidasEsf.selectedIndex == 19 && selectMaterial.selectedIndex == 3) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaBlue+(precioAumento*18);
//     } else if (selectMedidasEsf.selectedIndex == 19 && selectMaterial.selectedIndex == 4) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateAr+(precioAumento*18);
//     } else if (selectMedidasEsf.selectedIndex == 19 && selectMaterial.selectedIndex == 5) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateBlue+(precioAumento*18);
//     } else if (selectMedidasEsf.selectedIndex == 19 && selectMaterial.selectedIndex == 6) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaFotocromatica+(precioAumento*18);
//     } else if (selectMedidasEsf.selectedIndex == 19 && selectMaterial.selectedIndex == 7) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransition+(precioAumento*18);
//     } else if (selectMedidasEsf.selectedIndex == 19 && selectMaterial.selectedIndex == 8) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionAr+(precioAumento*18);
//     } else if (selectMedidasEsf.selectedIndex == 19 && selectMaterial.selectedIndex == 9) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaTransitionBlue+(precioAumento*18);
//     } else if (selectMedidasEsf.selectedIndex == 19 && selectMaterial.selectedIndex == 10) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalAr+(precioAumento*18);
//     } else if (selectMedidasEsf.selectedIndex == 19 && selectMaterial.selectedIndex == 11) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhb+(precioAumento*18);
//     } else if (selectMedidasEsf.selectedIndex == 19 && selectMaterial.selectedIndex == 12) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioCristalPhgPhbAr+(precioAumento*18);
//     }

//     precio.textContent = "Precio: s/." + precioFinal;
// }

// function precioLunasCil() {
//     console.log(selectMedidasCil.selectedIndex, selectMaterial.selectedIndex);
//     if (selectMedidasCil.selectedIndex == 1 && selectMaterial.selectedIndex == 1) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaCristalBl;
//     } else if (selectMedidasCil.selectedIndex == 1 && selectMaterial.selectedIndex == 2) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaAr;
//     } else if (selectMedidasCil.selectedIndex == 1 && selectMaterial.selectedIndex == 3) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaBlue;
//     } else if (selectMedidasCil.selectedIndex == 1 && selectMaterial.selectedIndex == 4) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateAr;
//     } else if (selectMedidasCil.selectedIndex == 1 && selectMaterial.selectedIndex == 5) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateBlue;
//     } else if (selectMedidasCil.selectedIndex == 1 && selectMaterial.selectedIndex == 6) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaFotocromatica;
//     }

//     if (selectMedidasCil.selectedIndex == 2 && selectMaterial.selectedIndex == 1) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaCristalBl+precioAumentoCil;
//     } else if (selectMedidasCil.selectedIndex == 2 && selectMaterial.selectedIndex == 2) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaAr+precioAumentoCil;
//     } else if (selectMedidasCil.selectedIndex == 2 && selectMaterial.selectedIndex == 3) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaBlue+precioAumentoCil;
//     } else if (selectMedidasCil.selectedIndex == 2 && selectMaterial.selectedIndex == 4) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateAr+precioAumentoCil;
//     } else if (selectMedidasCil.selectedIndex == 2 && selectMaterial.selectedIndex == 5) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateBlue+precioAumentoCil;
//     } else if (selectMedidasCil.selectedIndex == 2 && selectMaterial.selectedIndex == 6) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaFotocromatica+precioAumentoCil;
//     }

//     if (selectMedidasCil.selectedIndex == 3 && selectMaterial.selectedIndex == 1) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaCristalBl+(precioAumentoCil*2);
//     } else if (selectMedidasCil.selectedIndex == 3 && selectMaterial.selectedIndex == 2) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaAr+(precioAumentoCil*2);
//     } else if (selectMedidasCil.selectedIndex == 3 && selectMaterial.selectedIndex == 3) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaBlue+(precioAumentoCil*2);
//     } else if (selectMedidasCil.selectedIndex == 3 && selectMaterial.selectedIndex == 4) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateAr+(precioAumentoCil*2);
//     } else if (selectMedidasCil.selectedIndex == 3 && selectMaterial.selectedIndex == 5) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateBlue+(precioAumentoCil*2);
//     } else if (selectMedidasCil.selectedIndex == 3 && selectMaterial.selectedIndex == 6) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaFotocromatica+(precioAumentoCil*2);
//     } 

//     if (selectMedidasCil.selectedIndex == 4 && selectMaterial.selectedIndex == 1) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaCristalBl+(precioAumentoCil*3);
//     } else if (selectMedidasCil.selectedIndex == 4 && selectMaterial.selectedIndex == 2) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaAr+(precioAumentoCil*3);
//     } else if (selectMedidasCil.selectedIndex == 4 && selectMaterial.selectedIndex == 3) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaBlue+(precioAumentoCil*3);
//     } else if (selectMedidasCil.selectedIndex == 4 && selectMaterial.selectedIndex == 4) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateAr+(precioAumentoCil*3);
//     } else if (selectMedidasCil.selectedIndex == 4 && selectMaterial.selectedIndex == 5) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateBlue+(precioAumentoCil*3);
//     } else if (selectMedidasCil.selectedIndex == 4 && selectMaterial.selectedIndex == 6) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaFotocromatica+(precioAumentoCil*3);
//     } 

//     if (selectMedidasCil.selectedIndex == 5 && selectMaterial.selectedIndex == 1) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaCristalBl+(precioAumentoCil*4);
//     } else if (selectMedidasCil.selectedIndex == 5 && selectMaterial.selectedIndex == 2) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaAr+(precioAumentoCil*4);
//     } else if (selectMedidasCil.selectedIndex == 5 && selectMaterial.selectedIndex == 3) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaBlue+(precioAumentoCil*4);
//     } else if (selectMedidasCil.selectedIndex == 5 && selectMaterial.selectedIndex == 4) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateAr+(precioAumentoCil*4);
//     } else if (selectMedidasCil.selectedIndex == 5 && selectMaterial.selectedIndex == 5) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateBlue+(precioAumentoCil*4);
//     } else if (selectMedidasCil.selectedIndex == 5 && selectMaterial.selectedIndex == 6) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaFotocromatica+(precioAumentoCil*4);
//     } 

//     if (selectMedidasCil.selectedIndex == 6 && selectMaterial.selectedIndex == 1) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaCristalBl+(precioAumentoCil*5);
//     } else if (selectMedidasCil.selectedIndex == 6 && selectMaterial.selectedIndex == 2) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaAr+(precioAumentoCil*5);
//     } else if (selectMedidasCil.selectedIndex == 6 && selectMaterial.selectedIndex == 3) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaBlue+(precioAumentoCil*5);
//     } else if (selectMedidasCil.selectedIndex == 6 && selectMaterial.selectedIndex == 4) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateAr+(precioAumentoCil*5);
//     } else if (selectMedidasCil.selectedIndex == 6 && selectMaterial.selectedIndex == 5) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaSensitiveFotomateBlue+(precioAumentoCil*5);
//     } else if (selectMedidasCil.selectedIndex == 6 && selectMaterial.selectedIndex == 6) {
//         precioFinal = 0;
//         precio.textContent = "Precio: s/." + precioFinal;
//         precioFinal += precioResinaFotocromatica+(precioAumentoCil*5);
//     }
// }

// formMedidasMaterial.addEventListener('change', () => {
//     precioLunasCil();
//     precioLunasEsf();
// });

// Tipo de lunas

bifocalPlattop.addEventListener('click', () => {
    if (bifocalPlattop.checked && selectMaterial.selectedIndex <= 3) {
        precioFinal += precioFinal * 0.8;
    } else if (bifocalPlattop.checked && selectMaterial.selectedIndex >= 4) {
        precioFinal += precioFinal * 0.5;
    } else if (!bifocalPlattop.checked && selectMaterial.selectedIndex <= 3) {
        precioFinal += precioFinal * 0.8;
    }

    precio.textContent = "Precio: s/." + precioFinal;
})

bifocalInvisible.addEventListener('click', () => {
    if (bifocalInvisible.checked && selectMaterial.selectedIndex <= 3) {
        precioFinal += (precioFinal * 0.80) + 40;
    } else if (bifocalInvisible.checked && selectMaterial.selectedIndex >= 4) {
        precioFinal += (precioFinal * 0.50) + 40;
    } else{
        location.reload()
    }

    precio.textContent = "Precio: s/." + precioFinal;
})

multifocal.addEventListener('click', () => {
    if (multifocal.checked && selectMaterial.selectedIndex <= 3) {
        precioFinal += precioFinal * 1.8;
    } else if (multifocal.checked && selectMaterial.selectedIndex >= 4) {
        precioFinal += precioFinal * 1;
    } else {
        location.reload()
    }

    precio.textContent = "Precio: s/." + precioFinal;
})

// Precio monturas
// monturaEconomica.addEventListener('click', () => {
//     if (monturaEconomica.checked) {
//         precioFinal += 100;
//     } else {
//         precioFinal -= 100;
//     }

//     precio.textContent = "Precio: s/." + precioFinal;
// })

// monturaCalidad.addEventListener('click', () => {
//     if (monturaCalidad.checked) {
//         precioFinal += 200;
//     } else {
//         precioFinal -= 200;
//     }

//     precio.textContent = "Precio: s/." + precioFinal;
// })

// monturaAltaCalidad.addEventListener('click', () => {
//     if (monturaAltaCalidad.checked) {
//         precioFinal += 400;
//     } else {
//         precioFinal -= 400;
//     }

//     precio.textContent = "Precio: s/." + precioFinal;
// })

