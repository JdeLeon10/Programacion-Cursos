// 1. Escribe un comentario en una línea
// Comentario de una línea

// 2. Escribe un comentario en varias líneas
/*
  Comentario
  de varias líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let string = "Hola";
let number = 42;
let boolean = true;
let undefinedValue;
let nullValue = null;
let symbol = Symbol("symbol");
let bigInt = 1234567890123456789012345678901234567890n;

// 4. Imprime por consola el valor de todas las variables
console.log(string);
console.log(number);
console.log(boolean);
console.log(undefinedValue);
console.log(nullValue);
console.log(symbol);
console.log(bigInt);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof string);
console.log(typeof number);
console.log(typeof boolean);
console.log(typeof undefinedValue);
console.log(typeof nullValue);
console.log(typeof symbol);
console.log(typeof bigInt);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
string = "Adiós";
number = 24;
boolean = false;
undefinedValue = undefined;
nullValue = null;
symbol = Symbol("otro símbolo");
bigInt = 9876543210987654321098765432101234567890n;

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
string = 100;
number = "Cuarenta y dos";
boolean = "true";
undefinedValue = null;
nullValue = undefined;
symbol = "No es un símbolo";
bigInt = "No es un BigInt";

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const constString = "Constante";
const constNumber = 3.14;
const constBoolean = false;
const constUndefined = undefined;
const constNull = null;
const constSymbol = Symbol("constante");
const constBigInt = 1234567890123456789012345678901234567890n;

// 9. A continuación, modifica los valores de las constantes
// Esto da error porque las constantes no pueden ser reasignadas
