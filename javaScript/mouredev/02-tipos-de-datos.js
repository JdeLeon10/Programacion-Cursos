// Tipos de datos primitivos

// Cadenas de texto (string)
let myName = "Jeremy de Leon";
let alias = "Jere";
let email = `jere@gmail.com`;

// Números (number)
let age = 24; // Entero
let height = 1.69; // Decimal

// Booleanos (boolean)
let isDeveloper = true;
let isStudent = false;

// Undefined => No tiene un valor asignado
let undefinedValue;

// Null => No tiene un valor, es intencionalmente vacío
let nullValue = null;

// Symbol
let mySymbol = Symbol("mysymbol");

// BigInt
let myBigInt = BigInt(817239871289371986589716389471628379612983761289376129);
let myBigInt2 = 817239871289371986589716389471628379612983761289376129n;

// Mostramos los tipos de datos
console.log(`Mi nombre es ${myName} y su tipo de dato es ${typeof myName}`);
console.log(`Mi alias es ${alias} y su tipo de dato es ${typeof alias}`);
console.log(`Mi email es ${email} y su tipo de dato es ${typeof email}`);

console.log(`Mi edad es ${age} y su tipo de dato es ${typeof age}`);
console.log(`Mi altura es ${height} y su tipo de dato es ${typeof height}`);

console.log(
  `¿Es desarrollador? ${isDeveloper} y su tipo de dato es ${typeof isDeveloper}`,
);
console.log(
  `¿Es estudiante? ${isStudent} y su tipo de dato es ${typeof isStudent}`,
);

console.log(
  `Valor indefinido: ${undefinedValue} y su tipo de dato es ${typeof undefinedValue}`,
);

console.log(
  `Valor nulo: ${nullValue} y su tipo de dato es ${typeof nullValue}`,
);

console.log(
  `Mi símbolo es ${mySymbol.toString()} y su tipo de dato es ${typeof mySymbol}`,
);

console.log(`Mi BigInt es ${myBigInt} y su tipo de dato es ${typeof myBigInt}`);
console.log(`Mi BigInt2 es ${myBigInt2} y su tipo de dato es ${typeof myBigInt2}`,);
