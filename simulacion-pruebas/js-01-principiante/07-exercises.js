// Ejercicio 7:
function clasificarEdad(edad) {
  if (edad >= 65) return "adulto mayor";
  if (edad >= 18) return "adulto";
  if (edad >= 13) return "adolescente";
  return "niño";
}

console.log(clasificarEdad(8) === "niño"); // true
console.log(clasificarEdad(15) === "adolescente"); // true
console.log(clasificarEdad(30) === "adulto"); // true
console.log(clasificarEdad(70) === "adulto mayor"); // true
