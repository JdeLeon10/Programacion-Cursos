import React from "react";
import { useState } from "react";

export const UpdateArrayInState = () => {
  const [foods, setFoods] = useState(["Pizza", "Sushi", "Tacos"]);
  const [newFood, setNewFood] = useState("");

  // Función para manejar el cambio en el input de comida
  const handleFoodChange = (e) => {
    setNewFood(e.target.value);
  };

  // Lista de elementos de foods
  const foodList = foods.map((food, index) => <li key={index}>{food}</li>);

  const handleAddFood = () => {
    if (newFood.trim() !== "") {
      // Verifica que newFood no esté vacío o solo contenga espacios

      setFoods([...foods, newFood]); // Agrega newFood al final de la lista de foods
      setNewFood(""); // Limpia el input después de agregar la comida
    }
  };

  const handleRemoveFood = () => {};

  return (
    <>
      <h1>Update Array In State</h1>
      <h3>Lista de comida</h3>
      <ul>{foodList}</ul>

      <input
        type="text"
        value={newFood} // Texto en input = valor de newFood
        onChange={handleFoodChange} // Actualiza newFood con el valor del input
        placeholder="Ingresa una comida"
      />
      <button onClick={handleAddFood}>Agregar comida</button>
    </>
  );
};
