//<!--EN PROCESO-- ✏️ Actividad: Cantidad de caracteres >

function palindrome (texto){
    var rebanada = texto.split("")
    var reversa = rebanada.reverse()
    var unir = reversa.join("")

    if (unir == texto){
        return true
    } else{
        return false
    }

    //return unir
}

console.log(palindrome("Jean"))
console.log(palindrome("2002"))
console.log(palindrome("Uno"))