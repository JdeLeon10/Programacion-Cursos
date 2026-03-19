// Ejercicio de arreglos
const nums = [1, 2, 3, 4, 5];
// Retornar la raiz cuadrada del arreglo
const squaredNums = nums.map((num) => num * num);
console.log(squaredNums); // [1, 4, 9, 16, 25]

const names = ["Alice", "Bob", "Charlie"];
// retornar un arreglo con la primera letra mayuscula
const capitalizedFirstLetter = names.map(
  (name) => name.charAt(0).toUpperCase() + name.slice(1),
  // Primera parte devuelve unicamente A , B , C
  // Segunda parte devuelve el resto de la palabra a partir del indice 1, es decir, lice , ob , harlie
);
console.log(capitalizedFirstLetter); // ["Alice", "Bob", "Charlie"]

// Convertir un arreglo en strings a parrafos de html
const words = ["Hello", "World", "React"];
const paragraps = words.map((word) => `<p>${word}</p>`);
console.log(paragraps); // ["<p>Hello</p>", "<p>World</p>", "<p>React</p>"]
