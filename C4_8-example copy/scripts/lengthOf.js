//✏️ Actividad: Conteo de caracteres

function lengthOf (texto){
    if (texto.length>0){
     return texto.length   
    } else{
        return "Invalid input"
    }
    
}

/*Selecionar una etiqueta del HTML*/
const selector = document.getElementById("mensaje");

/*escribir dentro de esa etiqueta con JS*/
selector.innerHTML = lengthOf("Hola")

console.log(lengthOf("Hola"))
console.log(lengthOf("Mundo"))
console.log(lengthOf("Para lelos XD"))