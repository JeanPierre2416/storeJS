/*RESUMEN------------------------*/
/*
1-.lenght (propiedad) = numero de letras de una frase o palabra
2-toLowerCase() = Transforma toda las palabras a minuscula
3-toUpperCase() = Transforma toda las palabras a mayusculas
*/

/*✏️ Actividad: Determinando la longitud de una palabra/frase */
const frase = prompt("ingrese mensaje");
const cantidad = frase.length;
const mensaje = "La frase tiene " + cantidad + " letras";
alert (mensaje);

/*✏️ Actividad: Cambio de minúsculas/mayúsculas*/

const fraseMinuscula = frase.toLowerCase();
const fraseMayuscula = frase.toUpperCase();

const minMay = fraseMinuscula + " & " + fraseMayuscula;
console.log(minMay);