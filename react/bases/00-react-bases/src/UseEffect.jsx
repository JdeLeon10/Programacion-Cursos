/*
  useEffect: Hook que basicamente indica -> Ejecuta esto cada vez que:
    - El componente se monta
    - El componente se actualiza
    - El componente se desmonta

    Sintaxis:
    useEffect(() => {
      // Código a ejecutar
    }, [dependencias]);

    Dependencias:
    - Si el array de dependencias está vacío ([]), el efecto se ejecutará solo una vez después del primer renderizado (componente montado).
    - Si el array de dependencias contiene variables, el efecto se ejecutará cada vez que alguna de esas variables cambie.
    - Si no se proporciona un array de dependencias, el efecto se ejecutará después de cada renderizado, lo que puede llevar a un bucle infinito si el efecto actualiza el estado.

    Usos:
    #1 Event listeners
    #2 DOM manipulation
    #3 Fetching data
    #4 Cleanup (limpieza de efectos secundarios)
    #5 Suscriptions to real time data
*/

import React from "react";
import { useState, useEffect } from "react";

export const UseEffect = () => {
  const [count, setCount] = useState(0);

  // useEffect siempre debe ir en la parte superior del codigo
  useEffect(() => {
    console.log("El componente se ha montado o actualizado");
  }, [count]); // El efecto se ejecutará cada vez que 'count' cambie

  const AddCount = () => setCount(count + 1);

  return (
    <>
      <h1>useEffect</h1>
      <h4>Count: {count}</h4>
      <button onClick={AddCount}>Increment</button>
    </>
  );
};
