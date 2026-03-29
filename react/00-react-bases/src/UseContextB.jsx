/*
  UseContext: Permite compartir datos entre diferentes niveles de componentes
  sin necesidad de pasar props manualmente en cada nivel de la jerarquía de componentes.
*/
import "./UseContext.css";
import { UseContextC } from "./UseContextC";

export const UseContextB = () => {
  return (
    <div className="use-context-container">
      <h1>UseContextB</h1>
      <UseContextC />
    </div>
  );
};
