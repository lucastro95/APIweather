import { consultarAPI } from "./consultaAPI.js";
import { mostrarError } from "./error.js";
import { limpiarHTML } from "./mostrarHTML.js";

const formulario = document.querySelector("#formulario");

window.addEventListener("load", () => {
  formulario.addEventListener("submit", buscarClima);
});

function buscarClima(e) {
  e.preventDefault();
  const ciudad = document.querySelector("#ciudad").value;
  const pais = document.querySelector("#pais").value;

  if(!ciudad || !pais) {
    const alerta = mostrarError('No se pueden enviar inputs vacíos')
    setTimeout(() => {
      limpiarHTML()
    }, 5000)
  } else {
    consultarAPI(ciudad, pais);
  }
}
/* 
Validacion para que no envien input vacios 
Mostrar valores en el DOM 
temp: 283.15
temp_max: 283.15
temp_min: 283.15
Para mostrar en Grados Celcius restar 273.15
Mostrar un cartel de error que dure aprox 5 segundos
*/
