const formMedidasMaterial = document.querySelector('#formMedidasMaterial');
const formMontura = document.querySelector('#formMontura');
const formTipo = document.querySelector('#formTipo');

const selectMedidasEsf = document.querySelector('#selectMedidasEsf');
const selectMedidasCil = document.querySelector('#selectMedidasCil');
const selectMaterial = document.querySelector('#selectMaterial');
const selectTipo = document.querySelector('#selectTipo');

const lenteContacto = document.getElementById('lenteContacto');
const altoIndice = document.getElementById('altoIndice');

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
let precioLenteContacto = 0;
let precioAltoIndice = 0;

const preciosBases = {
    resinaBl: 100,
    resinaAr: 160,
    resinaBlue: 220,
    resinaSenAr: 280,
    resinaSenBlue: 340,
    resinaFoto: 630,
    resinaTransBlue: 900,
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
    
    // Precios por medidas
    if (claseLunas >= 0) {
        // Lunas esfericas
        if (medidasEsf == 'clase0') {
            precioMedida = 0;
            precioMedida = preciosBases[material];
            
            precioFinal();
            
        } else if (medidasEsf == 'clase1') {
            precioMedida = 0;
            precioMedida += precioAumento + preciosBases[material];
    
            precioFinal();
        } else if (medidasEsf == 'clase2') {
            precioMedida = 0;
            precioMedida += precioAumento * 2 + preciosBases[material];
            
            precioFinal();
        } else if (medidasEsf == 'clase3') {
            precioMedida = 0;
            precioMedida += precioAumento * 3 + preciosBases[material];
            
            precioFinal();
        } else if (medidasEsf == 'clase4') {
            precioMedida = 0;
            precioMedida += precioAumento * 4 + preciosBases[material];

            precioFinal();
        } else if (medidasEsf == 'clase5') {
            precioMedida = 0;
            precioMedida += precioAumento * 5 + preciosBases[material];

            precioFinal();
             //* Multiplico el precio si supera la clase 6
        } else if (medidasEsf == 'clase6') {
            precioMedida = 0;
            precioMedida += (precioAumento * 6) * 2 + preciosBases[material];
            
            precioFinal();
        } else if (medidasEsf == 'clase7') {
            precioMedida = 0;
            precioMedida += (precioAumento * 7) * 2 + preciosBases[material];

            precioFinal();
        } else if (medidasEsf == 'clase8') {
            precioMedida = 0;
            precioMedida += (precioAumento * 8) * 3 + preciosBases[material];

            precioFinal();
        } else if (medidasEsf == 'clase9') {
            precioMedida = 0;
            precioMedida += (precioAumento * 9) * 3 + preciosBases[material];

            precioFinal();
        } else if (medidasEsf == 'clase10') {
            precioMedida = 0;
            precioMedida += (precioAumento * 10) * 3.5 + preciosBases[material];

            precioFinal();
        } else if (medidasEsf == 'clase11') {
            precioMedida = 0;
            precioMedida += (precioAumento * 11) * 3.5 + preciosBases[material];

            precioFinal();
        } else if (medidasEsf == 'clase12') {
            precioMedida = 0;
            precioMedida += (precioAumento * 12) * 3.5 + preciosBases[material];

            precioFinal();
        } else if (medidasEsf == 'clase13') {
            precioMedida = 0;
            precioMedida += (precioAumento * 13) * 4 + preciosBases[material];

            precioFinal();
        } else if (medidasEsf == 'clase14') {
            precioMedida = 0;
            precioMedida += (precioAumento * 14) * 4 + preciosBases[material];

            precioFinal();
        } else if (medidasEsf == 'clase15') {
            precioMedida = 0;
            precioMedida += (precioAumento * 15) * 5 + preciosBases[material];

            precioFinal();
        } else if (medidasEsf == 'clase16') {
            precioMedida = 0;
            precioMedida += (precioAumento * 16) * 5 + preciosBases[material];

            precioFinal();
        } else if (medidasEsf == 'clase17') {
            precioMedida = 0;
            precioMedida += (precioAumento * 17) * 5 + preciosBases[material];

            precioFinal();
        } else if (medidasEsf == 'clase18') {
            precioMedida = 0;
            precioMedida += (precioAumento * 18) * 5 + preciosBases[material];

            precioFinal();
        }
        

        // Medidas cilindricas
        if (medidasCil == 'clase0') {
            precioMedida = 0;
            precioMedida = preciosBases[material];
            
            precioFinal();
        } else if (medidasCil == 'clase1') {
            precioMedida = 0;
            precioMedida += precioAumentoCil + preciosBases[material];

            precioFinal();
        } else if (medidasCil == 'clase2') {
            precioMedida = 0;
            precioMedida += precioAumentoCil * 2 + preciosBases[material];

            precioFinal();
        } else if (medidasCil == 'clase3') {
            precioMedida = 0;
            precioMedida += precioAumentoCil * 3 + preciosBases[material];

            precioFinal();
        } else if (medidasCil == 'clase4') {
            precioMedida = 0;
            precioMedida += precioAumentoCil * 4 + preciosBases[material];

            precioFinal();
        }
    }
}

// Precio lente de contacto
lenteContacto.addEventListener('change', (event) => {
    if (event.target.checked) {
        precioLenteContacto = 0;
        precioLenteContacto += 500;

        precioFinal()
    } else {
            precioLenteContacto = 0;
            precioFinal()
        }
});

window.addEventListener("load", () => { 
    document.getElementById('lenteContacto').addEventListener("click", () => { 
        
        if (!(selectMaterial.value == 'resinaBl')) {
            alert('Agrega el material de Resina Blanca');
            console.log('lo hice');
        }
    });
})
    
function precioFinal() {
    if (porcentajePrecio > 0) {
        // Si el porcentaje de precio o el tipo de luna cambia entonces se usara este calculo, si no es asi. se hara el calculo siguiente.
        precioTotal = (precioMedida * porcentajePrecio / 100) + precioMedida + precioMontura;
        

    } else if(precioAltoIndice > 0) {
        precioTotal = ((precioMedida * porcentajePrecio / 100) + precioMedida + precioMontura) * precioAltoIndice;
        if (porcentajePrecio > 0){
            precioTotal = ((precioMedida * porcentajePrecio / 100) + precioMedida + precioMontura) * precioAltoIndice;

        } else{
            precioTotal = (precioMedida + precioMontura + precioLenteContacto) * precioAltoIndice;
    
        }

    } else{
        precioTotal = precioMedida + precioMontura + precioLenteContacto;
        
    }

    precio.textContent = "Precio: s/." + precioTotal;
}

// Precio con alto indice
altoIndice.addEventListener('change', (event) => {
    if (event.target.checked) {
        precioAltoIndice = 0;
        precioAltoIndice += 1.8;
        precioFinal()
    } else {
            precioAltoIndice = 0;
            precioFinal()
        }
    });

// Precio bifocales
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

    } else if (value == 'sinTipo'){
        porcentajePrecio = 0;
        precioFinal();
    }

    if (value === 'Normal') {
        precioFinal();
    } else if (value === 'Aberracion1') {
        porcentajePrecio = 0;
        porcentajePrecio += 300;
        precioFinal();
    } else if (value === 'Aberracion2') {
        porcentajePrecio = 0;
        porcentajePrecio += 350;
        precioFinal();
    } else if (value === 'Aberracion3') {
        porcentajePrecio = 0;
        porcentajePrecio += 450;
        precioFinal();
    }
});

// Precios monturas
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

