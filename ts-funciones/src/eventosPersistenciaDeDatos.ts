
import { deleteAllCookies, deleteCookie, getCookieValue, setCookie } from 'cookies-utils';

console.log("hola");

// Persistencia de datos
// 1. LocalStorage --> Almacena los datos en el navegador de forma persistida/constante (no se eliminan automaticamente)
// 2. SessionStorage --> los datos persisten en la secion del navegador / instancia del navegador
// 3. Cookies --> tienen una fecha de caducidad y tienen un ambito de URL

// todos estos datos de los tres mencionados son accesibles a travez del navegador


// 1) LocalStorage y SessionStorage(se maneja igual que localStorage):

// 1ro nombramos el nombre de la clave que queremos guardar, 2do nombrmaos la informacion que queremos guardar
localStorage.setItem("nombre", "Lukas");


// debemos nombrar el nombre de la propiedad/clave con la que se guardo la informacion que deseamos
localStorage.getItem("nombre");



// 3) Gestion de las Cookies (nmp i cookies-utils) --> instalamos una libreria para facilitar nuestro uso de las cookies
// https://www.npmjs.com/package/cookies-utils

// more information about the options in documentation https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
const cookieOptions = {
    name: "usuario", // string,
    value: "Lukas", // string,
    maxAge: 10 * 60, // optional number (value in seconds),
    expires: new Date(2099, 10, 1), // optional Date,
    path: "/", // optional string,
    //domain: "site.com", // optional string,
    //secure: true, // optional boolean,
    //sameSite: "lax", // optional enum 'lax' | 'strict' | 'none'
  };
setCookie(cookieOptions); //creamos la cookie

let cookieLeida = getCookieValue("usuario"); // obtenemos la cookie siempre y cuando no haya expirado

deleteCookie("usuario") // elimina la cookie

deleteAllCookies(); // elimina todas las cookies



// Gestion de Eventos

class Temporizador {
    public terminar?: (tiempo: number) => void; //creamos una propiedad publica opcional
    public empezar(): void {
        setTimeout(()=>{  // stTimeout recibe 2 parametros, 1ro un calback --> una funcion que debe ejecutar, 2do el tiempo en el que se debe ejecutar
            if(!this.terminar) return;
            // cuando haya pasado el tiempo se ejecutara la funcion indicada
            this.terminar(Date.now());//imprime la fecha actual
        }, 10000) 
    };
};

const miTemporizador: Temporizador = new Temporizador();

// definimos la funicon del callback a ejecutar cuando termine el tiempo
miTemporizador.terminar = (tiempo: number) => {
    console.log("evento terminado: ", tiempo)
};

// lanzamos el temporizador
miTemporizador.empezar(); // se inicia el timeout y cuando termine se ejecuta la funcion terminar ();

// elimina la ejecucion de una funcion
delete miTemporizador.terminar;



// extender el EventTarget


