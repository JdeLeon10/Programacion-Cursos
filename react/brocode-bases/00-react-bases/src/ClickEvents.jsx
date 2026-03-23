/*
  Click events: Interactions when a user clicks on an element, such as a button or a link. 
  In React, you can handle click events using the onClick attribute, which allows you to 
  specify a function that will be called when the element is clicked. 
  This is commonly used to trigger actions, update state, or navigate to different parts of the application.
*/

import React from "react";

export const ClickEvents = () => {
  const handleClick = () => {
    alert(`Button clicked by user!`);
  };

  const handleClickWithParams = (message) => {
    alert(`Button clicked with message: ${message}`);
  };

  // Eventos
  const handleClickEvent = (event) => {
    console.log("Event object:", event); // Muestra el objeto del evento en la consola y sus propiedades
    alert(
      `Button clicked at coordinates: (${event.clientX}, ${event.clientY})`,
    );
  };

  return (
    <>
      <h1>Click Events</h1>
      <button onClick={handleClick}>Click me</button>
      {/* Sintaxis: onClick={() => functionName(argumento)} */}
      {/* Utilizamos () => y no functionName(argumento) directamente para evitar que la función se ejecute inmediatamente */}
      <button onClick={() => handleClickWithParams("Hello from ClickEvents!")}>
        Click me with argument
      </button>
      <button onClick={handleClickEvent}>Click me to see event details</button>
    </>
  );
};
