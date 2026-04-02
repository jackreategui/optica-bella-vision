/**
 * ============================================================
 * Calculadora de Precios - Óptica Bella Visión
 * ============================================================
 * ESTRUCTURA DEL PRECIO FINAL:
 *   subtotal = precioMedida + recargoTipo + recargoAber + precioMontura + precioLenteContacto
 *   Multiplicador alto índice:
 *     Sin selección o 1.50 → ×1.0 (base, sin aumento)
 *     1.64 → ×1.6 (+60%)
 *     1.74 → ×1.8 (+80%)
 * ============================================================
 */

// -------------------------------------------------------
// 1. REFERENCIAS AL DOM
// -------------------------------------------------------

const formMedidasMaterial = document.querySelector("#formMedidasMaterial")
const formMontura = document.querySelector("#formMontura")
const formTipo = document.querySelector("#formTipo")

const selectMedidasEsf = document.querySelector("#selectMedidasEsf")
const selectMedidasCil = document.querySelector("#selectMedidasCil")
const selectMaterial = document.querySelector("#selectMaterial")
const selectTipo = document.querySelector("#selectTipo")
const selectAberracion = document.querySelector("#selectAberracion")
const selectAltoIndice = document.querySelector("#selectAltoIndice") // Ahora es un <select>

const lenteContacto = document.getElementById("lenteContacto")

const precioDisplay = document.querySelector("#precio")

// -------------------------------------------------------
// 2. TABLAS DE PRECIOS (soles peruanos)
// -------------------------------------------------------

/** Precio base de cada material (par de lunas), sin graduación. */
const preciosBases = {
    resinaBl: 100,
    resinaAr: 160,
    resinaBlue: 220,
    resinaSenAr: 280,
    resinaSenBlue: 340,
    resinaFoto: 630,
    resinaTransBlue: 1025,
    cristalAr: 180,
    cristalPhg: 220,
    cristalPhgAr: 280,
}

/** Precio fijo de cada tipo de montura. */
const preciosMonturas = {
    economico: 100,
    intermedio: 160,
    calidad: 200,
    premium: 400,
}

/** Recargo en soles para bifocales y multifocales (se SUMA, no es porcentaje). */
const recargoTipoLuna = {
    sinTipo: 0,
    bifocalPlattop: 90,
    bifocalInvisible: 120,
    multifocal: 250,
}

/** Recargo en soles por nivel de aberración / calidad de fabricación. */
const recargoAberracion = {
    Normal: 0,
    Aberracion1: 300,
    Aberracion2: 350,
    Aberracion3: 450,
}

// -------------------------------------------------------
// 3. INCREMENTO DE PRECIO POR GRADUACIÓN
// -------------------------------------------------------

const PORCENTAJE_ESF = 0.1 // 10% de aumento por clase esférica sobre el precio base
const PORCENTAJE_CIL = 0.2 // 20% de aumento por clase cilíndrica sobre el precio base

/** Calcula el recargo por clase esférica basado en porcentaje del precio base. */
function calcularRecargoEsf(claseIndex, precioBase) {
    if (claseIndex <= 0) return 0
    return precioBase * PORCENTAJE_ESF * claseIndex
}

/** Calcula el recargo por clase cilíndrica basado en porcentaje del precio base. */
function calcularRecargoCil(claseIndex, precioBase) {
    if (claseIndex <= 0) return 0
    return precioBase * PORCENTAJE_CIL * claseIndex
}

/**
 * Convierte el valor del select (ej. "clase3") en su índice numérico.
 * @returns {number} Índice, o -1 si el valor no es válido.
 */
function claseAIndice(claseStr) {
    if (!claseStr || !claseStr.startsWith("clase")) return -1
    return parseInt(claseStr.replace("clase", ""), 10)
}

// -------------------------------------------------------
// 4. ESTADO GLOBAL DE LA CALCULADORA
// -------------------------------------------------------

let precioMedida = 0 // Precio base del material + recargo de graduación
let precioMontura = 0 // Precio de la montura seleccionada
let precioLenteContacto = 0 // Cargo adicional por lente de contacto

let recargoTipo = 0 // Recargo por tipo de luna (bifocal, multifocal)
let recargoAber = 0 // Recargo por nivel de aberración

/**
 * Retorna el multiplicador de alto índice según el select.
 * 1.50 → 1.0 (base, sin aumento)
 * 1.64 → 1.6 (+60%)
 * 1.74 → 1.8 (+80%)
 */
function getMultiplicadorAltoIndice() {
    if (!selectAltoIndice) return 1.0
    const val = selectAltoIndice.value
    if (val === "1.64") return 3.2
    if (val === "1.74") return 3.6
    return 1.0
}

// -------------------------------------------------------
// 5. SISTEMA DE TOAST DE ERROR (Premium — sin alert())
// -------------------------------------------------------

let toastTimeout = null

/**
 * Muestra un toast de error estilizado en la esquina inferior derecha.
 * Se cierra automáticamente después de 4 segundos.
 */
function mostrarError(mensaje) {
    const toast = document.getElementById("toastError")
    const toastMsg = document.getElementById("toastMessage")
    if (!toast || !toastMsg) return
    toastMsg.textContent = mensaje
    toast.classList.add("show")
    if (toastTimeout) clearTimeout(toastTimeout)
    toastTimeout = setTimeout(() => cerrarToast(), 4000)
}

/** Oculta el toast de error. */
function cerrarToast() {
    const toast = document.getElementById("toastError")
    if (toast) toast.classList.remove("show")
    if (toastTimeout) {
        clearTimeout(toastTimeout)
        toastTimeout = null
    }
}

window.cerrarToast = cerrarToast

// -------------------------------------------------------
// 6. SINCRONIZACIÓN DEL CUSTOM SELECT UI
// -------------------------------------------------------

/**
 * Actualiza el texto y resaltado del custom select UI para que coincida
 * con el valor actual del native select. Llamar siempre que se revierta
 * un select programáticamente.
 * @param {HTMLSelectElement} nativeSelect
 */
function syncCustomSelectUI(nativeSelect) {
    if (!nativeSelect) return
    const wrapper = nativeSelect.parentNode
    if (!wrapper || !wrapper.classList.contains("select-wrapper")) return

    const uiSelect = wrapper.querySelector(".select-custom-ui")
    const uiOptions = wrapper.querySelector(".select-options-ui")
    if (!uiSelect || !uiOptions) return

    const selectedOption = nativeSelect.options[nativeSelect.selectedIndex]
    const selectedText = selectedOption ? selectedOption.text : "Selecciona"
    const span = uiSelect.querySelector("span")
    if (span) span.textContent = selectedText

    uiOptions.querySelectorAll("li").forEach((li, i) => {
        li.classList.toggle("selected", i === nativeSelect.selectedIndex)
    })
}

// Exponer para uso desde el inline script si es necesario
window.syncCustomSelectUI = syncCustomSelectUI

// -------------------------------------------------------
// 7. VALIDACIÓN: ¿Hay al menos una medida seleccionada?
// -------------------------------------------------------

function tieneMedidaSeleccionada() {
    const tieneEsf =
        selectMedidasEsf.value && selectMedidasEsf.value.startsWith("clase")
    const tieneCil =
        selectMedidasCil.value && selectMedidasCil.value.startsWith("clase")
    return tieneEsf || tieneCil
}

// -------------------------------------------------------
// 8. FUNCIÓN PRINCIPAL: CALCULAR Y MOSTRAR PRECIO
// -------------------------------------------------------

function actualizarPrecio() {
    const subtotal =
        precioMedida +
        recargoTipo +
        recargoAber +
        precioMontura +
        precioLenteContacto
    const multiplicador = getMultiplicadorAltoIndice()
    const precioTotal = subtotal * multiplicador

    const precioFormateado = Math.round(precioTotal)

    precioDisplay.textContent = `s/.${precioFormateado}`
    const precioMobile = document.querySelector("#precioMobile")
    if (precioMobile) precioMobile.textContent = `s/.${precioFormateado}`
}

// -------------------------------------------------------
// 9. LISTENER: MEDIDAS Y MATERIAL
// -------------------------------------------------------

formMedidasMaterial.addEventListener("change", (e) => {
    const material = selectMaterial.value
    // Use let so we can update after a revert
    let claseEsfStr = selectMedidasEsf.value
    let claseCilStr = selectMedidasCil.value

    // --- Exclusión mutua ESF ↔ CIL ---
    // When ESF is set and CIL already has a value → revert ESF, keep CIL
    if (e.target === selectMedidasEsf && claseEsfStr && claseCilStr) {
        mostrarError(
            "⚠️ Solo puedes seleccionar Esférico O Cilíndrico a la vez, no ambos simultáneamente.",
        )
        selectMedidasEsf.value = ""
        syncCustomSelectUI(selectMedidasEsf)
        claseEsfStr = "" // Update local var so calculation uses only CIL
    }
    // When CIL is set and ESF already has a value → revert CIL, keep ESF
    else if (e.target === selectMedidasCil && claseCilStr && claseEsfStr) {
        mostrarError(
            "⚠️ Solo puedes seleccionar Esférico O Cilíndrico a la vez, no ambos simultáneamente.",
        )
        selectMedidasCil.value = ""
        syncCustomSelectUI(selectMedidasCil)
        claseCilStr = "" // Update local var so calculation uses only ESF
    }

    // --- Sin medida ni material: reset ---
    if (!material || (!claseEsfStr && !claseCilStr)) {
        precioMedida = 0
        actualizarPrecio()
        return
    }

    const precioBase = preciosBases[material] ?? 0
    const indiceEsf = claseAIndice(claseEsfStr)
    const indiceCil = claseAIndice(claseCilStr)

    // El recargo es la SUMA de esférico + cilíndrico (se cobran independientemente)
    const recargoEsf =
        indiceEsf >= 0 ? calcularRecargoEsf(indiceEsf, precioBase) : 0
    const recargoCil =
        indiceCil >= 0 ? calcularRecargoCil(indiceCil, precioBase) : 0

    precioMedida = precioBase + recargoEsf + recargoCil

    // Si cambio de material y tiene lente de contacto y el material ya no es válido, desactivarlo
    if (material !== "resinaBl" && lenteContacto.checked) {
        lenteContacto.checked = false
        precioLenteContacto = 0
        mostrarError(
            "⚠️ Lente de contacto desmarcado: solo aplica con material Resina/Cristal Blanco.",
        )
    }

    actualizarPrecio()
})

// -------------------------------------------------------
// 10. LISTENER: TIPO DE LUNA, ABERRACIÓN Y CHECKBOXES
// -------------------------------------------------------

formTipo.addEventListener("change", (e) => {
    const valor = e.target.value

    if (e.target === selectTipo) {
        // --- Tipo de luna ---
        if (valor !== "sinTipo" && !tieneMedidaSeleccionada()) {
            mostrarError(
                "⚠️ Selecciona primero una medida esférica o cilíndrica para elegir el tipo de luna.",
            )
            selectTipo.value = "sinTipo"
            syncCustomSelectUI(selectTipo)
            recargoTipo = 0
            actualizarPrecio()
            return
        }
        recargoTipo = recargoTipoLuna[valor] ?? 0

        // Mostrar/ocultar aberraciones solo para Multifocal
        const aberracionesGroup = document.getElementById("aberracionesGroup")
        if (aberracionesGroup) {
            if (valor === "multifocal") {
                aberracionesGroup.classList.remove("hidden")
            } else {
                aberracionesGroup.classList.add("hidden")
                // Resetear aberración al ocultar
                selectAberracion.value = "Normal"
                syncCustomSelectUI(selectAberracion)
                recargoAber = 0
            }
        }

        // Lente de contacto: si se cambió a un tipo no válido, se desmarca y advierte
        if (valor !== "sinTipo" && lenteContacto.checked) {
            lenteContacto.checked = false
            precioLenteContacto = 0
            mostrarError(
                "⚠️ Lente de contacto desmarcado: solo aplica con tipo Monofocal.",
            )
        }
    } else if (e.target === selectAberracion) {
        // --- Calidad / Aberración ---
        if (valor !== "Normal" && !tieneMedidaSeleccionada()) {
            mostrarError(
                "⚠️ Selecciona primero una medida esférica o cilíndrica para elegir el nivel de calidad.",
            )
            selectAberracion.value = "Normal"
            syncCustomSelectUI(selectAberracion)
            recargoAber = 0
            actualizarPrecio()
            return
        }
        recargoAber = recargoAberracion[valor] ?? 0
    } else if (e.target === lenteContacto) {
        // --- Checkbox: Lente de Contacto ---
        if (e.target.checked) {
            if (!tieneMedidaSeleccionada()) {
                mostrarError(
                    "⚠️ Selecciona primero una medida esférica o cilíndrica para agregar lente de contacto.",
                )
                e.target.checked = false
                precioLenteContacto = 0
                actualizarPrecio()
                return
            }
            if (selectMaterial.value !== "resinaBl") {
                mostrarError(
                    "⚠️ No puedes agregar Lente de Contacto. El material debe ser Resina/Cristal Blanco.",
                )
                e.target.checked = false
                precioLenteContacto = 0
                actualizarPrecio()
                return
            }
            if (selectTipo.value !== "sinTipo") {
                mostrarError(
                    "⚠️ No puedes agregar Lente de Contacto. El tipo de luna debe ser Monofocal.",
                )
                e.target.checked = false
                precioLenteContacto = 0
                actualizarPrecio()
                return
            }
            if (selectAltoIndice.value !== "1.50") {
                mostrarError(
                    "⚠️ No puedes agregar Lente de Contacto. El Alto Índice debe ser 1.50 (Estándar).",
                )
                e.target.checked = false
                precioLenteContacto = 0
                actualizarPrecio()
                return
            }
            precioLenteContacto = 500
        } else {
            precioLenteContacto = 0
        }
    } else if (e.target === selectAltoIndice) {
        // --- Select: Alto Índice ---
        if (e.target.value !== "1.50" && !tieneMedidaSeleccionada()) {
            mostrarError(
                "⚠️ Selecciona primero una medida esférica o cilíndrica para activar el alto índice.",
            )
            e.target.value = "1.50"
            syncCustomSelectUI(e.target)
            actualizarPrecio()
            return
        }
        if (e.target.value !== "1.50" && lenteContacto.checked) {
            lenteContacto.checked = false
            precioLenteContacto = 0
            mostrarError(
                "⚠️ Lente de contacto desmarcado: solo aplica con Índice 1.50.",
            )
        }
        // El multiplicador se aplica directamente en actualizarPrecio()
    }

    actualizarPrecio()
})

// -------------------------------------------------------
// 11. LISTENER: MONTURA
// -------------------------------------------------------

formMontura.addEventListener("change", (e) => {
    const value = e.target.value
    precioMontura = preciosMonturas[value] ?? 0
    actualizarPrecio()
})

// -------------------------------------------------------
// 12. INICIALIZACIÓN
// -------------------------------------------------------

actualizarPrecio()
formMedidasMaterial.dispatchEvent(new Event("change"))
formMontura.dispatchEvent(new Event("change"))
formTipo.dispatchEvent(new Event("change"))
