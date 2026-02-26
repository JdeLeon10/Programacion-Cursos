import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import IndexProductos from "./pages/productos/IndexProductos";
import CrearProducto from "./pages/productos/CrearProducto";
import EditarProducto from "./pages/productos/EditarProducto";
import IndexInventario from "./pages/inventario/IndexInventario";
import CrearInventario from "./pages/inventario/CrearInventario";
import EditarInventario from "./pages/inventario/EditarInventario";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Importa segun la ruta de la pagina */}
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<IndexProductos />} />
        <Route path="/productos/crear" element={<CrearProducto />} />
        <Route path="/productos/editar/:id" element={<EditarProducto />} />
        <Route path="/inventario" element={<IndexInventario />} />
        <Route path="/inventario/crear" element={<CrearInventario />} />
        <Route path="/inventario/editar" element={<EditarInventario />} />
      </Routes>
    </BrowserRouter>
  );
}
