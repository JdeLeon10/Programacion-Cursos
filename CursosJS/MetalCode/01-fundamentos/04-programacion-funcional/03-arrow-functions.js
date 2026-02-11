// Sintaxis mas simple de una funcion anonima o de primera clase

const resta = function (a, b) {
  return a - b;
};
console.log(resta(10, 3));

// Usando arrow function
const restaArrow = (a, b) => {
  return a - b;
};
console.log(restaArrow(10, 3));

// Si la funcion tiene una sola linea de codigo y retorna un valor, podemos simplificar aun mas la sintaxis eliminando las llaves y el return
const restaSimple = (a, b) => a - b;
console.log(restaSimple(10, 3));

const fn4 = (name, age) => {
    const greeting = `Hola, mi nombre es ${name}`;
    const years = `Tengo ${age} años.`;
    return `${greeting} y ${years}`;
};
console.log(fn4("Jeremy", 24));