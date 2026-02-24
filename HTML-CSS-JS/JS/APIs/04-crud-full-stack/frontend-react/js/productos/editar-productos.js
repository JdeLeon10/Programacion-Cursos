const form = document.getElementById("form-editar");
const loadingMsg = document.getElementById("loading-msg");
const resultBox = document.getElementById("result-box");
const idLabel = document.getElementById("producto-id-label");

// Inputs
const codigoInput = document.getElementById("codigo");
const nombreInput = document.getElementById("nombre");
const categoriaInput = document.getElementById("categoria");
const subCategoriaInput = document.getElementById("sub_categoria");
const marcaInput = document.getElementById("marca");

function mostrarResultado(mensaje, esError = false) {
    resultBox.textContent = mensaje;
    resultBox.className = `result-box show ${esError ? "result-error" : "result-ok"}`;
}

// Obtener ID desde la URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (!id) {
    loadingMsg.textContent = "ID de producto no especificado.";
} else {
    idLabel.textContent = `#${id}`;
    cargarProducto(id);
}

async function cargarProducto(id) {
    try {
        const response = await fetch(`http://localhost:9874/productos/${id}`);

        if (!response.ok) {
            throw new Error("Producto no encontrado");
        }

        const data = await response.json();

        // Llenar formulario
        codigoInput.value = data.codigo_producto;
        nombreInput.value = data.nombre_producto;
        categoriaInput.value = data.categoria;
        subCategoriaInput.value = data.sub_categoria;
        marcaInput.value = data.marca;

        loadingMsg.classList.add("is-hidden");
        form.classList.remove("is-hidden");

    } catch (error) {
        loadingMsg.textContent = "Error al cargar producto.";
        console.error(error);
    }
}

// Evento submit (PUT)
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const productoActualizado = {
        codigo_producto: codigoInput.value,
        nombre_producto: nombreInput.value,
        categoria: categoriaInput.value,
        sub_categoria: subCategoriaInput.value,
        marca: marcaInput.value
    };

    try {
        const response = await fetch(`http://localhost:9874/productos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productoActualizado)
        });

        if (!response.ok) {
            throw new Error("Error al actualizar");
        }

        mostrarResultado("Producto actualizado correctamente");

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);

    } catch (error) {
        mostrarResultado("Error al actualizar producto", true);
        console.error(error);
    }
});