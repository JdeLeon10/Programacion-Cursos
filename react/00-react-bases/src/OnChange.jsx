/*
  OnChange: Es un evento que se dispara cuando el valor de un elemento cambia.
  En React, se puede manejar el evento onChange utilizando el atributo onChange en un elemento de formulario, 
  como un input o un select. 
  El evento onChange se activa cada vez que el usuario modifica el valor del elemento, 
  ya sea escribiendo en un campo de texto, seleccionando una opción en un menú desplegable o 
  marcando una casilla de verificación.
*/

import React from "react";
import { useState } from "react";

export const OnChange = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [payment, setPayment] = useState("");

  /*
    function handleNameChange(event) {
    setName(event.target.value); // Actualiza el estado con el nuevo valor del input
    }
  */
  const handleNameChange = (event) => {
    setName(event.target.value); // Actualiza el estado con el nuevo valor del input
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value); // Actualiza el estado con el nuevo valor del input
  };

  const handlePaymentChange = (event) => {
    setPayment(event.target.value); // Actualiza el estado con el nuevo valor del input
  };

  return (
    <>
      <h1>OnChange</h1>

      {/* value: "El valor actual del elemento de formulario, que se muestra en el campo de entrada." */}
      {/* onChange: "Un evento que se dispara cada vez que el valor del elemento de formulario cambia, 
      lo que permite actualizar el estado del componente en respuesta a las interacciones del usuario." */}

      <input type="text" value={name} onChange={handleNameChange} />
      <h3>Name: {name}</h3>

      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <h3>Quantity: {quantity}</h3>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select payment method</option>
        <option value="Credit card">Credit Card</option>
        <option value="PayPal">PayPal</option>
        <option value="Bank transfer">Bank Transfer</option>
      </select>
      <h3>Payment: {payment}</h3>
    </>
  );
};
