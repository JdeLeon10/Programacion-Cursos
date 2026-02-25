import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { API_BASE } from '../../api';
import ResultBox from '../../components/ResultBox';

export default function EditarProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [form, setForm] = useState({ codigo: '', nombre: '', categoria: '', sub_categoria: '', marca: '' });
  const [result, setResult] = useState({ message: '', isError: false });

  useEffect(() => {
    async function cargar() {
      try {
        const res = await fetch(`${API_BASE}/productos/${id}`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        setForm({
          codigo: data.codigo_producto,
          nombre: data.nombre_producto,
          categoria: data.categoria,
          sub_categoria: data.sub_categoria,
          marca: data.marca
        });
        setLoading(false);
      } catch {
        setLoadError(true);
        setLoading(false);
      }
    }
    cargar();
  }, [id]);

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.id]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE}/productos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          codigo_producto: form.codigo,
          nombre_producto: form.nombre,
          categoria: form.categoria,
          sub_categoria: form.sub_categoria,
          marca: form.marca
        })
      });
      if (!res.ok) throw new Error();
      setResult({ message: 'Producto actualizado correctamente', isError: false });
      setTimeout(() => navigate('/productos'), 1500);
    } catch {
      setResult({ message: 'Error al actualizar producto', isError: true });
    }
  }

  return (
    <>
      <header className="page-header">
        <div className="breadcrumb-tag">
          <Link to="/" className="breadcrumb-link">Inicio</Link>
          &nbsp;/&nbsp;
          <Link to="/productos" className="breadcrumb-link">Productos</Link>
          &nbsp;/&nbsp; Editar
        </div>
        <h1>Editar Producto <small className="page-sub-id">#{id}</small></h1>
      </header>

      <main className="content-area">
        <div className="card-panel">
          <h5><span className="method-badge badge-put">PUT</span> &nbsp;Editar Producto</h5>

          {loading && <p className="muted-text">Cargando datos del producto…</p>}
          {loadError && <p className="muted-text">Error al cargar producto.</p>}

          {!loading && !loadError && (
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="codigo">Código del Producto</label>
                  <input type="text" id="codigo" value={form.codigo} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre del Producto</label>
                  <input type="text" id="nombre" value={form.nombre} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="categoria">Categoría</label>
                  <input type="text" id="categoria" value={form.categoria} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="sub_categoria">Sub-categoría</label>
                  <input type="text" id="sub_categoria" value={form.sub_categoria} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="marca">Marca</label>
                  <input type="text" id="marca" value={form.marca} onChange={handleChange} required />
                </div>
              </div>

              <div className="btn-section">
                <button type="submit" className="btn-primary">Actualizar Producto</button>
                <Link to="/productos" className="btn-secondary">Cancelar</Link>
              </div>
            </form>
          )}

          <ResultBox message={result.message} isError={result.isError} />
        </div>
      </main>
    </>
  );
}
