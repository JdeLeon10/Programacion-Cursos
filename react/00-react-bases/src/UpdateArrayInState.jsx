import React from "react";
import { useState } from "react";

export const UpdateArrayInState = () => {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Cherry"]);

  const handleAddFruit = () => {
    const newFruit = document.getElementById("fruitInput").value;
    document.getElementById("fruitInput").value = "";

    // Updater function
    setFruits((f) => [...f, newFruit]); // Agrega la nueva fruta al final del array existente utilizando el operador spread
  };

  // Función para eliminar una fruta por su índice
  const handleRemoveFruit = (index) => {
    setFruits((f) => f.filter((_, i) => i !== index)); // Elimina la fruta en el índice especificado utilizando el método filter
  };

  return (
    <>
      <h1>Update Array In State</h1>
      <h3>Lista de frutas</h3>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {fruit}
            {" - "}
            <button onClick={() => handleRemoveFruit(index)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <input type="text" id="fruitInput" placeholder="Ingresa una fruta" />
      <button onClick={handleAddFruit}>Agregar fruta</button>
    </>
  );
};
