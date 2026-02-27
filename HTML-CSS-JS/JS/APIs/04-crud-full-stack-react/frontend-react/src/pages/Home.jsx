import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="breadcrumb-tag">Prueba Técnica # Express # MySQL # React</div>
        <h1>Prueba Técnica</h1>
        <p>
          Administración de inventario de productos pertenecientes a una cadena de supermercados.
          El sistema permite gestionar de manera eficiente el catálogo de productos y su inventario,
          facilitando operaciones de creación, consulta, actualización y eliminación, garantizando
          control sobre existencias, costos y fechas de vencimiento.
        </p>
      </section>

      <div className="hero-divider"></div>

      <section className="module-cards">
        <Link to="/productos" className="module-card">
          <h3>Productos</h3>
          <p>Consulta, registra, edita y elimina los productos del catálogo.</p>
          <div className="card-arrow">Ir al módulo →</div>
        </Link>
        <Link to="/inventario" className="module-card">
          <h3>Inventario</h3>
          <p>Gestiona entradas de inventario con existencias, costos y vencimientos.</p>
          <div className="card-arrow">Ir al módulo →</div>
        </Link>
      </section>
    </>
  );
}
