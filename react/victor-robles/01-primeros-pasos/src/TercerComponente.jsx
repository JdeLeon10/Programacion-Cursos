import React from "react";

// Desestructuracion de props mediante llaves como parametros de la funcion
export function TercerComponente({ nombre, apellido }) {
  return (
    <>
      <h1>Tercer componente</h1>
      <h3>Comunicacion entre componentes con props </h3>
      <p>Nombre: {nombre}</p>
      <p>Apellido: {apellido}</p>
    </>
  );
}
