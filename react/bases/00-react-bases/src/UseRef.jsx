/*
  UseRef vs UseState
  
  - UseState causes a re-render when the state changes, while UseRef does not.
  - UseState is used for values that affect the rendering of the component, while UseRef is used for values that do not affect the rendering of the component.
  - UseState is used for primitive values (string, number, boolean), while UseRef can be used for any value (including objects and functions).
*/
import { useState, useEffect, useRef } from "react";

export const UseRef = () => {
  const [number, setNumber] = useState(0);
  const numberRef = useRef(0); // Objeto mutable que no causa re-render cuando su valor cambia // Sintaxis: const ref = useRef(initialValue);

  // useEffect se ejecuta cada vez que el componente se renderiza, mientras que useRef no causa un re-render cuando su valor cambia.
  useEffect(() => {
    console.log("Component rendered");
  });

  const handleClick = () => {
    setNumber(number + 1);
  };

  const handleClick2 = () => {
    numberRef.current = numberRef.current + 1;
    console.log(numberRef.current);
  };

  return (
    <>
      <h1>UseRef</h1>
      <p>Clicls con useState {number}</p>
      <button onClick={handleClick}> Click con useState</button>
      <p>Clicls con useRef {numberRef.current}</p>{" "}
      {/* Se actualizara hasta renderizar nuevamente el componente*/}
      <button onClick={handleClick2}> Click con useRef</button>
    </>
  );
};
