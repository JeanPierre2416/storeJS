/*RESUMEN------------------------*/
/*
1-Number (constructor) = transforma la entrada (promp) en número
*/

/*✏️ Actividad: Sumando números */

const valor1 = Number(prompt("Ingrese primer número"));
const valor2 = Number(prompt("Ingrese segundo número"));

const suma = valor1 + valor2;
const mensajeSuma = "El resultado de sumar los valores es: " + suma;
alert(mensajeSuma);

/*✏️ Actividad: Realizando más operaciones*/

const promedio = suma /2;
const triple = promedio * 3;
const resultadoMenosDiez = triple - 10;

const mensajeFinal  = "El resultado es final es " + resultadoMenosDiez;
alert(mensajeFinal);
