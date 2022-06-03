import { mostrarHTML } from "./mostrarHTML.js"


export function mostrarError(message) {
    const alerta = document.createElement('p')
    alerta.classList.add('mensaje_error')
    alerta.innerText = message
    mostrarHTML(alerta)
}