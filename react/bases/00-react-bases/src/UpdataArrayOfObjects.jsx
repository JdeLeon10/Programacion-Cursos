import React from "react";
import { useState } from "react";

export const UpdateArrayOfObjects = () => {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState("");
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {
    // objeto carro con estados actuales de los inputs
    const newCar = {
      make: carMake,
      model: carModel,
      year: carYear,
    };

    // Agrega el nuevo carro al array de carros utilizando el operador spread para mantener los carros existentes
    setCars([...cars, newCar]);

    // Limpiar los campos de entrada después de agregar el carro
    setCarMake("");
    setCarModel("");
    setCarYear("");
  };

  const handleRemoveCar = (index) => {
    // Elimina el carro en el índice especificado utilizando el método filter para crear un nuevo array sin el carro eliminado
    // El guion bajo (_) se utiliza para indicar que no necesitamos el valor del elemento, solo su índice (i)
    setCars(cars.filter((_, i) => i !== index));
  };

  // Toma el value de input y lo asigna al estado correspondiente para cada propiedad del carro
  const handleAddYearChange = (event) => {
    setCarYear(event.target.value);
  };

  const handleAddMakeChange = (event) => {
    setCarMake(event.target.value);
  };

  const handleAddModelChange = (event) => {
    setCarModel(event.target.value);
  };

  return (
    <>
      <h1>Update Array Of Objects</h1>
      <h3>List of car objets</h3>

      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            {car.make} {car.model} {car.year}
            {" - "}
            <button onClick={() => handleRemoveCar(index)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={carMake}
        placeholder="Enter car make"
        onChange={handleAddMakeChange}
      />
      <input
        type="text"
        value={carModel}
        placeholder="Enter car model"
        onChange={handleAddModelChange}
      />
      <input
        type="number"
        value={carYear}
        placeholder="Enter car year"
        onChange={handleAddYearChange}
      />
      <button onClick={handleAddCar}>Add Car</button>
    </>
  );
};
