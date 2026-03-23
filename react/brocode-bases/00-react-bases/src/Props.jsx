/*
  Props = read-only properties that are shared between components.
  A parent component can send data to a child component
  <Component key = value />
*/

import React from "react";

export const Props = ({ name, age, isStudent }) => {
  return (
    <>
      <h1> Props </h1>
      <p> Mi nombre es: {name}</p>
      <p> Y tengo: {age} años</p>
      {/* Para un booleano se debe usar un operador ternario */}
      <p> Es estudiante: {isStudent ? "Si" : "No"}</p>
    </>
  );
};
