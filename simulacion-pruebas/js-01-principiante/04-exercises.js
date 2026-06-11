// Ejercicio 4:
function sumaHasta(num) {
  let resultado = 0;

  for (let i = 1; i <= num; i++) {
    resultado += i;
  }

  return resultado;
}

console.log(sumaHasta(5) === 15); // 1+2+3+4+5
console.log(sumaHasta(10) === 55);
console.log(sumaHasta(1) === 1);
