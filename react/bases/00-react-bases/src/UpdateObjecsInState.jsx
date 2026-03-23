import React from "react";
import { useState } from "react";

export const UpdateObjecsInState = () => {
  const [car, setCar] = useState({
    make: "Kia",
    model: "Sportage",
    year: 2016,
  });

  // We use the spread operator to create a new object with the existing properties of 'car'
  const handleYearChange = (event) => {
    setCar({ ...car, year: event.target.value });
  };

  const handleMakeChange = (event) => {
    setCar({ ...car, make: event.target.value });
  };

  const handleModelChange = (event) => {
    setCar({ ...car, model: event.target.value });
  };

  return (
    <>
      <h1>Update Objects In State</h1>
      <p>
        Your favorite car is: {car.make} {car.model} {car.year}
      </p>
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <input type="number" value={car.year} onChange={handleYearChange} />
    </>
  );
};
