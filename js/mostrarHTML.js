const resultado = document.querySelector('#resultado')

export function mostrarHTML(mensaje) {
    limpiarHTML()
    resultado.appendChild(mensaje)
}

export function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}