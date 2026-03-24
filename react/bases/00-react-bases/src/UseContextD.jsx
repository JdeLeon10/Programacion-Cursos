/*
  UseContext: Permite compartir datos entre diferentes niveles de componentes
  sin necesidad de pasar props manualmente en cada nivel de la jerarquía de componentes.
*/
import "./UseContext.css";

import { useContext } from "react";
import { nameContext } from "./UseContextA";

export const UseContextD = () => {
  const name = useContext(nameContext);

  return (
    <div className="use-context-container">
      <h1>UseContextD</h1>
      <h3>Adios {name}</h3>
    </div>
  );
};
