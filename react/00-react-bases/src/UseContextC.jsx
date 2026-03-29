/*
  UseContext: Permite compartir datos entre diferentes niveles de componentes
  sin necesidad de pasar props manualmente en cada nivel de la jerarquía de componentes.
*/
import "./UseContext.css";
import { UseContextD } from "./UseContextD";

export const UseContextC = () => {
  return (
    <div className="use-context-container">
      <h1>UseContextC</h1>
      <UseContextD />
    </div>
  );
};
