/*✏️ Actividad: Calculando el total a pagar por una compra*/
//  var totalApagar = Number(prompt("Numero de productos a comprar"))

// var totalApagar = 0;
// var numeroProductos = prompt("Numero de Productos a comprar")

// for (let i=1;i<=numeroProductos;i++){

//     let nameProduct = prompt("Nombre de producto");
//     let cantidadAcompar = Number(prompt("Cantidad"));
//     let precioProducto = Number(prompt("Precio"));
//     let subTotal = cantidadAcompar * precioProducto;
//     totalApagar = totalApagar + subTotal;
// }

// mensajeFinal = "El total a pagar es " + totalApagar

// alert(mensajeFinal)



//✏️ Actividad: Cálculo del total de compras diarias
const comprar = () => {
    var totalApagar = 0;
    var numeroProductos = 1

    for (let i=1;i<=numeroProductos;i++){

        let nameProduct = prompt("Nombre de producto");
        let cantidadAcompar = Number(prompt("Cantidad"));
        let precioProducto = Number(prompt("Precio"));
        let subTotal = cantidadAcompar * precioProducto;
        totalApagar = totalApagar + subTotal;
    }
    //mensajeFinal = "El total a pagar es " + totalApagar
    //return mensajeFinal
    return totalApagar
};

const cliente1 = comprar();
const cliente2 = comprar();
const cliente3 = comprar();

const sumaTotal = cliente1 + cliente2 + cliente3;
console.log(sumaTotal)
