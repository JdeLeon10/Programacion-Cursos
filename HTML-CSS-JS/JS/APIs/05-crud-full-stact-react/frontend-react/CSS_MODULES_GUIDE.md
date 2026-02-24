# Guía de CSS Modules para todo el proyecto

Esta guía describe cómo migrar gradualmente el frontend React actual a CSS Modules **sin aplicar cambios todavía**.

## 1) ¿Qué es CSS Modules?

CSS Modules permite que cada archivo CSS tenga alcance local por componente.

Ejemplo mental:
- `.btn` en `TopNav.module.css` y `.btn` en `Form.module.css` no colisionan.
- En React se importan como objeto: `styles.btn`.

## 2) ¿Por qué te conviene en este proyecto?

Tu app ya está organizada por funcionalidades (Inicio, Productos, Inventario), y CSS Modules te ayuda a:
- evitar colisiones de clases al crecer el proyecto,
- separar estilos por componente/página,
- mantener más limpio el mantenimiento de formularios y tablas.

## 3) Estrategia recomendada (sin romper nada)

Mantener un `index.css` pequeño para:
- reset global,
- variables de color/tipografía (`:root`),
- estilos de `html`, `body`, `#root`.

Mover todo lo demás a módulos por componente/página.

## 4) Estructura sugerida de carpetas

```txt
src/
  components/
    TopNav/
      TopNav.jsx
      TopNav.module.css
    PageHeader/
      PageHeader.jsx
      PageHeader.module.css
    ResultBox/
      ResultBox.jsx
      ResultBox.module.css
    ConfirmDialog/
      ConfirmDialog.jsx
      ConfirmDialog.module.css
  pages/
    Home/
      HomePage.jsx
      HomePage.module.css
    Productos/
      ProductosListPage.jsx
      ProductoCreatePage.jsx
      ProductoEditPage.jsx
      Productos.module.css
    Inventario/
      InventarioListPage.jsx
      InventarioCreatePage.jsx
      InventarioEditPage.jsx
      Inventario.module.css
  styles/
    tokens.css
    global.css
```

> Nota: hoy puedes seguir en `App.jsx` mientras migras estilos, y luego separar componentes si quieres.

## 5) Mapa de clases actuales → módulos sugeridos

### A. Navegación y layout común
- `top-nav`, `brand`, `top-nav-links` → `TopNav.module.css`
- `page-header`, `breadcrumb-tag`, `breadcrumb-link`, `page-sub-id` → `PageHeader.module.css`
- `content-area` → `layout` compartido (puede vivir en `global.css` o en módulo de página)

### B. Formularios y botones
- `form-group`, `form-grid`, `btn-section` → módulo de formularios (por dominio o compartido)
- `btn-primary`, `btn-secondary`, `btn-danger` → módulo de botones compartido
- `method-badge`, `badge-post`, `badge-put` → módulo de badges compartido

### C. Tablas y estados
- `table-wrap`, `table-feedback-cell`, `error` → módulo de tabla
- `toolbar`, `toolbar-status`, `toolbar-actions`, `actions-cell` → módulo de toolbar/listado
- `muted-text`, `alert-info` → módulo utilitario o por página

### D. Inicio
- `hero`, `hero-divider`, `module-cards`, `module-card`, `card-icon`, `card-arrow` → `HomePage.module.css`

### E. Confirmación eliminar
- `confirm-overlay`, `open`, `confirm-box`, `confirm-actions` → `ConfirmDialog.module.css`

## 6) Convenciones recomendadas

- Nombre de archivo: `Componente.module.css`.
- Preferir `camelCase` para clases que usarás como `styles.clase`.
- No usar selectores globales dentro de módulos (excepto `:global(...)` cuando sea necesario).
- Evitar estilos por etiqueta (`h1`, `table`) dentro de módulos; preferir clases explícitas.

## 7) Ejemplo mínimo de uso

```css
/* TopNav.module.css */
.topNav {
  background: var(--nav-bg);
}
.brand {
  color: #fff;
}
```

```jsx
import styles from './TopNav.module.css'

export default function TopNav() {
  return (
    <nav className={styles.topNav}>
      <a className={styles.brand}>Supermercado DB</a>
    </nav>
  )
}
```

## 8) Plan de migración por fases

### Fase 1 (rápida y segura)
1. Crear `styles/tokens.css` y mover solo variables `:root`.
2. Dejar reset y base en `styles/global.css`.
3. Mantener todo lo demás como está.

### Fase 2 (componentes compartidos)
1. Migrar `TopNav`, `PageHeader`, `ResultBox`, `ConfirmDialog` a módulos.
2. Actualizar clases en JSX a `styles.*`.

### Fase 3 (páginas)
1. Migrar Inicio a `HomePage.module.css`.
2. Migrar Productos a `Productos.module.css`.
3. Migrar Inventario a `Inventario.module.css`.

### Fase 4 (limpieza)
1. Eliminar del global lo que ya esté migrado.
2. Verificar que no existan clases huérfanas.
3. Ejecutar build y revisión visual.

## 9) Checklist por pantalla

### Inicio
- [ ] Hero y cards en módulo propio.
- [ ] Navbar reutilizada desde componente compartido.

### Productos
- [ ] Tabla/listado en módulo de página.
- [ ] Botones y badges compartidos.
- [ ] Modal de confirmación en componente separado.

### Inventario
- [ ] Tabla/listado en módulo de página.
- [ ] Formularios crear/editar usando clases del módulo de dominio.

## 10) ¿Y Material UI?

No es obligatorio para mejorar tu CSS.

- Si quieres mantener tu diseño actual, CSS Modules es ideal.
- Si quieres rediseñar hacia Material Design y acelerar componentes prehechos, entonces sí conviene MUI.

Para tu caso actual (migración desde HTML/CSS propio), CSS Modules es el camino más limpio y con menor fricción.

## 11) Resumen ejecutivo

Sí, `index.css` sigue siendo válido, pero conviene dejarlo pequeño y mover estilos de UI a módulos.
Tu proyecto está en un punto perfecto para una migración incremental por fases, sin rehacer todo ni cambiar diseño.
