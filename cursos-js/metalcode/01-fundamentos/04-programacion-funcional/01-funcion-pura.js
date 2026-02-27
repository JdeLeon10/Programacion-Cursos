// Programacion funcional = que queremos , no como lo queremos

// Funcion pura = retornara siempre el mismo valor para los mismos argumentos
function pura(a, b) {
  return a + b; // siempre que se llame con los mismos argumentos devolvera el mismo resultado
}
console.log(pura(5,3));

// Funcion impura = su resultado puede variar dependiendo de factores externos
function impura() {
  return Math.random(); // sera un resultado diferente cada vez
}
console.log(impura());