const form = document.getElementById("form-crear");
const resultBox = document.getElementById("result-box");

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

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Crear objeto producto
    const nuevoProducto = {
        codigo_producto: codigoInput.value.trim(),
        nombre_producto: nombreInput.value.trim(),
        categoria: categoriaInput.value.trim(),
        sub_categoria: subCategoriaInput.value.trim(),
        marca: marcaInput.value.trim()
    };

    // Validación básica
    if (
        !nuevoProducto.codigo_producto ||
        !nuevoProducto.nombre_producto ||
        !nuevoProducto.categoria ||
        !nuevoProducto.sub_categoria ||
        !nuevoProducto.marca
    ) {
        mostrarResultado("Todos los campos son obligatorios", true);
        return;
    }

    try {
        const response = await fetch("http://localhost:9874/productos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevoProducto)
        });

        if (!response.ok) {
            throw new Error("Error al crear producto");
        }

        mostrarResultado("Producto creado correctamente");

        // Limpiar formulario
        form.reset();

        // Redirigir después de 1.5 segundos
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);

    } catch (error) {
        console.error(error);
        mostrarResultado("Error al crear producto", true);
    }
});