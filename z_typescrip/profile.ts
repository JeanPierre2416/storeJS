// ✏️ Actividad: Declarando el tipo de dato de la variable

// Definición de tipos para las variables
let nombre: string;
let edad: number;
let direccion: string;
let telefono: string;
let email: string;

// Asignación de valores a las variables
nombre = "Juan Pérez";
edad = 30;
direccion = "123 Calle Principal, Ciudad, País";
telefono = "+1234567890";
email = "juan.perez@example.com";

// Definición del objeto data con los datos personales
const data = {
    nombre: nombre,
    edad: edad,
    direccion: direccion,
    telefono: telefono,
    email: email
};

// Definición de los objetos para dos familiares
const familiar1 = {
    nombre: "María Pérez",
    edad: 28,
    direccion: "456 Avenida Secundaria, Ciudad, País",
    telefono: "+0987654321",
    email: "maria.perez@example.com"
};

const familiar2 = {
    nombre: "Carlos Pérez",
    edad: 25,
    direccion: "789 Calle Terciaria, Ciudad, País",
    telefono: "+1122334455",
    email: "carlos.perez@example.com"
};

export { data, familiar1, familiar2 };
