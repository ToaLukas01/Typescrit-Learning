
class Curso {
    nombre: string;
    horas: number;
    constructor(nombre:string, horas:number){
        this.nombre = nombre;
        this.horas = horas
    }
};

class Estudiante {
    //propiedades de clase
    nombre: string;
    apellidos?:string; // esta es una propiedad opcional
    cursos: Curso[];
    private id: string = "12346"; // cuando espcificamos que una propiedad sera PRIVADA, quiere decir que no podra ser accesible desde fuera

    //constructor --> sirven para la inicializacion de valores de propiedades
    constructor(nombre:string, cursos:Curso[], apellidos?:string, ){ //las propiedades opcionales siempre van al final de cualquier funcion
        //inicializamos las propiedades
        this.nombre = nombre;
        this.apellidos = apellidos? apellidos : undefined;
        this.cursos = cursos
    };

    // metodos / funciones que pueden cumplir las instancias de la clase
    get horasDeCursado (): number{ // geter, funcion publica que sirbe para obtener nuevos parametros
        let horas: number = 0;
        this.cursos.forEach((curso:Curso)=> {
            horas += curso.horas
        })
        return horas
    };

    get ID_estudiante():string{
        return this.id
    };

    set modificar_ID(id:string){
        this.id = id
    };
};


// Creamos una instancia/ objeto de una clase
const cursoTS = new Curso("typescript", 15);
const cursoJS: Curso = new Curso("javascript", 30);

const listaCursos: Curso[] = [] //indicamos que sera un arreglo que conenga instancias de la clase "Curso"

listaCursos.push(cursoJS, cursoTS) //[lista de cursos]

//creamos un estudiante
const lukas: Estudiante = new Estudiante("Lukas", listaCursos, "Acuña");
lukas.horasDeCursado; // nos retorna la cantidad de horas de cursado
lukas.modificar_ID

// Saber la instancia de un objeto/variable
// - typeof
// - instanceof

