import React from "react";

export function SegundoComponente() {
  const peliculas = ["El Padrino", "El Señor de los Anillos", "Matrix"];

  return (
    <>
      <h1>Segundo componente</h1>
      <h3>Lista de películas:</h3>

      {/* Validacion de existencia en arreglo */}
      {peliculas.length === 0 ? (
        <p>No hay películas disponibles</p>
      ) : (
        <ul>
          {/* Sintaxis de map:
            array.map((elemento, indice) => {
            <html key={indice}>{elemento}</html>
            }); */}
          {peliculas.map((pelicula, index) => (
            <li key={index}>{pelicula}</li>
          ))}
        </ul>
      )}
    </>
  );
}
