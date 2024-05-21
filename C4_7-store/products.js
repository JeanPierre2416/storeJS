//✏️ Actividad: Venta de productos
// EL OBJETO es una instancia de la CLASE
// Una clase siempre va acompañado de un CONSTRUCTOR y dentro de el van las propiedades
// de la clase 
// Se usa NEW para crear una instancia de una clase
// Dentro de una clse tambien van los METODOS que son acciones que hacen los objetos
// Getters (get): Se utilizan para obtener el valor de una propiedad y pueden incluir lógica adicional.
// Setters (set): Se utilizan para modificar el valor de una propiedad y pueden incluir validaciones o transformaciones.

class Product {
    constructor(id,title,price,stock,images,onsale,supplier){
        this.id =id;
        this.title =title;
        this.price =price;
        this.stock =stock;
        this.images = images;
        this.onsale = onsale;
        this.supplier = supplier;
    }
    get getSupplier () {
    return this.supplier;
    }

    set setSupplier (newName) {
        this.supplier = newName;
    }

    set sellUnits (units) {
        if (this.stock>=units) {
         this.stock = this.stock - units   
        } else {this.stock ="Error: Sin Stock"}
    }
}
const prod1 = new Product()
const prod2 = new Product("ID-2","Laptop",1000)
const prod3 = new Product("ID-3","Laptop",2000,2,"imagen3.jpg",true)
const prod4 = new Product("ID-4","Laptop",4000,4,"imagen4.jpg",false,"Lenovo")
const prod5 = new Product("ID-5","Laptop",8000,12,"imagen5.jpg",true,"Xiaomi")

prod4.supplier = "Huawei"
prod5.sellUnits = 10
prod5.sellUnits = 2
prod5.sellUnits = 4

console.log(prod5)
