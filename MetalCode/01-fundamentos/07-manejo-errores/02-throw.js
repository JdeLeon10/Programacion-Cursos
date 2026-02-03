function divide(a, b) {
  if (b === 0) {
    // Arroja un error personalizado indicando que no puede dividirse entre cero
    throw new Error("No puede dividirse entre cero"); 
  }
  return a / b;
}

try {
  // Codigo que resulta en un error
  const result = divide(10, 0);
  console.log(result); // Muestra el resultado si es una operacion valida
} catch (e) {
  console.error("Ha ocurrido un error:", e.message); 
}
