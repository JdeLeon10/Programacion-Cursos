import React from "react";
import { useState, useEffect } from "react";

/*
  URLs: 
  - https://rickandmortyapi.com/api/character
  - https://pokeapi.co/api/v2/pokemon
  - https://thesimpsonsapi.com/api/characters
*/

export const PeticionFormulario = () => {
  const [url, setUrl] = useState("");
  const [personajes, setPersonajes] = useState([]);

  // Datos de formulario
  const obtenerDatos = (e) => {
    e.preventDefault();

    let data = e.target; // Obtiene el formulario completo
    let url = data.url.value; // Obtiene el valor del input con name="url"

    setUrl(url); // Actualiza el estado con la URL ingresada
    limpiarInput(data); // Limpia el formulario después de enviar los datos
  };

  useEffect(() => {
    const obtenerPersonajes = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPersonajes(data.results || []); // Si no hay resultados, establece un array vacío
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    obtenerPersonajes();
  }, [url]);

  const limpiarInput = (formulario) => {
    formulario.reset(); // Limpia el formulario
  };

  return (
    <>
      {/* Formulario con React */}
      <h3>URL</h3>
      <form onSubmit={obtenerDatos}>
        {/* de aqui se obtiene e.target */}
        <input type="text" name="url" placeholder="Ingrese la URL" />
        <button type="submit">Enviar</button>
      </form>

      {/* Print de informacion */}
      <div>
        <h3>URL ingresada</h3>
        <p>{url}</p>
      </div>
      <div>
        <h3>Personajes</h3>
        <ul>
          {personajes.map((personaje, index) => (
            <li key={index}>{personaje.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
