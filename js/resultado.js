import { mostrarHTML } from "./mostrarHTML.js"

export function mostrarResultado(data) {
    const temp = Math.round(parseInt(data.main.temp) - 273.15)
    const temp_min = Math.round(parseInt(data.main.temp_min) - 273.15)
    const temp_max = Math.round(parseInt(data.main.temp_max) - 273.15)
    console.log(data);
    let urlImg = ''
    if (temp <= 5) {
        urlImg = '../assets/snowflake.png'
    } else if (temp > 5 && temp < 25) {
        urlImg = '../assets/sun.png'
    } else {
        urlImg = '../assets/termometro.png'
    }
    const resultado = document.createElement('div')
    resultado.classList.add('mensaje_resultado')
    resultado.innerHTML = 
    `
    <h1 class='ciudad'>${data.name}</h1>
    <img src="${urlImg}" alt="">
    <h1>${temp}°</h1>
    <div>
        <p>${temp_max}°</p>
        <p>${temp_min}°</p>
    </div>
    `
    mostrarHTML(resultado)
}


// temp, temp_max, temp_min