//✏️ Actividad:  Formato de título

function titleFormat (texto){
    texto1 = texto.charAt(0);
    texto1_1= texto1.toUpperCase();
    texto2 = texto.slice(1,texto.lenght);
    texto2_2= texto2.toLowerCase();
    frase = texto1_1 + texto2_2
    //return frase
    return "la palabra " + "'" + frase + "'" + " tiene " + frase.length + " letras"
}

/*Selecionar una etiqueta del HTML*/
const selector = document.getElementById("mensaje");

/*escribir dentro de esa etiqueta con JS*/
selector.innerHTML = titleFormat("Hola munda xd")