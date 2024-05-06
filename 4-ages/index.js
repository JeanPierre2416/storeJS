/*--------RESUMEN--------*/
/*
1-if = if (condicion) { ejecuta codigo si cumple condicion}
2-if + else = if (condicion) { ejecuta codigo si cumple condicion} 
                else{de lo contrario ejecuta esto}
3-if + else if + else = if (condicion) { ejecuta codigo si cumple condicion} 
                elseif (condicion) {de lo contrario ejecuta esto}
                else {de lo contrario ejecuta esto}
*/

/*✏️ Actividad: Evaluación con estructura if*/

const edad = Number(prompt("Ingresa tu edad"));

if(edad>18){
    alert("Usted es mayor de edad");
}


/*✏️ Actividad: Evaluación con estructura if/else*/

if(edad>18){
    alert("Usted es mayor de edad");
} else {
    alert("Usted es menor de edad");
}


/*✏️ Actividad: Evaluación de múltiples condiciones*/

if(edad>18){
    alert("Usted es mayor de edad");
} else if (edad>0) {
    alert("Usted es menor de edad");
} else {
    alert("Error");
}