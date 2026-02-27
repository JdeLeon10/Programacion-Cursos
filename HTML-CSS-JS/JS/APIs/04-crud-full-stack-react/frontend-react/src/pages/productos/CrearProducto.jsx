import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE } from "../../api";
import ResultBox from "../../components/ResultBox";

export default function CrearProducto() {
  const navigate = useNavigate(); // Hook para redirigir a otra página después de crear el producto
  const [form, setForm] = useState({
    codigo: "",
    nombre: "",
    categoria: "",
    sub_categoria: "",
    marca: "",
  });
  const [result, setResult] = useState({ message: "", isError: false });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  // POST para crear un nuevo producto
  async function handleSubmit(e) {
    e.preventDefault(); // Evita que el navegador recargue la página al enviar el formulario

    const { codigo, nombre, categoria, sub_categoria, marca } = form;
    if (!codigo || !nombre || !categoria || !sub_categoria || !marca) {
      setResult({
        message: "Todos los campos son obligatorios",
        isError: true,
      });
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/productos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // Indica que el cuerpo de la solicitud es JSON
        body: JSON.stringify({
          // Convierte el objeto JavaScript a una cadena JSON para enviarlo al backend
          codigo_producto: codigo,
          nombre_producto: nombre,
          categoria,
          sub_categoria,
          marca,
        }),
      });

      if (!res.ok) throw new Error();
      setResult({ message: "Producto creado correctamente", isError: false });
      setTimeout(() => navigate("/productos"), 1500); // Redirige a /productos
    } catch {
      setResult({ message: "Error al crear producto", isError: true });
    }
  }

  return (
    <>
      <header className="page-header">
        <div className="breadcrumb-tag">
          <Link to="/" className="breadcrumb-link">
            Inicio
          </Link>
          &nbsp;/&nbsp;
          <Link to="/productos" className="breadcrumb-link">
            Productos
          </Link>
          &nbsp;/&nbsp; Crear
        </div>
        <h1>Nuevo Producto</h1>
      </header>

      <main className="content-area">
        <div className="card-panel">
          <h5>
            <span className="method-badge badge-post">POST</span> &nbsp;Crear
            Producto
          </h5>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="codigo">Código del Producto</label>
                <input
                  type="text"
                  id="codigo"
                  placeholder="PRD-0006"
                  value={form.codigo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="nombre">Nombre del Producto</label>
                <input
                  type="text"
                  id="nombre"
                  placeholder="Leche Descremada 1L"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="categoria">Categoría</label>
                <input
                  type="text"
                  id="categoria"
                  placeholder="Lácteos"
                  value={form.categoria}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="sub_categoria">Sub-categoría</label>
                <input
                  type="text"
                  id="sub_categoria"
                  placeholder="Leche"
                  value={form.sub_categoria}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="marca">Marca</label>
                <input
                  type="text"
                  id="marca"
                  placeholder="Dos Pinos"
                  value={form.marca}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="btn-section">
              <button type="submit" className="btn-primary">
                Guardar Producto
              </button>
              <Link to="/productos" className="btn-secondary">
                Cancelar
              </Link>
            </div>
          </form>

          <ResultBox message={result.message} isError={result.isError} />
        </div>
      </main>
    </>
  );
}
