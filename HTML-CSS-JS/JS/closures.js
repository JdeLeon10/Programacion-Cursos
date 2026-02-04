/*
    Un closure es cuando una funcion "recuerda" las variables de su scope padre, incluso despues de que esa funcion padre haya terminado de ejecutarse.
    Permite acceder al scope de una funcion externa desde una funcion interna.
*/

function crearContador(){
  let cuenta = 0;

  return function(){
    cuenta++
    return cuenta
  }
}

const contador1 = crearContador();
const contador2 = crearContador();

console.log(`Contador 1: ${contador1()}`);
console.log(`Contador 2: ${contador2()}`);
console.log(`Contador 1: ${contador1()}`);
console.log(`Contador 2: ${contador2()}`);
console.log(`Contador 1: ${contador1()}`);
console.log(`Contador 1: ${contador1()}`);

// Closures con parametros
function crearSaludador(saludo) {
  return function(nombre) {
    return saludo + ', ' + nombre + '!'
  }
}

const saludarEnEspanol = crearSaludador('Hola')
const saludarEnIngles = crearSaludador('Hello')
const saludarEnFrances = crearSaludador('Bonjour')

console.log(saludarEnEspanol('Ana'))    // "Hola, Ana!"
console.log(saludarEnIngles('John'))    // "Hello, John!"
console.log(saludarEnFrances('Marie'))  // "Bonjour, Marie!"