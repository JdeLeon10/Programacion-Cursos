import React from "react";

export function Boton({ texto, accion }) {
  return <button onClick={accion}>{texto}</button>;
}
