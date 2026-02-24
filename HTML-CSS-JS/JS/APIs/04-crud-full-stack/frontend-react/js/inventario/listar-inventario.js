// frontend-react/js/inventario/listar.js
// Lista existencias por producto (GET /inventario -> sp_inventario_existencias())

const API_BASE = "http://localhost:9874/inventario"; // Ajusta el puerto si tu backend usa otro

const tbody = document.getElementById("inv-tbody");
const statusLabel = document.getElementById("list-status");

async function listarInventario() {
  try {
    statusLabel.textContent = "Cargando…";

    const resp = await fetch(`${API_BASE}`);
    if (!resp.ok) throw new Error("Error al obtener inventario");

    const rows = await resp.json();

    if (!Array.isArray(rows) || rows.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="3" class="table-feedback-cell">No hay datos de inventario</td>
        </tr>
      `;
      statusLabel.textContent = "0 registros";
      return;
    }

    // Tu SP normalmente devuelve: codigo_producto, nombre_producto, existencia_total
    tbody.innerHTML = rows.map((r) => {
      const codigo = r.codigo_producto ?? r.codigo ?? "—";
      const nombre = r.nombre_producto ?? r.nombre ?? "—";
      const existencia = r.existencia_total ?? r.total ?? r.existencia ?? 0;

      return `
        <tr>
          <td>${escapeHtml(String(codigo))}</td>
          <td>${escapeHtml(String(nombre))}</td>
          <td>${Number(existencia)}</td>
        </tr>
      `;
    }).join("");

    statusLabel.textContent = `${rows.length} productos`;

  } catch (err) {
    console.error(err);
    tbody.innerHTML = `
      <tr>
        <td colspan="3" class="table-feedback-cell error">Error al cargar inventario</td>
      </tr>
    `;
    statusLabel.textContent = "Error";
  }
}

function escapeHtml(str) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

listarInventario();
