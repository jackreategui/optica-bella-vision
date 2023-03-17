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

function precioLunas() {
    if (selectMedidas.selectedIndex == 1 && selectMaterial.selectedIndex == 1) {   
        precioFinal += 100;
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

