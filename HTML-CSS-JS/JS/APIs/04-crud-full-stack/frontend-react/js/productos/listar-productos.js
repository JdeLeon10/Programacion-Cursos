const tbody = document.getElementById("productos-tbody");
const statusLabel = document.getElementById("list-status");

// Modal elementos
const confirmDialog = document.getElementById("confirm-dialog");
const confirmMsg = document.getElementById("confirm-msg");
const cancelBtn = document.getElementById("cancel-btn");
const confirmBtn = document.getElementById("confirm-btn");

let productoAEliminar = null;

// ============================
// LISTAR PRODUCTOS
// ============================
async function listarProductos() {
    try {
        const response = await fetch("http://localhost:9874/productos");

        if (!response.ok) {
            throw new Error("Error al obtener productos");
        }

        const productos = await response.json();

        if (productos.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="7" class="table-feedback-cell">
                        No hay productos registrados
                    </td>
                </tr>
            `;
            statusLabel.textContent = "0 productos";
            return;
        }

        tbody.innerHTML = productos.map(producto => `
            <tr>
                <td>${producto.id_producto}</td>
                <td>${producto.codigo_producto}</td>
                <td>${producto.nombre_producto}</td>
                <td>${producto.categoria}</td>
                <td>${producto.sub_categoria}</td>
                <td>${producto.marca}</td>
                <td>
                    <a href="editar-productos.html?id=${producto.id_producto}" class="btn-secondary">
                        Editar
                    </a>
                    <button 
                        type="button"
                        class="btn-danger" 
                        data-id="${producto.id_producto}"
                        data-nombre="${producto.nombre_producto}">
                        Eliminar
                    </button>
                </td>
            </tr>
        `).join("");

        statusLabel.textContent = `${productos.length} productos`;

    } catch (error) {
        console.error(error);
        tbody.innerHTML = `
            <tr>
                <td colspan="7" class="table-feedback-cell error">
                    Error al cargar productos
                </td>
            </tr>
        `;
    }
}

// ============================
// ABRIR MODAL
// ============================
tbody.addEventListener("click", (e) => {
    const btn = e.target.closest("button.btn-danger");
    if (!btn) return;

    const id = btn.dataset.id;
    const nombre = btn.dataset.nombre;

    productoAEliminar = id;

    confirmMsg.textContent = `¿Deseas eliminar el producto "${nombre}"?`;
    confirmDialog.classList.add("open");
});

// ============================
// CANCELAR
// ============================
cancelBtn.addEventListener("click", () => {
    confirmDialog.classList.remove("open");
    productoAEliminar = null;
});

// ============================
// CONFIRMAR ELIMINACIÓN
// ============================
confirmBtn.addEventListener("click", async () => {
    if (!productoAEliminar) return;

    try {
        const response = await fetch(
            `http://localhost:9874/productos/${productoAEliminar}`,
            { method: "DELETE" }
        );

        if (!response.ok) {
            throw new Error("Error al eliminar");
        }

        confirmDialog.classList.remove("open");
        productoAEliminar = null;

        listarProductos();

    } catch (error) {
        console.error("Error en DELETE:", error);
    }
});

// ============================
// INICIALIZAR
// ============================
listarProductos();