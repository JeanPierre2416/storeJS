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

const mensajeFinal  = "El resultado es FINAL es " + resultadoMenosDiez;
alert(mensajeFinal);



/*---------------CALSE 2---------------*/
/*RESUMEN------------------------*/
/*
1-for = for (Nº de inicio de bucle, hasta cuanto se repetira el bucle, que hace si se cumple bucle-- o ++){lo que hace en N bucle}
*/

/*✏️ Actividad: Sumando varios números */

const cantidad = Number(prompt("Número cifras a sumar"));
var sumatoria = 0;

for(let index = 1; index<= cantidad; index++){
    const numeroAsumar = Number(prompt("Ingrese numero a sumar (" + index + ")"))
    sumatoria = sumatoria + numeroAsumar
}

alert(sumatoria)