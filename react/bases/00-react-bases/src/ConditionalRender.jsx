/*
  Conditional Render allows us to render different components based on conditions.
*/

import React from "react";

export const ConditionalRender = ({ isLoggedIn, userName }) => {
  const welcomeMessage = <h3> Bienvenido {userName}</h3>;
  const loginMessage = <h3> Por favor inicia sesión </h3>;

  return (
    <>
      <h1>Conditional Render</h1>
      {/* No puede retornarse codigo JS directamente */}
      {isLoggedIn ? welcomeMessage : loginMessage}
    </>
  );
};
