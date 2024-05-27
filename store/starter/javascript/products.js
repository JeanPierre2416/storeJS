// RESUMEN:
// variable NameVariable = [elemento1,elemento2,...,elementoN]
// NameArray [PosicionElemento], devuelve los datos de ese elemento que se encuentra en esa posicion
// NameArray.unshift, AÑADE nuevo elemento a el Array en el PRIMER lugar (0)
// NameArray.push, AÑADE nuevo elemento a el Array en el ULTIMO lugar
// NameArray.shift(), ELIMINA el primer elemento del array


//✏️ Actividad: Listado de productos en la tienda

class Product {
    constructor(image, name, color, price, discount,id){
        this.image = image
        this.name = name
        this.color = color
        this.price = price
        this.discount = discount
        this.id = id
    }
}

const producto1 = new Product('store/starter/assets/mock1.jpg',"laptop Lenovo","Gray",2000,"10%","LAP-01")
const producto2 = new Product('store/starter/assets/mock2.jpg',"laptop Huawei","Gray",3000,"5%","LAP-02")
const producto3 = new Product('store/starter/assets/mock1.jpg',"laptop Xiaomi","Gray",3500,"2%","LAP-03")
const producto4 = new Product('store/starter/assets/mock2.jpg',"laptop Asus","Gray",4000,"1%","LAP-04")
const producto5 = new Product('store/starter/assets/mock1.jpg',"laptop LG","Gray",5000,"1%","LAP-05")
const producto6 = new Product('store/starter/assets/mock2.jpg',"laptop Miray","Gray",6000,"1%","LAP-06")


const productos = [producto1,producto2,producto3,producto4]

console.log(productos)
console.log(productos[1])
console.log(productos[productos.length-1].id)

//✏️ Actividad: Ampliando la lista de productos

productos.unshift(producto5)
productos.push(producto6)
console.log(productos)


//✏️ Actividad: Eliminación de productos de una lista 
productos.shift()
console.log(productos)

//✏️ Actividad: Enriquecimiento de información de productos
//EN PROCESO
