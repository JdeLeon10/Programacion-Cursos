import React from "react";
import { useState, useEffect } from "react";

const url = "https://rickandmortyapi.com/api/character/";

export const AsyncAwait = () => {
  const [personajes, setPersonajes] = useState([]);

  const getUsuariosAsyncAwait = async () => {
    try {
      const response = await fetch(url); // Espera a que la respuesta de la API esté disponible
      const data = await response.json(); // Espera a que la respuesta se convierta a JSON
      setPersonajes(data.results); // Guarda data.results en el array de personajes
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getUsuariosAsyncAwait();
  }, []); // Solo se ejecuta una vez al montar el componente

  return (
    <>
      <h1>Async - Await</h1>
      <ul>
        {personajes.map((personaje) => (
          <li key={personaje.id}>
            {personaje.name} - {personaje.status}
          </li>
        ))}
      </ul>
    </>
  );
};
