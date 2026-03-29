/*
  React hook: Special functions that allows functional components to use React features without writing a class.

  useState: A hook that allows you to add state to functional components. 
  It returns an array with two elements: 
  - the current state value
  - a function to update that state value.
*/

import React, { useState } from "react";

export const UseState = () => {
  const [count, setCount] = useState(0); // El valor inicial del estado es 0
  const [name, setName] = useState("Jeremy"); // El valor inicial del estado es "Jeremy"

  const increment = () => {
    setCount(count + 1); // Actualiza el estado con el nuevo valor
  };

  const decrement = () => {
    setCount(count - 1); // Actualiza el estado con el nuevo valor
  };

  const reset = () => {
    setCount(0); // Resetea el estado al valor inicial
  };

  const changeName = () => {
    setName(name === "Jeremy" ? "Alejandro" : "Jeremy");
    /*
      if (name === "Jeremy") {
        setName("Alejandro");
      } else {
        setName("Jeremy");
      }
    */
  };

  return (
    <>
      <h1>UseState</h1>

      <h3>Count: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <h3>Name: {name}</h3>
      <button onClick={changeName}>Change Name</button>
    </>
  );
};
