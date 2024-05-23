//✏️ Actividad: Incluir
// --   EN PROCESO --- 
function stringIncludes (textoOne,textoTwo) {
    evaluaText = textoTwo.split(" ")
    //console.log(evaluaText.length)

    for (let i=0;i<=evaluaText.length-1;i++){
        var tectoOK = evaluaText [i]
        //console.log(tectoOK)
        //console.log(i)
        valorTexto = false

        if  (tectoOK == textoOne){
            valorTexto = tectoOK == textoOne
            return tectoOK
        } 
        
    }

    if  (valorTexto === false){
            return "Palabra no encontrada"
        } 
}
/*Selecionar una etiqueta del HTML*/
const selector = document.getElementById("mensaje");

/*escribir dentro de esa etiqueta con JS*/
selector.innerHTML = stringIncludes("toma","Estos operadores son fundamentales para la toma de decisiones")
