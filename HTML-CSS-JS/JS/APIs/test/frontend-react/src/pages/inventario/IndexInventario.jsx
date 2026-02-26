import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE } from "../../api";

export default function IndexInventario() {
  const [rows, setRows] = useState([]);
  const [status, setStatus] = useState("Cargando…");
  const [error, setError] = useState(false);

  useEffect(() => {
    async function listar() {
      try {
        const res = await fetch(`${API_BASE}/inventario`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        setRows(Array.isArray(data) ? data : []); // Si data es un arreglo, se guarda, si no []
        setStatus(`${Array.isArray(data) ? data.length : 0} productos`); // x productos
      } catch {
        setError(true);
        setStatus("Error");
      }
    }
    listar();
  }, []); // Solo se ejecuta al montar el componente

  return (
    <>
      <header className="page-header">
        <div className="breadcrumb-tag">
          <Link to="/" className="breadcrumb-link">
            Inicio
          </Link>
          &nbsp;/&nbsp; Inventario
        </div>
        <h1>Inventario</h1>
      </header>

      <main className="content-area">
        <div className="card-panel">
          <div className="toolbar">
            <span className="toolbar-status">{status}</span>
            <div style={{ display: "flex", gap: ".6rem" }}>
              <Link to="/inventario/crear" className="btn-primary">
                + Agregar Entrada
              </Link>
              <Link to="/inventario/editar" className="btn-secondary">
                Editar por Código
              </Link>
            </div>
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Nombre del Producto</th>
                  <th>Existencia Total</th>
                </tr>
              </thead>
              <tbody>
                {error ? (
                  <tr>
                    <td colSpan="3" className="table-feedback-cell error">
                      Error al cargar inventario
                    </td>
                  </tr>
                ) : rows.length === 0 && status !== "Cargando…" ? (
                  <tr>
                    <td colSpan="3" className="table-feedback-cell">
                      No hay datos de inventario
                    </td>
                  </tr>
                ) : rows.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="table-feedback-cell">
                      Cargando inventario…
                    </td>
                  </tr>
                ) : (
                  rows.map((r, i) => {
                    const codigo = r.codigo_producto ?? r.codigo ?? "—";
                    const nombre = r.nombre_producto ?? r.nombre ?? "—";
                    const existencia =
                      r.existencia_total ?? r.total ?? r.existencia ?? 0;
                    return (
                      <tr key={i}>
                        <td>{codigo}</td>
                        <td>{nombre}</td>
                        <td>{Number(existencia)}</td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
