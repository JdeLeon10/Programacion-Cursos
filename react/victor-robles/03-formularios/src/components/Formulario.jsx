import React from "react";
import { useState, useEffect } from "react";
import "./Formulario.css";

export const Formulario = () => {
  const [usuario, setUsuario] = useState({});

  // Datos de formulario
  const datosFormulario = (e) => {
    e.preventDefault(); // Evita que se recargue la página al enviar el formulario

    let datos = e.target;

    let usuario = {
      nombre: datos.nombre.value,
      apellido: datos.apellido.value,
      edad: datos.edad.value,
      genero: datos.genero.value,
    };

    setUsuario(usuario);
  };

  useEffect(() => {
    console.log("Usuario actualizado:", usuario);
  }, [usuario]);

  return (
    <>
      {/* Formulario con React */}
      <div className="flexbox-parent">
        <h1 className="flexbox-title">Formulario con React</h1>
        <form className="formulario" onSubmit={datosFormulario}>
          <fieldset className="formulario-fieldset">
            <legend>Datos Personales</legend>
            <input type="text" name="nombre" placeholder="Nombre" />
            <input type="text" name="apellido" placeholder="Apellido" />
            <input type="text" name="edad" placeholder="Edad" />
            <select name="genero" id="">
              <option value="hombre">Hombre</option>
              <option value="mujer">Mujer</option>
            </select>
            <input type="submit" value="Enviar" />
          </fieldset>
        </form>
      </div>

      {/* Print de informacion */}
      <div className="info-usuario">
        <h2>Información del Usuario</h2>
        <p>Nombre: {usuario.nombre}</p>
        <p>Apellido: {usuario.apellido}</p>
        <p>Edad: {usuario.edad}</p>
        <p>Género: {usuario.genero}</p>
      </div>
    </>
  );
};
