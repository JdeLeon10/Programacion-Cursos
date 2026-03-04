// Importar modulos de react / dependencias
import React from "react";

// Funcion del componente
export function PrimerComponente() {
  // Creacion de variables dentro del componente
  const nombre = "Jeremy";
  const edad = 24;

  let usuario = {
    nombre: "Jeremy",
    apellido: "De Leon",
    edad: 24,
  };

  return (
    <>
      <h1>Primer componente</h1>
      <ul>
        <li>Elemento 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
      </ul>
      <p>
        {/* Uso de variables dentro del componente  */}
        Hola, soy {nombre} y tengo {edad} años.{" "}
      </p>

      <h3>Imprimiendo datos del usuario desde un objeto</h3>
      <p>
        Nombre: {usuario.nombre} <br />
        Apellido: {usuario.apellido} <br />
        Edad: {usuario.edad}
      </p>
    </>
  );
}
