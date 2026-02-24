// frontend-react/js/inventario/crear.js
// Crea una entrada de inventario (POST /inventario)

const API_BASE = "http://localhost:9874/inventario"; // Ajusta el puerto si tu backend usa otro

const form = document.getElementById("form-crear");
const resultBox = document.getElementById("result-box");

// Inputs
const codigoProductoInput = document.getElementById("codigo_producto");
const fechaIngresoInput = document.getElementById("fecha_ingreso");
const cantidadInput = document.getElementById("cantidad");
const costoInput = document.getElementById("costo");
const fechaVencInput = document.getElementById("fecha_vencimiento");

function mostrarResultado(mensaje, esError = false) {
  resultBox.textContent = mensaje;
  resultBox.className = `result-box show ${esError ? "result-error" : "result-ok"}`;
}

function normalizarFecha(v) {
  // input[type=date] ya viene YYYY-MM-DD, pero lo dejamos por claridad
  return v ? v : null;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const payload = {
    codigo_producto: codigoProductoInput.value.trim(),
    fecha_ingreso: normalizarFecha(fechaIngresoInput.value),
    cantidad: Number(cantidadInput.value),
    costo: Number(costoInput.value),
    fecha_vencimiento: normalizarFecha(fechaVencInput.value)
  };

  // Validaciones básicas
  if (!payload.codigo_producto || !payload.fecha_ingreso) {
    mostrarResultado("Código de producto y fecha de ingreso son obligatorios.", true);
    return;
  }
  if (!Number.isFinite(payload.cantidad) || payload.cantidad <= 0) {
    mostrarResultado("La cantidad debe ser un número mayor a 0.", true);
    return;
  }
  if (!Number.isFinite(payload.costo) || payload.costo < 0) {
    mostrarResultado("El costo debe ser un número válido (0 o mayor).", true);
    return;
  }

  try {
    const resp = await fetch(`${API_BASE}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await resp.json().catch(() => ({}));

    if (!resp.ok) {
      // El backend devuelve { error: 'Producto no encontrado' } o similar
      mostrarResultado(data?.error || "Error al crear inventario", true);
      return;
    }

    mostrarResultado(data?.message || "Entrada de inventario creada correctamente");
    form.reset();

    setTimeout(() => {
      window.location.href = "index-inventario.html";
    }, 1200);

  } catch (err) {
    console.error(err);
    mostrarResultado("No se pudo conectar con el backend.", true);
  }
});
