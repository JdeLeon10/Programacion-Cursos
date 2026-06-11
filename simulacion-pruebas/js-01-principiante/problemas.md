## Ejercicio 1 — Variables y tipos de datos

Declará tres variables:

Una que guarde tu nombre
Una que guarde tu edad
Una que guarde si estás empleado o no

Luego imprimí en consola el siguiente mensaje usando esas variables:
"Hola, me llamo [nombre], tengo [edad] años y [estoy / no estoy] empleado."

## Ejercicio 2 — Corregir código roto
El siguiente código tiene 3 errores. Encóntralos y corrígelos:

jsConst nombre = "Carlos"
let edad = 25

if edad > 18 {
console.log(nombre + "es mayor de edad")
}

## Ejercicio 3 — FizzBuzz clásico

Escribí una función fizzBuzz(n) que reciba un número y retorne:

- "Fizz" si es divisible por 3
- "Buzz" si es divisible por 5
- "FizzBuzz" si es divisible por ambos
- El número como string si no cumple ninguna condición

**TEST**
console.log(fizzBuzz(3) === "Fizz") // true
console.log(fizzBuzz(5) === "Buzz") // true
console.log(fizzBuzz(15) === "FizzBuzz") // true
console.log(fizzBuzz(7) === "7") // true

## Ejercicio 4 — Función con bucle
Escribí una función sumaHasta(n) que reciba un número entero positivo y retorne la suma de todos los números del 1 hasta n (inclusive).

**TEST**
console.log(sumaHasta(5) === 15) // 1+2+3+4+5
console.log(sumaHasta(10) === 55)
console.log(sumaHasta(1) === 1)

## Ejercicio 5 — Arrays básicos

Dada la siguiente lista de notas de un estudiante:
jsconst notas = [78, 92, 55, 88, 70, 61, 95];

Sin usar métodos de array como filter, map o reduce, escribí el código que:

- Encuentre la nota más alta
- Encuentre la nota más baja
- Calcule el promedio (redondeado a 2 decimales)

Imprimí los tres resultados en consola.

## Ejercicio 6 — Objetos básicos
Creá un objeto persona con las propiedades: nombre, edad, ciudad. Luego escribí una función presentar(persona) que reciba ese objeto y retorne el string:

"Me llamo [nombre], tengo [edad] años y vivo en [ciudad]."

**TEST**
const p = { nombre: "Ana", edad: 30, ciudad: "Guatemala" };
console.log(presentar(p) === "Me llamo Ana, tengo 30 años y vivo en Guatemala.") // true

## Ejercicio 7 — Condicionales anidados
Escribí una función clasificarEdad(edad) que retorne:

"niño" si tiene menos de 13 años
"adolescente" si tiene entre 13 y 17
"adulto" si tiene entre 18 y 64
"adulto mayor" si tiene 65 o más

**TEST**
console.log(clasificarEdad(8) === "niño") // true
console.log(clasificarEdad(15) === "adolescente") // true
console.log(clasificarEdad(30) === "adulto") // true
console.log(clasificarEdad(70) === "adulto mayor") // true
