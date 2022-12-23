
class Persona {
    nombre: string;
    apellido: string;
    edad: number;

    constructor(nombre:string, apellido:string, edad:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    //metodos
    saludar(): void {
        console.log("hello");
    }
};

class Empleado extends Persona { // la palaba "extends" genera la herencia entre clases, empleado es una extencion de persona
    sueldo: number;

    constructor(nombre:string, apellido:string, edad:number, sueldo:number){
        super(nombre, apellido, edad); //"super" hace referencia a la clase padre de la que se heredan los atributos
        this.sueldo = sueldo;
    }

    saludar(): void { // este saludar se comporta diferente al slaudar de persona
        super.saludar // llamamos al metodo de la clase padre para utilizarlo
        console.log("tengo un sueldo")
    }
};

class Jefe extends Persona {
    empleados: Empleado[] = [];

    constructor(nombre:string, apellido:string, edad:number) {
        super(nombre, apellido, edad);
    }
};



let empleado1 = new Empleado("lukas", "acuña", 26, 3000);
let empleado2 = new Empleado("gabriel", "ortiz", 26, 3000);
let empleado3 = new Empleado("lila", "gomez", 26, 3000);

empleado1.saludar(); 

let jefe = new Jefe("pablo", "ortiz", 34);
jefe.empleados.push(empleado1, empleado2, empleado3);

jefe.empleados.forEach((empleado: Empleado)=> {
    empleado.saludar();
});