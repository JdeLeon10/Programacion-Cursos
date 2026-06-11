// Ejercicio 5:
const notas = [78, 92, 55, 88, 70, 61, 95];

let maxNote = notas[0]; // 78
let minNote = notas[0]; // 78

for (let i = 1; i < notas.length; i++) {
  if (notas[i] > maxNote) maxNote = notas[i];
  if (notas[i] < minNote) minNote = notas[i];
}

console.log(maxNote);
console.log(minNote);

// Promedio
let totalNotas = 0;
for (let i = 0; i < notas.length; i++) {
  totalNotas += notas[i];
}

let promedio = totalNotas / notas.length;
console.log(Number(promedio.toFixed(2)));
