/**
 * ============================================================
 * Calculadora de Precios - Óptica Bella Visión
 * ============================================================
 * ESTRUCTURA DEL PRECIO FINAL:
 *   subtotal = precioMedida + recargoTipo + recargoAber + precioMontura + precioLenteContacto
 *   Si "Alto Índice": precioTotal = subtotal * 1.8
 * ============================================================
 */

// -------------------------------------------------------
// 1. REFERENCIAS AL DOM
// -------------------------------------------------------

const formMedidasMaterial = document.querySelector('#formMedidasMaterial');
const formMontura         = document.querySelector('#formMontura');
const formTipo            = document.querySelector('#formTipo');

const selectMedidasEsf = document.querySelector('#selectMedidasEsf');
const selectMedidasCil = document.querySelector('#selectMedidasCil');
const selectMaterial   = document.querySelector('#selectMaterial');
const selectTipo       = document.querySelector('#selectTipo');
const selectAberracion = document.querySelector('#selectAberracion');

const lenteContacto = document.getElementById('lenteContacto');
const altoIndice    = document.getElementById('altoIndice');

const precioDisplay = document.querySelector('#precio');

// -------------------------------------------------------
// 2. TABLAS DE PRECIOS (soles peruanos)
// -------------------------------------------------------

/** Precio base de cada material (par de lunas), sin graduación. */
const preciosBases = {
    resinaBl:        100,
    resinaAr:        160,
    resinaBlue:      220,
    resinaSenAr:     280,
    resinaSenBlue:   340,
    resinaFoto:      630,
    resinaTransBlue: 900,
    cristalAr:       180,
    cristalPhg:      220,
    cristalPhgAr:    280,
};

/** Precio fijo de cada tipo de montura. */
const preciosMonturas = {
    economico:  100,
    intermedio: 160,
    calidad:    200,
    premium:    400,
};

/** Recargo en soles para bifocales y multifocales (se SUMA, no es porcentaje). */
const recargoTipoLuna = {
    sinTipo:          0,
    bifocalPlattop:   90,
    bifocalInvisible: 120,
    multifocal:       250,
};

/** Recargo en soles por nivel de aberración / calidad de fabricación. */
const recargoAberracion = {
    Normal:      0,
    Aberracion1: 300,
    Aberracion2: 350,
    Aberracion3: 450,
};

// -------------------------------------------------------
// 3. INCREMENTO DE PRECIO POR GRADUACIÓN
// -------------------------------------------------------

const AUMENTO_ESF = 10; // soles de aumento por clase esférica
const AUMENTO_CIL = 20; // soles de aumento por clase cilíndrica

/**
 * Calcula el recargo por clase esférica.
 * Clases 0-5: lineal. 6-7: x2. 8-9: x3. 10-12: x3.5. 13-14: x4. 15+: x5.
 */
function calcularRecargoEsf(claseIndex) {
    if (claseIndex <= 0)  return 0;
    if (claseIndex <= 5)  return AUMENTO_ESF * claseIndex;
    if (claseIndex <= 7)  return AUMENTO_ESF * claseIndex * 2;
    if (claseIndex <= 9)  return AUMENTO_ESF * claseIndex * 3;
    if (claseIndex <= 12) return AUMENTO_ESF * claseIndex * 3.5;
    if (claseIndex <= 14) return AUMENTO_ESF * claseIndex * 4;
    return AUMENTO_ESF * claseIndex * 5;
}

/** Calcula el recargo por clase cilíndrica (incremento lineal). */
function calcularRecargoCil(claseIndex) {
    if (claseIndex <= 0) return 0;
    return AUMENTO_CIL * claseIndex;
}

/**
 * Convierte el valor del select (ej. "clase3") en su índice numérico.
 * @returns {number} Índice, o -1 si el valor no es válido.
 */
function claseAIndice(claseStr) {
    if (!claseStr || !claseStr.startsWith('clase')) return -1;
    return parseInt(claseStr.replace('clase', ''), 10);
}

// -------------------------------------------------------
// 4. ESTADO GLOBAL DE LA CALCULADORA
// -------------------------------------------------------

let precioMedida        = 0;     // Precio base del material + recargo de graduación
let precioMontura       = 0;     // Precio de la montura seleccionada
let precioLenteContacto = 0;     // Cargo adicional por lente de contacto
let esAltoIndice        = false; // Multiplica el subtotal por 1.8

let recargoTipo = 0; // Recargo por tipo de luna (bifocal, multifocal)
let recargoAber = 0; // Recargo por nivel de aberración

// -------------------------------------------------------
// 5. SISTEMA DE TOAST DE ERROR (Premium — sin alert())
// -------------------------------------------------------

let toastTimeout = null; // Para cancelar el cierre automático si se remuestra

/**
 * Muestra un toast de error estilizado en la esquina inferior derecha.
 * Se cierra automáticamente después de 4 segundos.
 * @param {string} mensaje - Texto descriptivo del error.
 */
function mostrarError(mensaje) {
    const toast   = document.getElementById('toastError');
    const toastMsg = document.getElementById('toastMessage');

    if (!toast || !toastMsg) return;

    // Actualizar mensaje y mostrar
    toastMsg.textContent = mensaje;
    toast.classList.add('show');

    // Cancelar cierre previo si el toast ya estaba visible
    if (toastTimeout) clearTimeout(toastTimeout);

    // Cerrar automáticamente después de 4 segundos
    toastTimeout = setTimeout(() => cerrarToast(), 4000);
}

/**
 * Oculta el toast de error. También disponible globalmente para el botón "X".
 */
function cerrarToast() {
    const toast = document.getElementById('toastError');
    if (toast) toast.classList.remove('show');
    if (toastTimeout) {
        clearTimeout(toastTimeout);
        toastTimeout = null;
    }
}

// Exponer funciones al ámbito global para que el onclick del HTML funcione
window.cerrarToast = cerrarToast;

// -------------------------------------------------------
// 6. VALIDACIÓN: ¿Hay al menos una medida seleccionada?
// -------------------------------------------------------

/**
 * Verifica si el usuario ha seleccionado al menos una medida esférica o cilíndrica.
 * @returns {boolean} true si hay medida, false si no.
 */
function tieneMedidaSeleccionada() {
    const tieneEsf = selectMedidasEsf.value && selectMedidasEsf.value.startsWith('clase');
    const tieneCil = selectMedidasCil.value && selectMedidasCil.value.startsWith('clase');
    return tieneEsf || tieneCil;
}

// -------------------------------------------------------
// 7. FUNCIÓN PRINCIPAL: CALCULAR Y MOSTRAR PRECIO
// -------------------------------------------------------

/**
 * Recalcula el precio total y actualiza el display.
 * Fórmula: subtotal = medida + tipo + aberración + montura + lenteContacto
 * Si altoIndice: total = subtotal * 1.8
 */
function actualizarPrecio() {
    const subtotal    = precioMedida + recargoTipo + recargoAber + precioMontura + precioLenteContacto;
    const precioTotal = esAltoIndice ? subtotal * 1.8 : subtotal;

    // Mostrar entero si no tiene decimales, o con 2 decimales si los tiene
    const precioFormateado = Number.isInteger(precioTotal)
        ? precioTotal
        : precioTotal.toFixed(2);

    // Actualizar ambos displays (desktop e móvil)
    precioDisplay.textContent = `s/.${precioFormateado}`;
    const precioMobile = document.querySelector('#precioMobile');
    if (precioMobile) precioMobile.textContent = `s/.${precioFormateado}`;
}

// -------------------------------------------------------
// 8. LISTENER: MEDIDAS Y MATERIAL
// -------------------------------------------------------

/**
 * Recalcula el precio base cada vez que cambia una medida o el material.
 */
formMedidasMaterial.addEventListener('change', () => {
    const material    = selectMaterial.value;
    const claseEsfStr = selectMedidasEsf.value;
    const claseCilStr = selectMedidasCil.value;

    // Sin material o sin medida esférica no hay cálculo
    if (!material || !claseEsfStr) {
        precioMedida = 0;
        actualizarPrecio();
        return;
    }

    const precioBase = preciosBases[material] ?? 0;
    const indiceEsf  = claseAIndice(claseEsfStr);
    const indiceCil  = claseAIndice(claseCilStr);

    // El recargo es la SUMA de esférico + cilíndrico (se cobran independientemente)
    const recargoEsf = calcularRecargoEsf(indiceEsf);
    const recargoCil = indiceCil >= 0 ? calcularRecargoCil(indiceCil) : 0;

    precioMedida = precioBase + recargoEsf + recargoCil;
    actualizarPrecio();
});

// -------------------------------------------------------
// 9. LISTENER: TIPO DE LUNA, ABERRACIÓN Y CHECKBOXES
// -------------------------------------------------------

/**
 * Gestiona cambios en: tipo de luna, calidad/aberración, lente de contacto y alto índice.
 * Valida que haya medida seleccionada antes de aceptar cambios en opciones avanzadas.
 */
formTipo.addEventListener('change', (e) => {
    const valor = e.target.value;

    if (e.target === selectTipo) {
        // --- Tipo de luna (Monofocal / Bifocal / Multifocal) ---
        // Solo se valida si el usuario eligió algo diferente a Monofocal
        if (valor !== 'sinTipo' && !tieneMedidaSeleccionada()) {
            mostrarError('⚠️ Selecciona primero una medida esférica o cilíndrica para elegir el tipo de luna.');
            // Revertir el selector a "Monofocal" para no acumular un cargo sin medida
            selectTipo.value = 'sinTipo';
            recargoTipo = 0;
            actualizarPrecio();
            return;
        }
        recargoTipo = recargoTipoLuna[valor] ?? 0;

    } else if (e.target === selectAberracion) {
        // --- Calidad / Aberración ---
        // Solo se valida si el usuario eligió algo diferente a "Normal"
        if (valor !== 'Normal' && !tieneMedidaSeleccionada()) {
            mostrarError('⚠️ Selecciona primero una medida esférica o cilíndrica para elegir el nivel de calidad.');
            selectAberracion.value = 'Normal';
            recargoAber = 0;
            actualizarPrecio();
            return;
        }
        recargoAber = recargoAberracion[valor] ?? 0;

    } else if (e.target === lenteContacto) {
        // --- Checkbox: Lente de Contacto ---
        if (e.target.checked) {
            if (!tieneMedidaSeleccionada()) {
                mostrarError('⚠️ Selecciona primero una medida esférica o cilíndrica para agregar lente de contacto.');
                e.target.checked = false; // Revertir el checkbox
                precioLenteContacto = 0;
                actualizarPrecio();
                return;
            }
            // Advertencia adicional: este servicio suele requerir resina blanca
            if (selectMaterial.value !== 'resinaBl') {
                mostrarError('⚠️ El lente de contacto generalmente aplica con "Resina/Cristal Blanco". Verifica con un asesor.');
            }
            precioLenteContacto = 500;
        } else {
            precioLenteContacto = 0;
        }

    } else if (e.target === altoIndice) {
        // --- Checkbox: Alto Índice ---
        if (e.target.checked && !tieneMedidaSeleccionada()) {
            mostrarError('⚠️ Selecciona primero una medida esférica o cilíndrica para activar el alto índice.');
            e.target.checked = false; // Revertir el checkbox
            esAltoIndice = false;
            actualizarPrecio();
            return;
        }
        esAltoIndice = e.target.checked;
    }

    actualizarPrecio();
});

// -------------------------------------------------------
// 10. LISTENER: MONTURA
// -------------------------------------------------------

/**
 * Actualiza el precio de la montura al cambiar la selección.
 */
formMontura.addEventListener('change', (e) => {
    const value = e.target.value;
    // Si el valor está en la tabla úsalo; si no (ej. "monturaNo") pon 0
    precioMontura = preciosMonturas[value] ?? 0;
    actualizarPrecio();
});

// -------------------------------------------------------
// 11. INICIALIZACIÓN
// -------------------------------------------------------

// Al cargar la página: sincronizar el precio con las selecciones por defecto
actualizarPrecio();
formMedidasMaterial.dispatchEvent(new Event('change'));
formMontura.dispatchEvent(new Event('change'));
formTipo.dispatchEvent(new Event('change'));
