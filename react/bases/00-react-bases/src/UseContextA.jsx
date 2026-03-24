/*
  UseContext: Permite compartir datos entre diferentes niveles de componentes
  sin necesidad de pasar props manualmente en cada nivel de la jerarquía de componentes.
*/

/*
  Provider component
  El componente Provider es el encargado de proporcionar el valor del contexto a los componentes hijos que lo necesiten. 
  Se utiliza para envolver la parte de la aplicación donde se desea compartir el contexto.

  # Sintaxis
  import { createContext } from "react";
  export const MyContext = createContext();

  <MyContext.Provider value={value}>
    <componentes hijos/>
  </MyContext.Provider>

  ########

  Consumer component
  El componente Consumer es el encargado de consumir el valor del contexto proporcionado por el Provider. 
  Se utiliza para acceder al valor del contexto en los componentes hijos.

  # Sintaxis
  import { useContext } from "react";
  import { MyContext } from "./MyContext";
  const value = useContext(MyContext);
*/

import "./UseContext.css";

import { useState } from "react";
import { UseContextB } from "./UseContextB";

import { createContext } from "react"; // 1. Importar createContext para crear el contexto
export const nameContext = createContext(); // 2. Crear el contexto y exportarlo para que pueda ser utilizado en otros componentes

export const UseContextA = () => {
  const [name, setName] = useState("Jeremy");

  return (
    <div className="use-context-container">
      <h1>UseContextA</h1>
      <h3>Hola {name}</h3>

      <nameContext.Provider value={name}>
        <UseContextB />
      </nameContext.Provider>
    </div>
  );
};

/*
      <nameContext.Provider value={name}>
        <UseContextB />
      </nameContext.Provider>
      
  // Opción 1: Pasas B (comportamiento actual)
// A -> [B -> C -> D] todos tienen acceso al contexto
<nameContext.Provider value={name}>
  <UseContextB />
</nameContext.Provider>

// Opción 2: Pasas C directamente
// A -> [C -> D] tienen acceso, pero B queda fuera del Provider
<nameContext.Provider value={name}>
  <UseContextC />
</nameContext.Provider>

// Opción 3: Pasas D directamente
// A -> [D] tiene acceso, B y C quedan fuera
<nameContext.Provider value={name}>
  <UseContextD />
</nameContext.Provider>
*/

/*
  PropDrilling
    Si no utilizaramos useContext:
    UseContextA -> UseContextB -> UseContextC -> UseContextD
    Tendríamos que pasar el prop "name" manualmente a través de cada componente intermedio:
    UseContextA -> UseContextB (recibe name) -> UseContextC (recibe name) -> UseContextD (recibe name)
*/
