import React from "react";
import { useState } from "react";

export function Eventos() {
  const [texto, setTexto] = useState("Texto original");

  /*
    Cambia el estado texto dependiendo del valor anterior.
    Si el texto anterior es "Texto original", entonces cambia a "Texto cambiado".
    Si no, vuelve a "Texto original". 
  */
  function cambiarTexto() {
    setTexto((prevTexto) =>
      prevTexto === "Texto original" ? "Texto cambiado" : "Texto original",
    );
  }
  /*
    setTexto(function (prevTexto) {
    if (prevTexto === "Texto original") {
      return "Texto cambiado";
    } else {
      return "Texto original";
    }
    });
  */

  return (
    <>
      <h1>Eventos</h1>
      <h3>Eventos en React - onClick</h3>
      {/* Evento onClick - React renderiza el componente nuevamente */}
      <button onClick={cambiarTexto}>{texto}</button>
    </>
  );
}
