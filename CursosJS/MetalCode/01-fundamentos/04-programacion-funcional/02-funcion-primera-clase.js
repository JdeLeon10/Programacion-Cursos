// Una funcion de primera clase es una funcion que puede ser tratada como cualquier otra variable y asimismo puede ser pasada como argumento a otras funciones o retornada desde otras funciones

function suma(a, b) {
  return a + b;
}

let operacion = suma; // asignando la funcion suma a una variable operacion

console.log(operacion(4, 7)); // llamando a la funcion a traves de la variable, debe recibir los mismos argumentos

const resta = function(a, b) {
  return a - b;
};
console.log(resta(10, 3));