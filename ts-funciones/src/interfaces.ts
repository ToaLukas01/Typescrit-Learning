
enum Nivel {
    "informativa",
    "urgente",
    "bloqueante"
};

// las interfaces sirven para definir la firma/plantilla y los puntos necesarios a implementar
interface Tarea { // esta interface de "Tarea" va a definir el aspecto y funcionalidades que va a tener aquel que lo utilize
    titulo: string,
    descripcion?: string | undefined, // parametro opcional
    completada: boolean,
    urgencia?: Nivel,
    resumen: () => string // definimos una funcion anonima que devolvera un string cuando se la defina
};

 

// Uso de la interface para crear un objeto:
let bootcamp: Tarea = {
    titulo: "typescript",
    descripcion: "videoclases",
    completada: false,
    urgencia: Nivel.informativa,
    resumen: function (): string {  // definimos la funcion anonima de la interface, que deve devolver un string
        return `${this.titulo} - ${this.descripcion} - ${this.urgencia}`
    }
};


// Uso de la interface para crear Clases:
class Programar implements Tarea {
    titulo: string;
    descripcion?: string | undefined;
    completada: boolean;
    urgencia?: Nivel;
    //resumen: () => string;
    
    constructor(titulo:string, completada:boolean, urgencia?: Nivel, descripcion?: string | undefined){ // inicializamos los valores de las propiedades
        this.titulo = titulo,
        this.descripcion = descripcion,
        this.completada = completada,
        this.urgencia = urgencia
    }

    resumen = ():string => { // definimos la funcion anonima de la interface, que deve devolver un string
        return "tarea de programacion"
    }
};

// creamos una instancia de la clase que implementa una interface
let bootcamp2 = new Programar("Python", true, Nivel.urgente, "AED facu UTN");
console.log(bootcamp2.resumen());


// comparacion entre (Type - Interface - Class):

// Type --> es una manera de crear un typo de dato propio y personalizado,
//          que no llega a la complegidad de una clase, que no requiere de crear instancias, constructores o metodos
//          simplemente son un alacen de datos un poco mas complejos

// Interface --> se utilizan para definir conseptos de valores/atributos que querramos darle,
//               podemos definir que tenga metodos implementados si o si de forma obligatortia

// Class --> son una manera de implenetar las interfaces y typos de datos mas complejos para crear objetos


