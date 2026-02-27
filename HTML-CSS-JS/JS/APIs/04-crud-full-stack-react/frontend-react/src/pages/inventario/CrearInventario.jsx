import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE } from "../../api";
import ResultBox from "../../components/ResultBox";

export default function CrearInventario() {
  const navigate = useNavigate();

  // Campos vacios actualizados con setForm
  const [form, setForm] = useState({
    codigo_producto: "",
    fecha_ingreso: "",
    cantidad: "",
    costo: "",
    fecha_vencimiento: "",
  });
  const [result, setResult] = useState({ message: "", isError: false });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      codigo_producto: form.codigo_producto.trim(),
      fecha_ingreso: form.fecha_ingreso || null,
      cantidad: Number(form.cantidad),
      costo: Number(form.costo),
      fecha_vencimiento: form.fecha_vencimiento || null,
    };

    if (!payload.codigo_producto || !payload.fecha_ingreso) {
      setResult({
        message: "Código de producto y fecha de ingreso son obligatorios.",
        isError: true,
      });
      return;
    }
    if (!Number.isFinite(payload.cantidad) || payload.cantidad <= 0) {
      setResult({
        message: "La cantidad debe ser un número mayor a 0.",
        isError: true,
      });
      return;
    }
    if (!Number.isFinite(payload.costo) || payload.costo < 0) {
      setResult({
        message: "El costo debe ser un número válido (0 o mayor).",
        isError: true,
      });
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/inventario`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({})); // Si no es JSON, se ignora el error y data queda como {}
      if (!res.ok) {
        setResult({
          message: data?.error || "Error al crear inventario",
          isError: true,
        });
        return;
      }
      setResult({
        message: data?.message || "Entrada de inventario creada correctamente",
        isError: false,
      });
      setTimeout(() => navigate("/inventario"), 1200);
    } catch {
      setResult({
        message: "No se pudo conectar con el backend.",
        isError: true,
      });
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
          <Link to="/inventario" className="breadcrumb-link">
            Inventario
          </Link>
          &nbsp;/&nbsp; Agregar
        </div>
        <h1>Agregar Entrada de Inventario</h1>
      </header>

      <main className="content-area">
        <div className="card-panel">
          <h5>
            <span className="method-badge badge-post">POST</span> &nbsp;Nueva
            Entrada
          </h5>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="codigo_producto">Código del Producto</label>
                <input
                  type="text"
                  id="codigo_producto"
                  placeholder="PRD-0001"
                  value={form.codigo_producto}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="fecha_ingreso">Fecha de Ingreso</label>
                <input
                  type="date"
                  id="fecha_ingreso"
                  value={form.fecha_ingreso}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cantidad">Cantidad</label>
                <input
                  type="number"
                  id="cantidad"
                  placeholder="100"
                  min="1"
                  value={form.cantidad}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="costo">Costo Unitario (Q)</label>
                <input
                  type="number"
                  id="costo"
                  placeholder="6.50"
                  step="0.01"
                  min="0"
                  value={form.costo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="fecha_vencimiento">
                  Fecha de Vencimiento <em>(opcional)</em>
                </label>
                <input
                  type="date"
                  id="fecha_vencimiento"
                  value={form.fecha_vencimiento}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="btn-section">
              <button type="submit" className="btn-primary">
                Guardar Entrada
              </button>
              <Link to="/inventario" className="btn-secondary">
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
