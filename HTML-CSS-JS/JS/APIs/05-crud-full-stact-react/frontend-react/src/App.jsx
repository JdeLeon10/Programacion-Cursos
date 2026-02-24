import { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
  useNavigate,
  useParams,
} from 'react-router-dom'

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:9874'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<ProductosListPage />} />
        <Route path="/productos/crear" element={<ProductoCreatePage />} />
        <Route path="/productos/editar/:id" element={<ProductoEditPage />} />
        <Route path="/inventario" element={<InventarioListPage />} />
        <Route path="/inventario/crear" element={<InventarioCreatePage />} />
        <Route path="/inventario/editar" element={<InventarioEditPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

function TopNav() {
  return (
    <nav className="top-nav">
      <Link to="/" className="brand">
        Supermercado <span>DB</span>
      </Link>
      <div className="top-nav-links">
        <NavLink to="/" end>
          Inicio
        </NavLink>
        <NavLink to="/productos">Productos</NavLink>
        <NavLink to="/inventario">Inventario</NavLink>
      </div>
    </nav>
  )
}

function PageHeader({ breadcrumbs, title, subId }) {
  return (
    <header className="page-header">
      <div className="breadcrumb-tag">{breadcrumbs}</div>
      <h1>
        {title} {subId ? <small className="page-sub-id">{subId}</small> : null}
      </h1>
    </header>
  )
}

function ResultBox({ message, isError }) {
  if (!message) return null
  return <div className={`result-box show ${isError ? 'result-error' : 'result-ok'}`}>{message}</div>
}

function HomePage() {
  return (
    <>
      <TopNav />

      <section className="hero">
        <div className="breadcrumb-tag">Prueba Técnica # Express # MySQL # Frontend React</div>
        <h1>Prueba Técnica</h1>
        <p>
          Administración de inventario de productos pertenecientes a una cadena de supermercados. El
          sistema permite gestionar de manera eficiente el catálogo de productos y su inventario,
          facilitando operaciones de creación, consulta, actualización y eliminación.
        </p>
      </section>

      <div className="hero-divider" />

      <section className="module-cards">
        <Link to="/productos" className="module-card">
          <div className="card-icon" />
          <h3>Productos</h3>
          <p>Consulta, registra, edita y elimina los productos del catálogo.</p>
          <div className="card-arrow">Ir al módulo →</div>
        </Link>
        <Link to="/inventario" className="module-card">
          <div className="card-icon" />
          <h3>Inventario</h3>
          <p>Gestiona entradas de inventario con existencias, costos y vencimientos.</p>
          <div className="card-arrow">Ir al módulo →</div>
        </Link>
      </section>
    </>
  )
}

function ProductosListPage() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [confirmData, setConfirmData] = useState(null)

  const listarProductos = async () => {
    try {
      setLoading(true)
      setHasError(false)
      const response = await fetch(`${API_BASE}/productos`)
      if (!response.ok) throw new Error('Error al obtener productos')
      const data = await response.json()
      setProductos(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error(error)
      setHasError(true)
      setProductos([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    listarProductos()
  }, [])

  const eliminarProducto = async () => {
    if (!confirmData?.id) return

    try {
      const response = await fetch(`${API_BASE}/productos/${confirmData.id}`, {
        method: 'DELETE',
      })
      if (!response.ok) throw new Error('Error al eliminar producto')
      setConfirmData(null)
      listarProductos()
    } catch (error) {
      console.error(error)
      setConfirmData(null)
    }
  }

  const status = hasError
    ? 'Error'
    : loading
      ? 'Cargando…'
      : `${productos.length} ${productos.length === 1 ? 'producto' : 'productos'}`

  return (
    <>
      <TopNav />
      <PageHeader
        breadcrumbs={
          <>
            <Link to="/" className="breadcrumb-link">
              Inicio
            </Link>
            &nbsp;/&nbsp; Productos
          </>
        }
        title="Productos"
      />

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
                {loading ? (
                  <tr>
                    <td colSpan="7" className="table-feedback-cell">
                      Cargando productos…
                    </td>
                  </tr>
                ) : hasError ? (
                  <tr>
                    <td colSpan="7" className="table-feedback-cell error">
                      Error al cargar productos
                    </td>
                  </tr>
                ) : productos.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="table-feedback-cell">
                      No hay productos registrados
                    </td>
                  </tr>
                ) : (
                  productos.map((producto) => (
                    <tr key={producto.id_producto}>
                      <td>{producto.id_producto}</td>
                      <td>{producto.codigo_producto}</td>
                      <td>{producto.nombre_producto}</td>
                      <td>{producto.categoria}</td>
                      <td>{producto.sub_categoria}</td>
                      <td>{producto.marca}</td>
                      <td>
                        <div className="actions-cell">
                          <Link to={`/productos/editar/${producto.id_producto}`} className="btn-secondary">
                            Editar
                          </Link>
                          <button
                            type="button"
                            className="btn-danger"
                            onClick={() =>
                              setConfirmData({
                                id: producto.id_producto,
                                nombre: producto.nombre_producto,
                              })
                            }
                          >
                            Eliminar
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <div className={`confirm-overlay ${confirmData ? 'open' : ''}`}>
        <div className="confirm-box">
          <h6>Confirmar eliminación</h6>
          <p>{confirmData ? `¿Deseas eliminar el producto "${confirmData.nombre}"?` : ''}</p>
          <div className="confirm-actions">
            <button type="button" className="btn-secondary" onClick={() => setConfirmData(null)}>
              Cancelar
            </button>
            <button type="button" className="btn-danger" onClick={eliminarProducto}>
              Sí, eliminar
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

function ProductoCreatePage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    codigo_producto: '',
    nombre_producto: '',
    categoria: '',
    sub_categoria: '',
    marca: '',
  })
  const [result, setResult] = useState({ message: '', isError: false })

  const onChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    const payload = {
      codigo_producto: formData.codigo_producto.trim(),
      nombre_producto: formData.nombre_producto.trim(),
      categoria: formData.categoria.trim(),
      sub_categoria: formData.sub_categoria.trim(),
      marca: formData.marca.trim(),
    }

    if (
      !payload.codigo_producto ||
      !payload.nombre_producto ||
      !payload.categoria ||
      !payload.sub_categoria ||
      !payload.marca
    ) {
      setResult({ message: 'Todos los campos son obligatorios', isError: true })
      return
    }

    try {
      const response = await fetch(`${API_BASE}/productos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) throw new Error('Error al crear producto')

      setResult({ message: 'Producto creado correctamente', isError: false })
      setFormData({
        codigo_producto: '',
        nombre_producto: '',
        categoria: '',
        sub_categoria: '',
        marca: '',
      })

      setTimeout(() => {
        navigate('/productos')
      }, 1500)
    } catch (error) {
      console.error(error)
      setResult({ message: 'Error al crear producto', isError: true })
    }
  }

  return (
    <>
      <TopNav />
      <PageHeader
        breadcrumbs={
          <>
            <Link to="/" className="breadcrumb-link">
              Inicio
            </Link>
            &nbsp;/&nbsp;
            <Link to="/productos" className="breadcrumb-link">
              Productos
            </Link>
            &nbsp;/&nbsp; Crear
          </>
        }
        title="Nuevo Producto"
      />

      <main className="content-area">
        <div className="card-panel">
          <h5>
            <span className="method-badge badge-post">POST</span> &nbsp;Crear Producto
          </h5>

          <form onSubmit={onSubmit} noValidate>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="codigo_producto">Código del Producto</label>
                <input
                  type="text"
                  id="codigo_producto"
                  name="codigo_producto"
                  value={formData.codigo_producto}
                  onChange={onChange}
                  placeholder="PRD-0006"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="nombre_producto">Nombre del Producto</label>
                <input
                  type="text"
                  id="nombre_producto"
                  name="nombre_producto"
                  value={formData.nombre_producto}
                  onChange={onChange}
                  placeholder="Leche Descremada 1L"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="categoria">Categoría</label>
                <input
                  type="text"
                  id="categoria"
                  name="categoria"
                  value={formData.categoria}
                  onChange={onChange}
                  placeholder="Lácteos"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="sub_categoria">Sub-categoría</label>
                <input
                  type="text"
                  id="sub_categoria"
                  name="sub_categoria"
                  value={formData.sub_categoria}
                  onChange={onChange}
                  placeholder="Leche"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="marca">Marca</label>
                <input
                  type="text"
                  id="marca"
                  name="marca"
                  value={formData.marca}
                  onChange={onChange}
                  placeholder="Dos Pinos"
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
  )
}

function ProductoEditPage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [loadingError, setLoadingError] = useState('')
  const [formData, setFormData] = useState({
    codigo_producto: '',
    nombre_producto: '',
    categoria: '',
    sub_categoria: '',
    marca: '',
  })
  const [result, setResult] = useState({ message: '', isError: false })

  useEffect(() => {
    const cargarProducto = async () => {
      if (!id) {
        setLoadingError('ID de producto no especificado.')
        setLoading(false)
        return
      }

      try {
        const response = await fetch(`${API_BASE}/productos/${id}`)
        if (!response.ok) throw new Error('Producto no encontrado')

        const data = await response.json()
        setFormData({
          codigo_producto: data.codigo_producto || '',
          nombre_producto: data.nombre_producto || '',
          categoria: data.categoria || '',
          sub_categoria: data.sub_categoria || '',
          marca: data.marca || '',
        })
      } catch (error) {
        console.error(error)
        setLoadingError('Error al cargar producto.')
      } finally {
        setLoading(false)
      }
    }

    cargarProducto()
  }, [id])

  const onChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch(`${API_BASE}/productos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Error al actualizar producto')

      setResult({ message: 'Producto actualizado correctamente', isError: false })
      setTimeout(() => {
        navigate('/productos')
      }, 1500)
    } catch (error) {
      console.error(error)
      setResult({ message: 'Error al actualizar producto', isError: true })
    }
  }

  return (
    <>
      <TopNav />
      <PageHeader
        breadcrumbs={
          <>
            <Link to="/" className="breadcrumb-link">
              Inicio
            </Link>
            &nbsp;/&nbsp;
            <Link to="/productos" className="breadcrumb-link">
              Productos
            </Link>
            &nbsp;/&nbsp; Editar
          </>
        }
        title="Editar Producto"
        subId={id ? `#${id}` : ''}
      />

      <main className="content-area">
        <div className="card-panel">
          <h5>
            <span className="method-badge badge-put">PUT</span> &nbsp;Editar Producto
          </h5>

          {loading ? <p className="muted-text">Cargando datos del producto…</p> : null}
          {!loading && loadingError ? <p className="muted-text">{loadingError}</p> : null}

          {!loading && !loadingError ? (
            <form onSubmit={onSubmit} noValidate>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="codigo_producto">Código del Producto</label>
                  <input
                    type="text"
                    id="codigo_producto"
                    name="codigo_producto"
                    value={formData.codigo_producto}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="nombre_producto">Nombre del Producto</label>
                  <input
                    type="text"
                    id="nombre_producto"
                    name="nombre_producto"
                    value={formData.nombre_producto}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="categoria">Categoría</label>
                  <input
                    type="text"
                    id="categoria"
                    name="categoria"
                    value={formData.categoria}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="sub_categoria">Sub-categoría</label>
                  <input
                    type="text"
                    id="sub_categoria"
                    name="sub_categoria"
                    value={formData.sub_categoria}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="marca">Marca</label>
                  <input
                    type="text"
                    id="marca"
                    name="marca"
                    value={formData.marca}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>

              <div className="btn-section">
                <button type="submit" className="btn-primary">
                  Actualizar Producto
                </button>
                <Link to="/productos" className="btn-secondary">
                  Cancelar
                </Link>
              </div>
            </form>
          ) : null}

          <ResultBox message={result.message} isError={result.isError} />
        </div>
      </main>
    </>
  )
}

function InventarioListPage() {
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const listarInventario = async () => {
      try {
        setLoading(true)
        setHasError(false)
        const response = await fetch(`${API_BASE}/inventario`)
        if (!response.ok) throw new Error('Error al obtener inventario')
        const data = await response.json()
        setRows(Array.isArray(data) ? data : [])
      } catch (error) {
        console.error(error)
        setHasError(true)
        setRows([])
      } finally {
        setLoading(false)
      }
    }

    listarInventario()
  }, [])

  const status = hasError
    ? 'Error'
    : loading
      ? 'Cargando…'
      : `${rows.length} ${rows.length === 1 ? 'registro' : 'productos'}`

  return (
    <>
      <TopNav />
      <PageHeader
        breadcrumbs={
          <>
            <Link to="/" className="breadcrumb-link">
              Inicio
            </Link>
            &nbsp;/&nbsp; Inventario
          </>
        }
        title="Inventario"
      />

      <main className="content-area">
        <div className="alert-info">
          Muestra las existencias totales por producto llamando al procedimiento almacenado{' '}
          <code>sp_inventario_existencias()</code>. Para agregar o editar entradas individuales usa
          los botones de acceso rápido.
        </div>

        <div className="card-panel">
          <div className="toolbar">
            <span className="toolbar-status">{status}</span>
            <div className="toolbar-actions">
              <Link to="/inventario/crear" className="btn-primary">
                + Agregar Entrada
              </Link>
              <Link to="/inventario/editar" className="btn-secondary">
                ✏️ Editar por Código
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
                {loading ? (
                  <tr>
                    <td colSpan="3" className="table-feedback-cell">
                      Cargando inventario…
                    </td>
                  </tr>
                ) : hasError ? (
                  <tr>
                    <td colSpan="3" className="table-feedback-cell error">
                      Error al cargar inventario
                    </td>
                  </tr>
                ) : rows.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="table-feedback-cell">
                      No hay datos de inventario
                    </td>
                  </tr>
                ) : (
                  rows.map((row, index) => (
                    <tr key={`${row.codigo_producto || row.codigo || index}-${index}`}>
                      <td>{row.codigo_producto ?? row.codigo ?? '—'}</td>
                      <td>{row.nombre_producto ?? row.nombre ?? '—'}</td>
                      <td>{Number(row.existencia_total ?? row.total ?? row.existencia ?? 0)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  )
}

function InventarioCreatePage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    codigo_producto: '',
    fecha_ingreso: '',
    cantidad: '',
    costo: '',
    fecha_vencimiento: '',
  })
  const [result, setResult] = useState({ message: '', isError: false })

  const onChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    const payload = {
      codigo_producto: formData.codigo_producto.trim(),
      fecha_ingreso: formData.fecha_ingreso || null,
      cantidad: Number(formData.cantidad),
      costo: Number(formData.costo),
      fecha_vencimiento: formData.fecha_vencimiento || null,
    }

    if (!payload.codigo_producto || !payload.fecha_ingreso) {
      setResult({
        message: 'Código de producto y fecha de ingreso son obligatorios.',
        isError: true,
      })
      return
    }
    if (!Number.isFinite(payload.cantidad) || payload.cantidad <= 0) {
      setResult({ message: 'La cantidad debe ser un número mayor a 0.', isError: true })
      return
    }
    if (!Number.isFinite(payload.costo) || payload.costo < 0) {
      setResult({ message: 'El costo debe ser un número válido (0 o mayor).', isError: true })
      return
    }

    try {
      const response = await fetch(`${API_BASE}/inventario`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await response.json().catch(() => ({}))
      if (!response.ok) {
        setResult({ message: data?.error || 'Error al crear inventario', isError: true })
        return
      }

      setResult({ message: data?.message || 'Entrada de inventario creada correctamente', isError: false })
      setFormData({
        codigo_producto: '',
        fecha_ingreso: '',
        cantidad: '',
        costo: '',
        fecha_vencimiento: '',
      })

      setTimeout(() => {
        navigate('/inventario')
      }, 1200)
    } catch (error) {
      console.error(error)
      setResult({ message: 'No se pudo conectar con el backend.', isError: true })
    }
  }

  return (
    <>
      <TopNav />
      <PageHeader
        breadcrumbs={
          <>
            <Link to="/" className="breadcrumb-link">
              Inicio
            </Link>
            &nbsp;/&nbsp;
            <Link to="/inventario" className="breadcrumb-link">
              Inventario
            </Link>
            &nbsp;/&nbsp; Agregar
          </>
        }
        title="Agregar Entrada de Inventario"
      />

      <main className="content-area">
        <div className="card-panel">
          <h5>
            <span className="method-badge badge-post">POST</span> &nbsp;Nueva Entrada
          </h5>

          <form onSubmit={onSubmit} noValidate>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="codigo_producto">Código del Producto</label>
                <input
                  type="text"
                  id="codigo_producto"
                  name="codigo_producto"
                  value={formData.codigo_producto}
                  onChange={onChange}
                  placeholder="PRD-0001"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="fecha_ingreso">Fecha de Ingreso</label>
                <input
                  type="date"
                  id="fecha_ingreso"
                  name="fecha_ingreso"
                  value={formData.fecha_ingreso}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cantidad">Cantidad</label>
                <input
                  type="number"
                  id="cantidad"
                  name="cantidad"
                  value={formData.cantidad}
                  onChange={onChange}
                  min="1"
                  placeholder="100"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="costo">Costo Unitario (Q)</label>
                <input
                  type="number"
                  id="costo"
                  name="costo"
                  value={formData.costo}
                  onChange={onChange}
                  step="0.01"
                  min="0"
                  placeholder="6.50"
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
                  name="fecha_vencimiento"
                  value={formData.fecha_vencimiento}
                  onChange={onChange}
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
  )
}

function InventarioEditPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    codigo_producto: '',
    fecha_ingreso: '',
    cantidad: '',
    costo: '',
    fecha_vencimiento: '',
  })
  const [result, setResult] = useState({ message: '', isError: false })

  const onChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    const codigoProducto = formData.codigo_producto.trim()
    const payload = {
      fecha_ingreso: formData.fecha_ingreso || null,
      cantidad: Number(formData.cantidad),
      costo: Number(formData.costo),
      fecha_vencimiento: formData.fecha_vencimiento || null,
    }

    if (!codigoProducto) {
      setResult({ message: 'El código del producto es obligatorio.', isError: true })
      return
    }
    if (!payload.fecha_ingreso) {
      setResult({ message: 'La fecha de ingreso es obligatoria.', isError: true })
      return
    }
    if (!Number.isFinite(payload.cantidad) || payload.cantidad <= 0) {
      setResult({ message: 'La cantidad debe ser un número mayor a 0.', isError: true })
      return
    }
    if (!Number.isFinite(payload.costo) || payload.costo < 0) {
      setResult({ message: 'El costo debe ser un número válido (0 o mayor).', isError: true })
      return
    }

    try {
      const response = await fetch(`${API_BASE}/inventario/codigo/${encodeURIComponent(codigoProducto)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await response.json().catch(() => ({}))
      if (!response.ok) {
        setResult({ message: data?.error || 'Error al actualizar inventario', isError: true })
        return
      }

      setResult({ message: 'Entrada de inventario actualizada correctamente', isError: false })

      setTimeout(() => {
        navigate('/inventario')
      }, 1200)
    } catch (error) {
      console.error(error)
      setResult({ message: 'No se pudo conectar con el backend.', isError: true })
    }
  }

  return (
    <>
      <TopNav />
      <PageHeader
        breadcrumbs={
          <>
            <Link to="/" className="breadcrumb-link">
              Inicio
            </Link>
            &nbsp;/&nbsp;
            <Link to="/inventario" className="breadcrumb-link">
              Inventario
            </Link>
            &nbsp;/&nbsp; Editar
          </>
        }
        title="Editar Entrada de Inventario"
      />

      <main className="content-area">
        <div className="card-panel">
          <h5>
            <span className="method-badge badge-put">PUT</span> &nbsp;Editar por Código de Producto
          </h5>

          <div className="alert-info">
            Ingresa el <strong>código del producto</strong> para actualizar la última entrada de
            inventario registrada para ese producto.
          </div>

          <form onSubmit={onSubmit} noValidate>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="codigo_producto">Código del Producto</label>
                <input
                  type="text"
                  id="codigo_producto"
                  name="codigo_producto"
                  value={formData.codigo_producto}
                  onChange={onChange}
                  placeholder="PRD-0001"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="fecha_ingreso">Fecha de Ingreso</label>
                <input
                  type="date"
                  id="fecha_ingreso"
                  name="fecha_ingreso"
                  value={formData.fecha_ingreso}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cantidad">Cantidad</label>
                <input
                  type="number"
                  id="cantidad"
                  name="cantidad"
                  value={formData.cantidad}
                  onChange={onChange}
                  min="1"
                  placeholder="100"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="costo">Costo Unitario (Q)</label>
                <input
                  type="number"
                  id="costo"
                  name="costo"
                  value={formData.costo}
                  onChange={onChange}
                  step="0.01"
                  min="0"
                  placeholder="6.50"
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
                  name="fecha_vencimiento"
                  value={formData.fecha_vencimiento}
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="btn-section">
              <button type="submit" className="btn-primary">
                Actualizar Entrada
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
  )
}

export default App
