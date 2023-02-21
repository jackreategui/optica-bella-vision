const container = document.querySelector('.calculadora_container');
const formMaterial = document.querySelector('.form_material');
const formTipo = document.querySelector('.form_tipo');

// // tiene monturas
// const sinMontura = document.querySelector('#sinMontura');
// const economico = document.querySelector('#economico');
// const calidad = document.querySelector('#calidad');
// const premium = document.querySelector('#premium');

// tipos de lunas
const monofocal = document.querySelector('#monofocal').value;
const bifocalP = document.querySelector('#bifocalP').value;
const bifocalI = document.querySelector('#bifocalI').value;
const multifocal = document.querySelector('#multifocal').value;

// precio monturas
const precioMonturas = {
    economico: 100,
    calidad: 200,
    premium: 400
};
const sinMontura = 0;

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

const check = document.querySelector('#check');

// Crear formularios
const formResina = `<form class="form_resina" id="form_resina">
<label class="label" id="monturas" name="monturas">
Montura: <select name="monturas" id="monturas_select">
<option value="" disabled selected hidden>Selecciona una opción</option>
<option value="sinMontura" id="sinMontura">Sin montura</option>
<option value="economico" id="economico">Ecónomico</option>
<option value="calidad" id="calidad">Calidad</option>
<option value="premium" id="premium">Premium</option>
</select>
</label>

<p class="titulo">Medidas</p>

<label name="check" id="label_check" class="label">
<input type="checkbox" name="check" id="check" class="input_check"> Usar OD como principal
</label>
<br>
<label name="od" id="od" class="label">
OD:
<input type="number" name="od_esferico" class="input_medida" min="0" step="0.01" id="odEsf">
x
<input type="number" name="od_cilindro" class="input_mediad" min="0" step="0.01" id="odCil">
</label>
<br>
<label name="oi" id="oi" class="label">
OI:
<input type="number" name="oi_esferico" class="input_medida checkOn" min="0" step="0.01" id="oiEsf">
x
<input type="number" name="oi _cilindro" class="input_mediad checkOn" min="0" step="0.01" id="oiCil">
</label>
<br>
<label name="proteccion" id="proteccion" class="label">
Protección: <select name="proteccion" id="proteccion_select">
<option value="" disabled selected hidden>Selecciona una opción</option>
<option value="blanco">Blanco</option>
<option value="ar">Antireflex</option>
<option value="blue">Blue Defense</option>
<option value="fotomate">Fotomate</option>
<option value="fotomateAr">Fotomate AR</option>
<option value="fotomateBlue">Fotomate Blue Defense</option>
<option value="sensitiveAr">Sensitive AR</option>
<option value="sensitiveBlue">Sensitive Blue</option>
<option value="transition">Transition</option>
<option value="transitionAr">Transition AR</option>
<option value="transitionBlue">Transition Blue</option>
</select>
</label>
<br>
<button class="boton_calcular">Calcular precio</button>
    </form>`;
const formCristal = `<form class="form_cristal" id="form_cristal">
<label class="label" id="monturas" name="monturas">
Montura: <select name="monturas" id="monturas_select">
    <option value="" disabled selected hidden>Selecciona una opción</option>
    <option value="sinMontura" id="sinMontura">Sin montura</option>
    <option value="economico" id="economico">Ecónomico</option>
    <option value="calidad" id="calidad">Calidad</option>
    <option value="premium" id="premium">Premium</option>
</select>
</label>

<p class="titulo">Medidas</p>

<label name="check" id="label_check" class="label">
<input type="checkbox" name="check" id="check" class="input_check"> Usar OD como principal
</label>
<br>
<label name="od" id="od" class="label">
OD:
<input type="number" name="od_esferico" class="input_medida" min="0" step="0.01" id="odEsf">
x
<input type="number" name="od_cilindro" class="input_mediad" min="0" step="0.01" id="odCil">
</label>
<br>
<label name="oi" id="oi" class="label">
OI:
<input type="number" name="oi_esferico" class="input_medida checkOn" min="0" step="0.01" id="oiEsf">
x
<input type="number" name="oi _cilindro" class="input_mediad checkOn" min="0" step="0.01" id="oiCil">
</label>
<br>
<label name="proteccion" id="proteccion" class="label">
Protección: <select name="proteccion" id="proteccion_select">
    <option value="" disabled selected hidden>Selecciona una opción</option>
    <option value="blanco">Blanco</option>
    <option value="ar">Antireflex</option>
    <option value="phg">PHG</option>
    <option value="phb">PHB</option>
    <option value="phgAr">PHG AR</option>
    <option value="phbAr">PHB AR</option>
</select>
</label>
<br>
<button class="boton_calcular">Calcular precio</button>
    </form>`
const precioHtml = `<div class="precio_container">
<p id="precioFinal">Precio: s/300</p>

<form class="descuento" id="descuento">
    <label name="descuento">
        <input type="checkbox"> Aplica descuento
    </label>
    <br>
    <label name="cantidadDescuento" class="label" id="cantidadDescuento">
        Porcentaje de descuento: %<input type="number" class="input_descuento" id="input_descuento">
    </label>
</form>
        </div>`

// Creacion de formularios
formMaterial.addEventListener('click', (e) => {
    e.preventDefault();

    const select = e.target.value;

// Crear form de resina y cristal
    if (select == 'resina') {
        if (!document.getElementById('form_resina')) {
            crearFormResina();
            
            if (!document.getElementById('form_cristal')) {
                return
            } else {
                document.getElementById('form_cristal').remove();
                document.querySelector('.precio_container').remove();
            }
        }
    } else if (select == 'cristal') {
        if (!document.getElementById('form_cristal')) {
            crearFormCristal();

            if (!document.getElementById('form_resina')) {
                return
            } else {
                document.getElementById('form_resina').remove();
                document.querySelector('.precio_container').remove();
            }
        }
    }
})

// Seleccion de tipo de luna
formTipo.addEventListener('click', (e) => {
    e.preventDefault();
    const select = e.target.value;
})

function crearFormResina() {
    container.insertAdjacentHTML("beforeend", formResina);
    container.insertAdjacentHTML("beforeend", precioHtml);
}

function crearFormCristal() {
    container.insertAdjacentHTML("beforeend", formCristal);
    container.insertAdjacentHTML("beforeend", precioHtml);
}

setTimeout(() => {
    const btn = document.querySelector('.boton_calcular');
    const monturaSelect = document.querySelector('#monturas_select');
    let precioFinal = document.querySelector('#precioFinal');

    // Seleccion de montura con precio
    monturaSelect.addEventListener('click', (e) => {
        e.preventDefault();
        let select = e.target.value;
        let precioMontura = precioMonturas[select] || sinMontura;

        console.log(precioMontura);
    })

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const odEsf = parseFloat(document.getElementById('odEsf').value);
        const odCil = document.getElementById('odCil').value;
        const oiEsf = document.getElementById('oiEsf').value;
        const oiCil = document.getElementById('oiCil').value;

        precioFinal.textContent = 'Precio: s/';
        console.log(odEsf);
    })

}, 3000);