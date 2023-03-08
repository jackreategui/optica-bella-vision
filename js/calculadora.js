const odEsf = document.querySelector('#odEsf');
const odCil = document.querySelector('#odCil');
const oiEsf = document.querySelector('#oiEsf');
const oiCil = document.querySelector('#oiCil');
const button = document.querySelector('#button');

button.addEventListener('click', (e) => {
    e.preventDefault();
    
    const odEsfNumber = parseFloat(odEsf.value);
    const odCilNumber = parseFloat(odCil.value);
    const oiEsfNumber = parseFloat(oiEsf.value);
    const oiCilNumber = parseFloat(oiCil.value);

    let odMedida = odEsfNumber + odCilNumber;
    let oiMedida = oiEsfNumber + oiCilNumber;

    if (odMedida != 0 && oiMedida != 0) {
        listaDePrecios();
    } else {
        return odEsfNumber, oiEsfNumber;
    }
})

// Precio segun las medidas
const medidas = {
    segunda: 1.25 <= 2,
    tercera: 2.25 <= 3,
    cuarta: 3.25 <= 4,
    quinta: 4.25 <= 5,
    sexta: 5.25 <= 6,
    setima: 6.25 <= 7,
    octava: 7.25 <= 8,
    novena: 8.25 <= 9,
    decima: 9.25 <= 10,
    onceava: 10.25 <= 11,
    doceava: 11.25 <= 12,
    decimotercero: 12.25 <= 13,
    decimocuarto: 13.25 <= 14,
    decimoquinto: 14.25 <= 15,
    decimosexto: 15.25 <= 16,
    decimosetimo: 16.25 <= 17,
    decimooctavo: 17.25 <= 18,
    decimonoveno: 18.25 <= 19,
    vigesimo: 19.25 <= 20,
}
const mediasBajas = 0 <= 1;

// Crear formularios
const precios = ``;