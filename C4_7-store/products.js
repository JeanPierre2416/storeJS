//✏️ Actividad: Creación de un producto 1

// Un objeto se declara : TipoDeVariable NameDeObjeto = { Propiedad: Valor,}
// Agregar Propiedad a objeto: NameDeObjeto.NamePropiedad = Valor
// Elimina Propiedad de objeto: delate NameDeObjeto.NamePropiedad

const producto1 = {
    nombre: "celular",
    stock: 1,
    precio: 700,
}

producto1.id = "ID2024-2";
producto1.foto = "celular.jpg"

//delete producto1.stock

console.log(producto1)
console.log(producto1.nombre)


//✏️ Actividad: Creación de un producto 2

class Product {
    constructor(id,title,price,stock,images,onsale){
        this.id =id;
        this.title =title;
        this.price =price;
        this.stock =stock;
        this.images = images;
        this.onsale = onsale;
    }
}

const prod1 = new Product()
const prod2 = new Product("ID-2","Laptop",2000)
const prod3 = new Product("ID-2","Laptop",2000,2,"imagen.jpg",true)
console.log(prod3)

//EN PROCESO
//✏️ Actividad:  Obtención y modificación de propiedades de una instancia