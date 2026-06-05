// Concatenación
let myName = "Jeremy";
let greeting = "Hola, " + myName + "!";
console.log(greeting);
console.log(typeof greeting);

// Longitud
console.log(greeting.length);

// Acceso a caracteres
console.log(greeting[0]);
console.log(greeting[11]);

// Métodos comunes
console.log(greeting.toUpperCase()); // Mayúsculas
console.log(greeting.toLowerCase()); // Minúsculas
console.log(greeting.indexOf("Hola")); // Índice
console.log(greeting.indexOf("Jeremy")); // Índice
console.log(greeting.indexOf("Alejandro")); // Índice
console.log(greeting.includes("Hola")); // Incluye
console.log(greeting.includes("Jeremy"));
console.log(greeting.includes("Alejandro"));
console.log(greeting.slice(0, 10)); // Sección
console.log(greeting.replace("Jeremy", "Alejandro")); // Reemplazo

// Template literals (plantillas literales)

// Strings en varias líneas
let message = `Hola, este
es mi
curso de
JavaScript`;
console.log(message);

// Interpolación de valores
let email = "alejandro@example.com";
console.log(`Hola, ${myName}! Tu email es ${email}.`);

/*
  Slice: Devuelve una sección de una cadena de texto entre dos índices especificados.

  Ejemplo:
  let str = "Hello, World!";
  console.log(str.slice(0, 5)); // Output: "Hello"
  console.log(str.slice(7));    // Output: "World!"
  console.log(str.slice(-6));   // Output: "World!"
*/
