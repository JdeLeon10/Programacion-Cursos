// Ejercicio 6:
const persona = {
  nombre: "Jeremy",
  edad: 24,
  ciudad: "Guatemala",
};

const p = { nombre: "Ana", edad: 30, ciudad: "Guatemala" };

function presentar(persona) {
  return `Me llamo ${persona.nombre}, tengo ${persona.edad} años y vivo en ${persona.ciudad}.`;
}

console.log(presentar(persona));
console.log(
  presentar(p) === "Me llamo Ana, tengo 30 años y vivo en Guatemala.",
); // true
