import React from "react";

export const RenderList = () => {
  // Renderizado de arreglos
  const fruits = ["Manzana", "Banana", "Naranja", "Pera"];

  const fruitElements = fruits.map((fruit, index) => (
    <li key={index}>{fruit}</li>
  ));

  // Renderizado de objetos
  const users = [
    { id: 1, name: "Jeremy", age: 24 },
    { id: 2, name: "Maria", age: 30 },
    { id: 3, name: "Carlos", age: 28 },
  ];

  const userElements = users.map((user) => (
    <li key={user.id}>
      {user.name} - {user.age} años
    </li>
  ));

  return (
    <>
      <h1>Render Lists</h1>

      {/* Convertir arreglo a elementos tipo lista, utilizando map */}
      <ul>{fruitElements}</ul>
      {/* Convertir objetos a elementos tipo lista, utilizando map */}
      <ul>{userElements}</ul>
    </>
  );
};
