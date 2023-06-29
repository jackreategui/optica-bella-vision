const formMedidasMaterial = document.querySelector('#formMedidasMaterial');
const formMontura = document.querySelector('#formMontura');
const formTipo = document.querySelector('#formTipo');

const selectMedidasEsf = document.querySelector('#selectMedidasEsf');
const selectMedidasCil = document.querySelector('#selectMedidasCil');
const selectMaterial = document.querySelector('#selectMaterial');
const selectTipo = document.querySelector('#selectTipo');

const monturaNo = document.querySelector('#monturaNo');
const monturaEconomica = document.querySelector('#monturaEconomica');
const monturaCalidad = document.querySelector('#monturaCalidad');
const monturaPremium = document.querySelector('#monturaPremium');

const bifocalPlattop = document.querySelector('#bifocalPlattop');
const bifocalInvisible = document.querySelector('#bifocalInvisible');
const multifocal = document.querySelector('#multifocal');

const precio = document.querySelector('#precio');

let precioMedida = 0;
let porcentajePrecio = 0;
let precioMontura = 0;
let precioTotal = 0;

const preciosBases = {
    resinaBl: 100,
    resinaAr: 160,
    resinaBlue: 220,
    resinaSenAr: 280,
    resinaSenBlue: 340,
    resinaFoto: 400,
    resinaTransAr: 520,
    resinaTransBlue: 580,
    cristalAr: 180,
    cristalPhg: 220,
    cristalPhgAr: 280,
};

const preciosMonturas = {
    economico: 100,
    intermedio: 160,
    calidad: 200,
    premium: 400,
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
const precioAumenoTipo = 40;

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
    const medidasEsf = selectMedidasEsf.value;
    const medidasCil = selectMedidasCil.value;
    const material = selectMaterial.value;

    function averiguarClase() {
        for (let i = 0; i < clases.length; i++) {
            if (clases[i] == medidasEsf || clases[i] == medidasCil) {
                claseLunas = clases.indexOf(clases[i]);
            }
        }
    }

    averiguarClase();

    //* Mejorar esto a futuro para hacer el codigo más corto
    // Lo que estoy haciendo aca es validar el material pero no la medida
    if (medidasEsf && material) {
        if (medidasEsf && material == 'resinaBl') {
            precioMedida = preciosBases[material];

            precioFinal();
        } else if (medidasEsf && material == 'resinaAr') {
            precioMedida = preciosBases[material];

            precioFinal();
        } else if (medidasEsf && material == 'resinaBlue') {
            precioMedida = preciosBases[material];

            precioFinal();
        } else if (medidasEsf && material == 'resinaSenAr') {
            precioMedida = preciosBases[material];

            precioFinal();
        } else if (medidasEsf && material == 'resinaSenBlue') {
            precioMedida = preciosBases[material];

            precioFinal();
        } else if (medidasEsf && material == 'resinaFoto') {
            precioMedida = preciosBases[material];

            precioFinal();
        } else if (medidasEsf && material == 'resinaTrans') {
            precioMedida = preciosBases[material];

            precioFinal();
        } else if (medidasEsf && material == 'resinaTransAr') {
            precioMedida = preciosBases[material];

            precioFinal();
        } else if (medidasEsf && material == 'resinaTransAr') {
            precioMedida = preciosBases[material];

            precioFinal();
        } else if (medidasEsf && material == 'resinaTransBlue') {
            precioMedida = preciosBases[material];

            precioFinal();
        } else if (medidasEsf && material == 'cristalAr') {
            precioMedida = preciosBases[material];

            precioFinal();
        } else if (medidasEsf && material == 'cristalPhg') {
            precioMedida = preciosBases[material];

            precioFinal();
        } else if (medidasEsf && material == 'cristalPhgAr') {
            precioMedida = preciosBases[material];

            precioFinal();
        }
    }

    if (medidasCil && material) {
        if (medidasCil && material == 'resinaBl') {

            precioMedida = preciosBases[material];

            precioFinal();
        } else if (medidasCil && material == 'resinaAr') {
            precioMedida = preciosBases[material];

            precioFinal();
        } else if (medidasCil && material == 'resinaBlue') {
            precioMedida = preciosBases[material];

            precioFinal();
        } else if (medidasCil && material == 'resinaSenAr') {
            precioMedida = preciosBases[material];

            precioFinal();
        } else if (medidasCil && material == 'resinaSenBlue') {
            precioMedida = preciosBases[material];

            precioFinal();
        } else if (medidasCil && material == 'resinaFoto') {
            precioMedida = preciosBases[material];

            precioFinal();
        } else if (medidasCil && material == 'resinaTrans') {
            precioMedida = preciosBases[material];

            precioFinal();
        } else if (medidasCil && material == 'resinaTransAr') {
            precioMedida = preciosBases[material];

            precioFinal();
        } else if (medidasCil && material == 'resinaTransAr') {
            precioMedida = preciosBases[material];

            precioFinal();
        } else if (medidasCil && material == 'resinaTransBlue') {
            precioMedida = preciosBases[material];

            precioFinal();
        } else if (medidasCil && material == 'cristalAr') {
            precioMedida = preciosBases[material];

            precioFinal();
        } else if (medidasCil && material == 'cristalPhg') {
            precioMedida = preciosBases[material];

            precioFinal();
        } else if (medidasCil && material == 'cristalPhgAr') {
            precioMedida = preciosBases[material];

            precioFinal();
        }
    }
    
    if (claseLunas > 0) {
        if (medidasEsf == 'clase1') {
            precioMedida += precioAumento;
            precioFinal();
        } else if (medidasEsf == 'clase2') {
            precioMedida += precioAumento * 2;
            precioFinal();
        } else if (medidasEsf == 'clase3') {
            precioMedida += precioAumento * 3;
            precioFinal();
        } else if (medidasEsf == 'clase4') {
            precioMedida += precioAumento * 4;
            precioFinal();
        } else if (medidasEsf == 'clase5') {
            precioMedida += precioAumento * 5;
            precioFinal();
        } else if (medidasEsf == 'clase6') {
            precioMedida += precioAumento * 6;
            precioFinal();
        } else if (medidasEsf == 'clase7') {
            precioMedida += precioAumento * 7;
            precioFinal();
        } else if (medidasEsf == 'clase8') {
            precioMedida += precioAumento * 8;
            precioFinal();
        } else if (medidasEsf == 'clase9') {
            precioMedida += precioAumento * 9;
            precioFinal();
        } else if (medidasEsf == 'clase10') {
            precioMedida += precioAumento * 10;
            precioFinal();
        } else if (medidasEsf == 'clase11') {
            precioMedida += precioAumento * 11;
            precioFinal();
        } else if (medidasEsf == 'clase12') {
            precioMedida += precioAumento * 12;
            precioFinal();
        } else if (medidasEsf == 'clase13') {
            precioMedida += precioAumento * 13;
            precioFinal();
        } else if (medidasEsf == 'clase14') {
            precioMedida += precioAumento * 14;
            precioFinal();
        } else if (medidasEsf == 'clase15') {
            precioMedida += precioAumento * 15;
            precioFinal();
        } else if (medidasEsf == 'clase16') {
            precioMedida += precioAumento * 16;
            precioFinal();
        } else if (medidasEsf == 'clase17') {
            precioMedida += precioAumento * 17;
            precioFinal();
        } else if (medidasEsf == 'clase18') {
            precioMedida += precioAumento * 18;
            precioFinal();
        }
        
        if (medidasCil == 'clase1') {
            precioMedida += precioAumentoCil;
            precioFinal();
        } else if (medidasCil == 'clase2') {
            precioMedida += precioAumentoCil * 2;
            precioFinal();
        } else if (medidasCil == 'clase3') {
            precioMedida += precioAumentoCil * 3;
            precioFinal();
        } else if (medidasCil == 'clase4') {
            precioMedida += precioAumentoCil * 4;
            precioFinal();
        }
    }
}

function precioFinal() {
    if (porcentajePrecio > 0) {
        precioTotal = (precioMedida * porcentajePrecio / 100) + precioMedida + precioMontura;
        // if (selectTipo.selectedIndex === 2) {
        //     precioTotal = (precioMedida * porcentajePrecio / 100) + precioMedida + precioMontura + precioAumenoTipo;
        // }
    } else{
        precioTotal = precioMedida + precioMontura;
    }

    precio.textContent = "Precio: s/." + precioTotal;
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

// bifocalPlattop.addEventListener('click', () => {
//     if (bifocalPlattop.checked == true && selectMaterial.selectedIndex <= 3) {
//         porcentajePrecio += 0.8;
//         precioFinal();
//     } else if (bifocalPlattop.checked == true && selectMaterial.selectedIndex >= 2){
//         porcentajePrecio += 0.5;
//         precioFinal();
//     } else if (bifocalPlattop.checked == false) {
//         porcentajePrecio = 0;
//         precioFinal();
//     }
// })

// bifocalInvisible.addEventListener('click', () => {
//     if (bifocalInvisible.checked == true && selectMaterial.selectedIndex <= 3) {
//         porcentajePrecio += 0.80;
//         precioMedida += 40;
//         precioFinal();
//     } else if (bifocalInvisible.checked == true && selectMaterial.selectedIndex >= 2) {
//         porcentajePrecio += 0.5;
//         precioMedida += 40;
//         precioFinal();
//     } else if (bifocalInvisible.checked == false) {
//         porcentajePrecio = 0;
//         precioAumenoTipo -= 40;
//         precioFinal();
//     }
// })

// multifocal.addEventListener('click', () => {
//     if (multifocal.checked == true && selectMaterial.selectedIndex <= 3) {
//         porcentajePrecio += precioMedida * 1.8;
//         precioFinal();
//     } else if (multifocal.checked == true && selectMaterial.selectedIndex >= 2) {
//         porcentajePrecio += precioMedida * 1;
//         precioFinal();
//     } else if (multifocal.checked == false){
//         porcentajePrecio = 0;
//         precioFinal();
//     }
// })

formTipo.addEventListener('change', (e) => {
    const value = e.target.value;

    if (value == 'bifocalPlattop') {
        porcentajePrecio = 0;
        porcentajePrecio += 90;
        precioFinal();
        // if (selectMedidasEsf.selectedIndex >= 3 || selectMedidasCil.selectedIndex >= 3) {
        //     porcentajePrecio = 0;
        //     porcentajePrecio += 50;
        //     precioFinal();
        // }
    } else if (value == 'bifocalInvisible') {
        porcentajePrecio = 0;
        porcentajePrecio += 120;
        precioFinal();
        // if (selectMedidasEsf.selectedIndex >= 3 || selectMedidasCil.selectedIndex >= 3) {
        //     porcentajePrecio = 0;
        //     porcentajePrecio += 70;
        //     precioFinal();
        // }
    } else if (value == 'multifocal') {
        porcentajePrecio = 0;
        porcentajePrecio += 250;
        precioFinal();
        // if (selectMedidasEsf.selectedIndex >= 3 || selectMedidasCil.selectedIndex >= 3) {
        //     porcentajePrecio = 0;
        //     porcentajePrecio += 220;
        //     precioFinal();
        // }
    } else if (value == 'sinTipo'){
        porcentajePrecio = 0;
        precioFinal();
    }
});

formMontura.addEventListener('change', (e) => {
    const value = e.target.value;

    if (value == 'economico') {
        precioMontura = 0;
        precioMontura += preciosMonturas.economico;
        precioFinal();
    } else if (value == 'intermedio') {
        precioMontura = 0;
        precioMontura += preciosMonturas.intermedio;
        precioFinal();
    } else if (value == 'calidad') {
        precioMontura = 0;
        precioMontura += preciosMonturas.calidad;
        precioFinal();
    } else if (value == 'premium') {
        precioMontura = 0;
        precioMontura += preciosMonturas.premium;
        precioFinal();
    } else if (value == 'monturaNo'){
        precioMontura = 0;
        precioFinal();
    }
});

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

