import React, { useEffect, useState } from "react";
// useEffect maneja el estado de un componente despues de reenderizar
// useState ejecuta codigo despues de que el compontente cambio o cargue algo
import { Link } from "react-router-dom";
import { API_BASE } from "../../api";
import ConfirmDialog from "../../components/ConfirmDialog";

export default function IndexProductos() {
  const [productos, setProductos] = useState([]);
  const [status, setStatus] = useState("Cargando…");
  const [error, setError] = useState(false);
  const [confirm, setConfirm] = useState({ open: false, id: null, nombre: "" });
  // Sintaxis: const [variable, setVariable(funcion para actualizar)] = useState(valorInicial);

  // GET para listar los productos
  async function listar() {
    try {
      setStatus("Cargando…");
      setError(false);
      const res = await fetch(`${API_BASE}/productos`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      setProductos(data);
      setStatus(`${data.length} productos`);
    } catch {
      setError(true);
      setStatus("Error");
      setProductos([]);
    }
  }

  useEffect(() => {
    listar();
  }, []);

  // Guardar el id y nombre del producto a eliminar para mostrarlo en el dialogo de confirmacion
  function abrirConfirm(id, nombre) {
    setConfirm({ open: true, id, nombre });
  }

  async function eliminar() {
    try {
      const res = await fetch(`${API_BASE}/productos/${confirm.id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error();
      setConfirm({ open: false, id: null, nombre: "" });
      listar();
    } catch {
      setConfirm({ open: false, id: null, nombre: "" });
    }
  }

  return (
    <>
      <header className="page-header">
        <div className="breadcrumb-tag">
          <Link to="/" className="breadcrumb-link">
            Inicio
          </Link>
          &nbsp;/&nbsp; Productos
        </div>
        <h1>Productos</h1>
      </header>

      <main className="content-area">
        <div className="card-panel">
          <div className="toolbar">
            <span className="toolbar-status">{status}</span>
            <Link to="/productos/crear" className="btn-primary">
              + Nuevo Producto
            </Link>
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Código</th>
                  <th>Nombre</th>
                  <th>Categoría</th>
                  <th>Sub-categoría</th>
                  <th>Marca</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {error ? (
                  <tr>
                    <td colSpan="7" className="table-feedback-cell error">
                      Error al cargar productos
                    </td>
                  </tr>
                ) : productos.length === 0 && status !== "Cargando…" ? (
                  <tr>
                    <td colSpan="7" className="table-feedback-cell">
                      No hay productos registrados
                    </td>
                  </tr>
                ) : productos.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="table-feedback-cell">
                      Cargando productos…
                    </td>
                  </tr>
                ) : (
                  productos.map((p) => (
                    <tr key={p.id_producto}>
                      <td>{p.id_producto}</td>
                      <td>{p.codigo_producto}</td>
                      <td>{p.nombre_producto}</td>
                      <td>{p.categoria}</td>
                      <td>{p.sub_categoria}</td>
                      <td>{p.marca}</td>
                      <td
                        style={{
                          display: "flex",
                          gap: ".5rem",
                          flexWrap: "wrap",
                        }}
                      >
                        <Link
                          to={`/productos/editar/${p.id_producto}`}
                          className="btn-secondary"
                        >
                          Editar
                        </Link>
                        <button
                          type="button"
                          className="btn-danger"
                          onClick={() =>
                            abrirConfirm(p.id_producto, p.nombre_producto)
                          }
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <ConfirmDialog
        open={confirm.open}
        message={`¿Deseas eliminar el producto "${confirm.nombre}"?`}
        onConfirm={eliminar}
        onCancel={() => setConfirm({ open: false, id: null, nombre: "" })}
      />
    </>
  );
}
