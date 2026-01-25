/*
    Sintaxis del operador ternario en JavaScript
    condicion ? expresionSiVerdadero : expresionSiFalso
*/

// Operador ternario
let edad = 20;
let mensaje = (edad < 18) ? "Eres menor de edad." : "Eres mayor de edad.";
console.log(mensaje);

// Uso del operador ternario para asignar un valor basado en una condición
let esAdulto = (edad >= 18) ? true : false;
console.log("¿Es adulto?", esAdulto);

// Uso del operador ternario dentro de una función
function verificarEdad(edad) {
    return (edad < 18) ? "Menor de edad" : "Mayor de edad";
}
console.log(verificarEdad(16)); // Menor de edad
console.log(verificarEdad(21)); // Mayor de edad