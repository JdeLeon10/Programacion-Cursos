import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const url = "https://rickandmortyapi.com/api/character/";

export const Axios = () => {
  const [personajes, setPersonajes] = useState([]);

  const getUsuariosAxios = async () => {
    try {
      const response = await axios.get(url); // Realiza una solicitud GET a la URL utilizando Axios
      setPersonajes(response.data.results); // Guarda response.data.results en el array de personajes
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getUsuariosAxios();
  }, []); // Solo se ejecuta una vez al montar el componente

  return (
    <>
      <h1>Axios</h1>
      <ul>
        {personajes.map((personaje) => (
          <li key={personaje.id}>{personaje.name}</li>
        ))}
      </ul>
    </>
  );
};
