function clearLine(){
    console.log("")
}

const comidas = [
  { nombre: "Tacos", precio: 50 },
  { nombre: "Hamburguesa", precio: 80 },
  { nombre: "Ensalada", precio: 40 },
  { nombre: "Pizza", precio: 100 },
];

// Acceder al nombre y precio de cada comida
console.log("Imprimiendo comida con forEach")
comidas.forEach((comida) => {
  console.log(`Comida: ${comida.nombre}, Precio: $${comida.precio}`);
});

clearLine();
console.log("Imprimiendo comida con for of")
for(const comida of comidas) {
  console.log(`Comida: ${comida.nombre}, Precio: $${comida.precio}`);
}

// Añadiendo un nuevo objeto
comidas.push({ nombre: "Sushi", precio: 120 });

clearLine();
// Imprimir el arreglo actualizado
console.log("Imprimiendo arreglo")
console.log(comidas)