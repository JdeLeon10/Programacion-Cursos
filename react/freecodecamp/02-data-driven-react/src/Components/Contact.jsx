import React from "react";

export const Contact = ({ name, phoneNumber, email }) => {
  return (
    <>
      <div className="div-contacts">
        <article>
          <h1 className="h1-image">Imagen de contacto</h1>
        </article>
        <h3>{name}</h3>
        <p>Phone: {phoneNumber}</p>
        <p>Email: {email}</p>
      </div>
    </>
  );
};
