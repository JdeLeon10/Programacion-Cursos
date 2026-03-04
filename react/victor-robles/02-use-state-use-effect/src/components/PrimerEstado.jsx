/*
  useState es un Hook que nos permite añadir el estado de React a componentes funcionales.
*/

import React from "react";
import { useState } from "react";

export const PrimerEstado = () => {
  const [nombre, setNombre] = useState("Jeremy");

  const cambiarNombre = () => {
    setNombre((texto) => (texto === "Jeremy" ? "Alejandro" : "Jeremy"));
  };

  return (
    <>
      <h1>Primer Estado - Use State</h1>
      <p>Utilizando useState para cambiar el nombre</p>
      <p>Mi nombre es: {nombre}</p>
      <button onClick={cambiarNombre}>Cambiar Nombre</button>
    </>
  );
};
