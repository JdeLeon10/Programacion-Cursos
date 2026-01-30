// La mutabilidad se refiere a la capacidad de un objeto para cambiar su estado o contenido después de haber sido creado.
// Los tipos de datos primitivos en JavaScript (números, cadenas, booleanos, null, undefined, símbolos y BigInt) son inmutables.
// Objetos mutables
let objetoMutable = { nombre: 'MetalCode', version: 1.0 };
console.log('Antes de la mutación:', objetoMutable);

// Modificando una propiedad del objeto
objetoMutable.version = 1.1;
console.log('Después de la mutación:', objetoMutable);

// Agregando una nueva propiedad
objetoMutable.autor = 'Jeremy';
console.log('Después de agregar una nueva propiedad:', objetoMutable);