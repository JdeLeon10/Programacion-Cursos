import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="top-nav">
      <NavLink to="/" className="brand">
        Supermercado <span>DB</span>
      </NavLink>
      <div className="top-nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
          Inicio
        </NavLink>
        <NavLink to="/productos" className={({ isActive }) => isActive ? 'active' : ''}>
          Productos
        </NavLink>
        <NavLink to="/inventario" className={({ isActive }) => isActive ? 'active' : ''}>
          Inventario
        </NavLink>
      </div>
    </nav>
  );
}
