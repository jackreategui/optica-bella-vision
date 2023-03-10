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

    for (let i = 0; i < medidasPositivas.length; i++) {
        medidaPositiva = medidasPositivas[i];
        
        if (medidaPositiva == odEsfNumber) {
            medidaPositiva = medidasPositivas[i];
        }
    }

    if (odEsfNumber > medidaPositiva || odEsfNumber < medidaNegativa || odCilNumber > medidaPositiva || odCilNumber < medidaNegativa) {
        
        // Lanzar funcion que indique el precio de las lunas solo para el ojo derecho que seria de de 50 soles ya que son medidas menores a 1.25
    } else {
        // En el caso la medida sea mayor a 1.25 o -1.25 el precio aumenta 40 soles, asi con cada dioctria
    }

})

const medidas = [
    {name: 'clase 2', positivo: 1.25, negativo: -1.25},
    {name: 'clase 3', positivo: 2.25, negativo: -2.25},
    {name: 'clase 4', positivo: 3.25, negativo: -3.25},
    {name: 'clase 5', positivo: 4.25, negativo: -4.25},
    {name: 'clase 6', positivo: 5.25, negativo: -5.25},
];

medidas.some((medida) => {
    console.log(medida);
})

const precioLunas = [
    {name: 'resina BL', precio: 50}
]

const medidasPositivas = [
    1.25,
    2.25,
    3.25,
    4.25,
    5.25,
    6.25,
    7.25,
    8.25,
    9.25,
    10.25,
    11.25,
    12.25,
    13.25,
    14.25,
    15.25,
    16.25,
    17.25,
    18.25,
    19.25,
]
const medidasNegativas = [
    -1.25,
    -2.25,
    -3.25,
    -4.25,
    -5.25,
    -6.25,
    -7.25,
    -8.25,
    -9.25,
    -10.25,
    -11.25,
    -12.25,
    -13.25,
    -14.25,
    -15.25,
    -16.25,
    -17.25,
    -18.25,
    -19.25,
]

let medidaPositiva = 0;
let medidaNegativa = 0;



// const medidas = {
//     segunda: 1.25 <= 2,
//     tercera: 2.25 <= 3,
//     cuarta: 3.25 <= 4,
//     quinta: 4.25 <= 5,
//     sexta: 5.25 <= 6,
//     setima: 6.25 <= 7,
//     octava: 7.25 <= 8,
//     novena: 8.25 <= 9,
//     decima: 9.25 <= 10,
//     onceava: 10.25 <= 11,
//     doceava: 11.25 <= 12,
//     decimotercero: 12.25 <= 13,
//     decimocuarto: 13.25 <= 14,
//     decimoquinto: 14.25 <= 15,
//     decimosexto: 15.25 <= 16,
//     decimosetimo: 16.25 <= 17,
//     decimooctavo: 17.25 <= 18,
//     decimonoveno: 18.25 <= 19,
//     vigesimo: 19.25 <= 20,
// }
// const mediasBajas = 0 <= 1;

// Crear formularios
const precios = ``;