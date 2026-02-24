// frontend-react/js/inventario/editar-inventario.js
// Edita una entrada de inventario por código de producto (PUT /inventario/codigo/:codigo)

const API_BASE = "http://localhost:9874/inventario"; // Ajusta el puerto si tu backend usa otro

const form = document.getElementById("form-editar");
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
  return v ? v : null;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const codigoProducto = codigoProductoInput.value.trim();

  const payload = {
    fecha_ingreso: normalizarFecha(fechaIngresoInput.value),
    cantidad: Number(cantidadInput.value),
    costo: Number(costoInput.value),
    fecha_vencimiento: normalizarFecha(fechaVencInput.value)
  };

  if (!codigoProducto) {
    mostrarResultado("El código del producto es obligatorio.", true);
    return;
  }

  if (!payload.fecha_ingreso) {
    mostrarResultado("La fecha de ingreso es obligatoria.", true);
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
    const resp = await fetch(`${API_BASE}/codigo/${encodeURIComponent(codigoProducto)}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await resp.json().catch(() => ({}));

    if (!resp.ok) {
      mostrarResultado(data?.error || "Error al actualizar inventario", true);
      return;
    }

    mostrarResultado("Entrada de inventario actualizada correctamente");

    setTimeout(() => {
      window.location.href = "index-inventario.html";
    }, 1200);

  } catch (err) {
    console.error(err);
    mostrarResultado("No se pudo conectar con el backend.", true);
  }
});
