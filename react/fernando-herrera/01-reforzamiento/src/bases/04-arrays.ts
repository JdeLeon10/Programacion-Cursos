const myArray = [1, 2, 3, 4, 5];
const myArray2 = ["Hello", "World", "!", 5, 3, 4, true, false];

const myArray3: number[] = [1, 2, 3, 4, 5];
const myArray4: string[] = ["Hello", "World", "!"];

console.log(myArray);
console.log(myArray2);
console.log(myArray3);
console.log(myArray4);

// Recorrido de elementos de un arrego con forEach
myArray.forEach((element) => {
  console.log(element);
});

console.log("");

// Recorrido de elementos de un arrego con for of
for (const element of myArray) {
  console.log(element);
}

console.log("");

// Spread copia un arreglo para modificar propiededes sin modificar el arreglo original, pero no es una copia profunda, por lo que si hay objetos dentro del arreglo, estos no se copian y no pueden ser modificados
const myArray5 = [...myArray, 6, 7, 8];
console.log({ myArray, myArray5 });

// StructuredClone copia un arreglo para modificar propiededes sin modificar el arreglo original, y es una copia profunda, por lo que si hay objetos dentro del arreglo, estos si se copian y pueden ser modificados
const myArray6 = structuredClone(myArray);
myArray6.push(6, 7, 8);
console.log({ myArray, myArray6 });

console.log("");
