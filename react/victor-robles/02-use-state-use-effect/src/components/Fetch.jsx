import React from "react";
import { useState, useEffect } from "react";

const url = "https://rickandmortyapi.com/api/character/";

export const Fetch = () => {
  const [personajes, setPersonajes] = useState([]);

  const getUsuariosAjaxPromise = () => {
    fetch(url)
      .then((response) => response.json()) // Convertir la respuesta a JSON
      .then((data) => {
        setPersonajes(data.results); // Guarda data.results en el array de personajes
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Manejo de errores
      });
  };

  useEffect(() => {
    getUsuariosAjaxPromise();
  }, []); // Solo se ejecuta una vez al montar el componente

  return (
    <>
      <h1>Fetch</h1>
      <ul>
        {personajes.map((personaje) => (
          <li key={personaje.id}>
            {personaje.name} - {personaje.species}
          </li>
        ))}
      </ul>
    </>
  );
};
