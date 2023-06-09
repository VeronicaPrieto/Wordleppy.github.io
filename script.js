let intentos = 6;
let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH',"AGAIN","ANGRY","BASES","ABOUT","BEGUN","BELOW","EVERY","DRIVE","FUNNY","GLASS","HORSE","HOTEL","HUMAN","IDEAL","FIANL","MIXED","LUCKY","NURSE"];
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web');
}
window.addEventListener('load', init);

const button = document.getElementById("guess-button");
const input = document.getElementById("guess-input");

function intentar(){
    const intento = input.value.toUpperCase();
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (intento[i]===palabra[i]){ 
            SPAN.innerHTML = intento[i];
            SPAN.style.backgroundColor = "#79b851";
        } 
        else if ( palabra.includes(intento[i]) ) { 
            SPAN.innerHTML = intento[i];
            SPAN.style.backgroundColor = '#f3c237';
        } 
        else {      
            SPAN.innerHTML = intento[i];
            SPAN.style.backgroundColor =  '#a4aec4';
        }
        ROW.appendChild(SPAN)
       
    }
    intentos--;
    GRID.appendChild(ROW)
    if (intento === palabra) {
        terminar('<h1>¡Ganaste!😀</h1>');
    }
    if (intentos == 0){
        terminar("<h1>PERDISTE!😖</h1>")
    }
}

button.addEventListener("click", intentar);

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}
