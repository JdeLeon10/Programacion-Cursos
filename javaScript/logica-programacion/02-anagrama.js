/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function anagrama(string1, string2) {
  if (string1 === string2) return false;

  const ordenar = (str) => str.toLowerCase().split("").sort().join("");

  return ordenar(string1) === ordenar(string2);
}

console.log(anagrama("frase", "fresa")); // true
console.log(anagrama("amor", "roma")); // true
console.log(anagrama("hola", "adios")); // false
console.log(anagrama("ana", "ana")); // false
