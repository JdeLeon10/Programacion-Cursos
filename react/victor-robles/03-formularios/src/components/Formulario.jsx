import React from "react";
import "./Formulario.css";

export const Formulario = () => {
  return (
    <>
      <h1>Formulario con React</h1>
      <form method="post" action="/">
        <fieldset>
          <legend>Datos Personales</legend>
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Apellido" />
          <select name="" id="">
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
          </select>
          <textarea name="" id="" placeholder="Biografia"></textarea>
          <input type="submit" value="Enviar" />
        </fieldset>
      </form>
    </>
  );
};
