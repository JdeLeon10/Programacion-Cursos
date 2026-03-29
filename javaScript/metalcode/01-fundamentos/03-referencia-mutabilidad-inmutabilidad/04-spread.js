// Spread sirve para clonar objetos o arreglos de manera superficial 

// Clonando un objeto
const frutas = { fruta1: 'Manzana', fruta2: 'Banana' };
const frutasClonadas = { ...frutas }; // Usando spread para clonar
console.log(frutas)
console.log(frutasClonadas)
console.log(frutas === frutasClonadas) // false porque son referencias diferentes

// Modificando el clon no afecta al original
frutasClonadas.fruta1 = 'Naranja';
// const frutasClonadas = {...frutas, fruta1: 'Naranja' }; // Otra forma de modificar al clonar
console.log('Original:', frutas); // { fruta1: 'Manzana', fruta2: 'Banana' }
console.log('Clonado modificado:', frutasClonadas); // { fruta1: 'Naranja', fruta2: 'Banana' }

// Combinando objetos
const deportes = { deporte1: 'Fútbol', deporte2: 'Baloncesto' };
const instrumentos = { instrumento1: 'Guitarra', instrumento2: 'Piano' };
const objetoCombinado = { ...deportes, ...instrumentos };
console.log('Combinado:', objetoCombinado); 
// { deporte1: 'Fútbol', deporte2: 'Baloncesto', instrumento1: 'Guitarra', instrumento2: 'Piano' }

// Clonando un arreglo
const numeros = [1, 2, 3];
const numerosClonados = [...numeros];
console.log(numeros)
console.log(numerosClonados)
console.log(numeros === numerosClonados) // false porque son referencias diferentes

// Modificando el clon no afecta al original
numerosClonados.push(4);
console.log('Original:', numeros); // [1, 2, 3]
console.log('Clonado modificado:', numerosClonados); // [1, 2, 3, 4]

// Combinando arreglos
const masNumeros = [4, 5, 6];
const combinado = [...numeros, ...masNumeros];
console.log('Combinado:', combinado); // [1, 2, 3, 4, 5, 6]