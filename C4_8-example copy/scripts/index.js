/*RESUMEN------------------------*/
/*
1-document.getElementById("mensaje")=Selecionar elemento de HTML
2-.innerHTML = Realiza los cambios en HTML
3-prompt = Pregunta algo al usuario
4-console = imprime algo en la consola
5-alert = Muestra una alerta
*/

/*-------✏️Actividad: Entrada y Salida de datos-------*/

/*Selecionar una etiqueta del HTML*/
const selector = document.getElementById("mensaje");

/*escribir dentro de esa etiqueta con JS*/
selector.innerHTML = "CONEXION EXITOSA ENTRE HTML Y JS"

/*-------✏️Actividad: Guardando datos en una variable-------*/

prompt("Pregunta algo")
console.log("Imprime algo")

const entrada = prompt("¿Que producto desea comprar?")
console.log(entrada)
alert(entrada)

/*-------✏️Actividad: Dando la bienvenida-------*/
const nombre = prompt("¿Cuál es su nombre?")

alert("Te damos la bienvenida " + nombre)

