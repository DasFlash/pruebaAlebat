console.log(a);
var a = "hola"; // undefined

console.log(b);
let b = "hola"; // la variable no ha sido inicializada

console.log(c);
const c = "hola"; // la variable no ha sido inicializada


sayHi();

function sayHi() {
  console.log("Hola desde sayHi!"); //Hola desde sayHi!
}

function sayBye() {
  console.log("Adios desde sayBye!"); //Adios desde sayBye!
}

sayBye();