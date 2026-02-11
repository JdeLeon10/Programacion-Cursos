const arrayBidimensional = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(arrayBidimensional)

// Acceder a un elemento específico
const elemento = arrayBidimensional[1][2]; // 6
console.log(elemento);

// Recorrer el array bidimensional
for (let i = 0; i < arrayBidimensional.length; i++) {
  for (let j = 0; j < arrayBidimensional[i].length; j++) {
    console.log(`Elemento en posición [${i}][${j}]: ${arrayBidimensional[i][j]}`);
  }
}

// Usando for...of para recorrer el array bidimensional
for (const fila of arrayBidimensional) {
  for (const elemento of fila) {
    console.log(`Elemento: ${elemento}`);
  }
}

// Modificar un elemento específico
console.log("Modificando un elemento en especifico")
arrayBidimensional[0][0] = 10; // Cambia el 1 por 10
console.log(arrayBidimensional);

// Agregar una nueva fila
console.log("Agregando una nueva fila")
arrayBidimensional.push([10, 11, 12]);
console.log(arrayBidimensional);

// Agregar un nuevo elemento a una fila existente
console.log("Agregando un nuevo elemento a una fila existente")
arrayBidimensional[1].push(7); // Agrega 7 a la segunda fila
console.log(arrayBidimensional);