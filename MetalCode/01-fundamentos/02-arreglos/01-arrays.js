const array = [1, 2, 3, 4, 5];

console.log(array); // Imprime el arreglo completo
console.log(`Length: ${array.length}`); // Imprime la longitud del arreglo

// Acceder a elementos individuales
console.log(`First element: ${array[0]}`); // Primer elemento
console.log(`Third element: ${array[2]}`); // Tercer elemento

// Modificar un elemento
array[1] = 20;
console.log(array); // Imprime el arreglo modificado

// Agregar un nuevo elemento al final
array.push(6);
console.log(array); // Imprime el arreglo con el nuevo elemento

// Eliminar el último elemento
let deletedElement = array.pop();
console.log(`Deleted element: ${deletedElement}`);
console.log(array); // Imprime el arreglo después de eliminar el último elemento

// Eliminar el primer elemento
let deletedElement2 = array.shift();
console.log(`Deleted first element: ${deletedElement2}`);
console.log(array); // Imprime el arreglo después de eliminar el primer elemento

// Recorrer el arreglo
for (let i = 0; i < array.length; i++) {
    console.log(`Elemento en el índice ${i}: ${array[i]}`);
}