let selectMedidas = document.querySelector('#selectMedidas');
let selectMedidasValue = selectMedidas.options[selectMedidas.selectedIndex].value;
let selectMaterial = document.querySelector('#selectMaterial');
let selectMaterialValue = selectMaterial.options[selectMaterial.selectedIndex].value;

const monturaEconomica = document.querySelector('#monturaEconomica');
const monturaCalidad = document.querySelector('#monturaCalidad');
const monturaAltaCalidad = document.querySelector('#monturaAltaCalidad');

const bifocalPlattop = document.querySelector('#bifocalPlattop');
const bifocalInvisible = document.querySelector('#bifocalInvisible');
const multifocal = document.querySelector('#multifocal');

const precio = document.querySelector('#precio');

let precioFinal = 0;

function precioLunas() {
    if (selectMedidasValue == 'clase0' && selectMaterialValue == 'resinaBl') {   
        precioFinal += 100;
        
    }

    precio.textContent = "Precio: s/." + precioFinal;
}

selectMedidas.addEventListener('change', precioLunas);
selectMaterial.addEventListener('change', precioLunas);


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

// Tipo de lunas

bifocalPlattop.addEventListener('click', () => {
    if (bifocalPlattop.checked) {
        precioFinal += precioFinal * 0.55;
    } else {
        precioFinal = parseInt(precioFinal / (1 + 55 / 100));
    }

    precio.textContent = "Precio: s/." + precioFinal;
})

bifocalInvisible.addEventListener('click', () => {
    if (bifocalInvisible.checked) {
        precioFinal += precioFinal * 0.6;
    } else {
        precioFinal = parseInt(precioFinal / (1 + 60 / 100));
    }

    precio.textContent = "Precio: s/." + precioFinal;
})

multifocal.addEventListener('click', () => {
    if (multifocal.checked) {
        precioFinal += precioFinal * 0.8;
    } else {
        precioFinal = parseInt(precioFinal / (1 + 80 / 100));
    }

    precio.textContent = "Precio: s/." + precioFinal;
})