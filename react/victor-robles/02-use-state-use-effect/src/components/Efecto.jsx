/*
  useEffect es un Hook que nos permite realizar efectos secundarios en componentes funcionales. Es similar a componentDidMount, componentDidUpdate y componentWillUnmount combinados en los componentes de clase. Con useEffect, podemos manejar tareas como la suscripción a eventos, la manipulación del DOM, la realización de solicitudes HTTP, entre otras cosas que requieren efectos secundarios.
*/

import React from "react";
import { useState, useEffect } from "react";

export const Efecto = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("El contador ha cambiado:", contador);
  }, [contador]);

  /*
  useEffect(() => {} = en cada render
  useEffect(() => {}, []) = solo en el primer render
  useEffect(() => {}, [contador]) = solo cuando el contador cambie
  */

  return (
    <>
      <h1>Efecto - Use Effect</h1>
      <p>Utilizando useEffect para manejar efectos secundarios</p>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </>
  );
};
