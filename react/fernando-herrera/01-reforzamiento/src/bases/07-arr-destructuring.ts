console.log("");

const characterNames: string[] = ["Goku", "Vegeta", "Trunks"];
const [p1, p2, p3] = characterNames;

console.log(p1.toUpperCase());
console.log(p2.toUpperCase());
console.log(p3.toUpperCase());

const moviesNames = ["Dragon Ball", "Dragon Ball Z", "Dragon Ball GT"];
// Si solo queremos uno de los elementos sin utilizar variables para desperdiciar memoria
const [, m2] = moviesNames;
console.log(m2);

// Se utiliza as const para definir tipos de datos literales, es decir, el tipo de dato es exactamente el valor asignado
const myArray = ["ABC", 123] as const; // <- Esto vuelve la propiedad read only, no puede ser modificada
console.log(myArray[0] + 100);
console.log(myArray[1] + 100);

console.log("");

// Desestructuracion de arrays con tipos literales
const returnsArrayFn = () => {
  return ["ABC", 123] as const;
};

const [letters, numbers] = returnsArrayFn(); // Si no tuviese as const el tipo de returnArrayFn sería (string | number)[]
console.log(letters + 100);
console.log(numbers + 100);
