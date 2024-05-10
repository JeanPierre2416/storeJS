/*✏️ Actividad: Función de cálculo de velocidad*/
function calcularVelocidad() {
    var distancia = 10;
    var tiempo = 2;
    var velocidad = distancia * tiempo;

    var mensajeFinal = "La velocidad es " + velocidad;
    console.log(mensajeFinal);
}

calcularVelocidad();
calcularVelocidad();
calcularVelocidad();

/*✏️ Actividad: Función de velocidad dinámica*/

function calcularVelocidad2(distancia,tiempo){
    // var distancia = 10;
    // var tiempo = 2;
    var velocidad = distancia * tiempo;

    var mensajeFinal = "La velocidad es " + velocidad;
    console.log(mensajeFinal);
}


var distanciaPr = Number(prompt("Distancia:"));
var tiempoPr = Number(prompt("Tiempo:"));
var resultado = calcularVelocidad2(distanciaPr,tiempoPr);

//alert(resultado);

//✏️ Actividad: Retorno de velocidad

const calcularVelocidad3 = (distancia, tiempo) => {
    const velocidad = distancia / tiempo;
    console.log("La velocidad del móvil es " + velocidad);
        return velocidad
    }
    
    const velocidad1 = calcularVelocidad3(10,2);
    console.log("La velocidad de Juana es : " + velocidad1);
    const velocidad2 = calcularVelocidad3(10,2);
    console.log("La velocidad de Pepe es : " + velocidad2);
    const velocidad3 = calcularVelocidad3(10,2);
    console.log("La velocidad de Mario es : " + velocidad3);
    