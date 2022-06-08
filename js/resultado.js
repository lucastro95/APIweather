import { mostrarHTML } from "./mostrarHTML.js"

export function mostrarResultado(data) {
    const { main: {temp, temp_min, temp_max}, weather: [{icon, description}],  name} = data;

    const temperatura = Math.round(parseInt(temp) - 273.15)
    const tempmin = Math.round(parseInt(temp_min) - 273.15)
    const tempmax = Math.round(parseInt(temp_max) - 273.15)

    const resultado = document.createElement('div')
    resultado.classList.add('mensaje_resultado')
    resultado.innerHTML = 
    `
    <h1 class='ciudad'>${name}</h1>
    <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="">
    <h1>${temperatura}°</h1>
    <div>
        <p>${tempmax}°</p>
        <p>${tempmin}°</p>
    </div>
    `
    mostrarHTML(resultado)
}