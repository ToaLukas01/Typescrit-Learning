

// Funciones

function saludar(nombre: string | undefined){  //declaracion de funcion que recive un argumento que obligatoriamente debe ser un string
    // o de no haber uno da un saludo simple
if(nombre){
console.log("hello e,e ", nombre);
}else {
console.log("hello e,e ");
}
};
const nombrePer: string = "Lukas";
saludar(nombrePer); // invocacion de funcion


function decirAdios(nombre: string = "Alguien"){ // en caso de no llegar un parametro se tomara el valor por defecto de "alguien"
console.log("Adios ", nombre);
};
decirAdios();


function hello(name?: string){ // esta es otra forma de indicar que puede recivir un parametro de forma opcional
console.log("hello...");
};
hello("gabriel");


function variosTipos(a: string | number | boolean){
if(typeof(a)=== "string"){
console.log("Ingresaste un string: ", a);
}
else if(typeof(a)=== "number"){
console.log("Ingresaste un number: ", a);
}
};
variosTipos("Luck");
variosTipos(26);


function fullname(name: string, age: number): string {  // despues de declarar la funcion podemos indicarle con los ":" el tipo de dato que retornara la funcion
return `tu nombre es ${name}, y tienes ${age} años`
};
const fullnombre = fullname("Lukas", 26);




// aqui el parametro "...nombres: string[]" indica que llegara una lista de nombres strings...
// pero la cantidad no esta definida y por eso se utilizan los "..." 

function multiplesNombres(...nombres: string[]): void{ // alqui al especificar que la funcion devuelve ":void" 
//                                                  estamos indicando que explicitamente que la funcion no va a devolver nada
nombres.forEach((name)=>{
console.log(name)
});
};
multiplesNombres("algo");
multiplesNombres("luk", "Luu", "luci");



// ARROW FUNCTIONS

type Humano = { //creamos el tipo de dato persona con las propiedades del typo de dato
nombre: string,
edad: number
};
let persona: Humano = {
nombre: "lukas",
edad: 26,
};
const mostrarPersona = (persona: Humano):string => {
return `nombre:${persona.nombre}, edad:${persona.edad}...`
};
console.log(mostrarPersona(persona));



// FUNCIONES ASINCRONAS

async function atemporal(): Promise<void> { // aqui de forma opcional podemos indicarle que devuelve una promesa, 
    //pero debemos indicar que cosa devolvera la promesa, 
    //en este caso lo definimos con el "<void>" ya que la promesa no devuelva nada concreto
await console.log("ejemplode funcion asincrona");
};

// ejemplo de PROMESA
atemporal().then((respuesta)=>{
console.log("promesa completada, ", respuesta)
}).catch((error)=>{
console.log("hubo un error, ", error)
}).finally(()=>{
console.log("promesa finalizada..")
});




// FUNCIONES GENERADORAS
function* generador(n: number){
// utilizaremos "yield" para emitir valores 
// es como un metodo de subscripcion --> estoy subscripto a esta funcion que me va emitiendo valores
let i = 0;
while(i <= n){
yield i++ //aqui emitimos un valor
}
}
// guardamos la funcion genradora en una variable
let generados = generador(10);
// accedemos a los valores emitidos
console.log(generados.next().value) // ".next" nos devuelve el siguiente valor emitido



