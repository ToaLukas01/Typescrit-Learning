
console.log("Aprendiendo TS, hello");

// declaacion de variables:
// no es necesario definir el tipo de dato de las variables, puede ser inferido igual que JavaScrip

// pero cuando se define un tipo de dato..esa variable siempre tenedra ese tipo de dato y NO PODRA CAMBIAR DE TIPO
var nombre: string = "Lukas";
var edad: number = 26;
// NO SE PUEDE HACE ESTO: "nombre = 36", por el tipo a esta definido

var identificador: any = "estudiante"; // el tipo "any" hace que la variable pueda cambiar de tipo
identificador = 1010.1

var error: boolean; // declaramos una variable sin valor inicial pero indicamos el tipo para que no quede con "any"
error = false;

let a:string, b:boolean, c:number // declaracion de varias variavles al mismo tiempo
a = 'texto';
b = true;
c = 21;

// tipos primitivos: numbrer, string, boolean, void, null, undefined



// tipos mas complejos:

// array de strings
let listaTareas: string[] = ['tarea1', 'tarea2']; 

//combinamos tipos en un array
let valores: (string|number|boolean)[] = [false, 'hola', true, 56]; //podemos declarar los tipos de variables que va a poseer el Array



// Enumerados
enum Estados {
    "completado",
    "incompleto",
    "pendiente"
};
let estadoTareas: Estados = Estados.completado;

enum PuestoTrabajo {
    "primero" = 1,
    "segundo" = 2,
    "tercero" = 3
};
let trabajoPuesto: PuestoTrabajo = PuestoTrabajo.primero // al haberle dado un valor a "primero", el valor que tomara esta variable sera el "1" que define a "primero"



// Interfaces --> pensadas para definir propiedad y tipos de funcione so datos que vayan a formar parte de objetos
interface Tarea {
    nombre: string,
    estado: Estados,
    urgencia: number
};
// podemos crear variavles que sigan la interface "Tarea"
let tarea1: Tarea = {
    nombre: "tarea1",
    estado: Estados.pendiente,
    urgencia: 10
};



// podemos generar tipos propios --> a diferencia de las iterfaces estos nos permiten generar tipos mas complejos, generalmete son conjuntos de datos
type Producto = {
    precio: number,
    nombre: string
};
let coche: Producto = {
    nombre: "onda1000",
    precio: 10000000000
};



// switch --> ejemplo
switch (tarea1.estado){
    case Estados.completado:
        console.log("la tarea esta completada");
        break
    case Estados.incompleto:
        console.log("la tarea esta incompleta");
        break
    case Estados.pendiente:
        console.log("la tarea esta pendiente");
        break
    default:
        console.log("la tarea no tiene estado definido");
        break
}

