// Paso por referencia vs Paso por valor

// Paso por valor
let numero1 = 10;
let numero2 = numero1; // Se copia el valor
numero2 = 5; // Esto no modifica numero1 ya se que paso el valor unicamente

// Paso por referencia
let objeto1 = { valor: 10 };
let objeto2 = objeto1; // Se copia la referencia
objeto2.valor = 50; // Esto modifica objeto1 porque ambos apuntan al mismo objeto en memoria (referencia)

// Resultados
console.log('numero1:', numero1); // 10
console.log('numero2:', numero2); // 5
console.log('objeto1.valor:', objeto1.valor); // 50
console.log('objeto2.valor:', objeto2.valor); // 50 