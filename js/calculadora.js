const container = document.querySelector('.calculadora_container');
const formMaterial = document.querySelector('.form_material');

// tiene monturas
const sinMontura = document.querySelector('#sinMontura');
const economico = document.querySelector('#economico');
const calidad = document.querySelector('#calidad');
const premium = document.querySelector('#premium');

// tipos de lunas
const monofocal = document.querySelector('#monofocal').value;
const bifocalP = document.querySelector('#bifocalP').value;
const bifocalI = document.querySelector('#bifocalI').value;
const multifocal = document.querySelector('#multifocal').value;

// precio monturas
const precioMonturas = {
        sinMontura: 0.1,
        economico: 100,
        calidad: 200,
        premium: 400
};

const check = document.querySelector('#check');

// Crear formularios
const formResina = `<form class="form_resina" id="form_resina">
<label class="label" id="monturas" name="monturas">
Montura: <select name="monturas" id="monturas_select">
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
OD: <select name="od" id="od_signo">
<option value="-">-</option>
<option value="+">+</option>
</select>
<input type="number" name="od_esferico" class="input_medida">
x
<input type="number" name="od_cilindro" class="input_mediad">
</label>
<br>
<label name="oi" id="oi" class="label">
OI: <select name="oi" id="oi_signo">
<option value="-">-</option>
<option value="+">+</option>
</select>
<input type="number" name="oi_esferico" class="input_medida checkOn">
x
<input type="number" name="oi _cilindro" class="input_mediad checkOn">
</label>
<br>
<label name="proteccion" id="proteccion" class="label">
Protección: <select name="proteccion" id="proteccion_select">
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
OD: <select name="od" id="od_signo">
    <option value="-">-</option>
    <option value="+">+</option>
</select>
<input type="number" name="od_esferico" class="input_medida">
x
<input type="number" name="od_cilindro" class="input_mediad">
</label>
<br>
<label name="oi" id="oi" class="label">
OI: <select name="oi" id="oi_signo">
    <option value="-">-</option>
    <option value="+">+</option>
</select>
<input type="number" name="oi_esferico" class="input_medida checkOn">
x
<input type="number" name="oi _cilindro" class="input_mediad checkOn">
</label>
<br>
<label name="proteccion" id="proteccion" class="label">
Protección: <select name="proteccion" id="proteccion_select">
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
<p>Precio: s/360</p>

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

addEventListener('click', (e) => {
    const select = e.target.value;

// Crear form de resina y cristal
    if (select == 'resina') {
        if (!document.getElementById('form_resina')) {
            crearFormResina();
            
            if (!document.getElementById('form_cristal')) {
                return
            } else {
                document.getElementById( 'form_cristal' ).remove();
                document.querySelector('.precio_container').remove();
            }
        }
    } else if (select == 'cristal'){
        if (!document.getElementById('form_cristal')) {
            crearFormCristal();

            if (!document.getElementById('form_resina')) {
                return
            } else {
                document.getElementById( 'form_resina' ).remove();
                document.querySelector('.precio_container').remove();
            }
        }
    }
// Seleccion si tiene o no una montura
    const montura = precioMonturas[select] || precioMonturas;

    if (select == 'on') {
        // document.querySelector('#oi').input;
        console.log(document.querySelectorAll('.checkOn').disabled = true);
    }
});

function crearFormResina() {
    container.insertAdjacentHTML("beforeend", formResina);
    container.insertAdjacentHTML("beforeend", precioHtml);
}

function crearFormCristal() {
    container.insertAdjacentHTML("beforeend", formCristal);
    container.insertAdjacentHTML("beforeend", precioHtml);
}