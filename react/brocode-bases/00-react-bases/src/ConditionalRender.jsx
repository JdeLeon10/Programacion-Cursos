/*
  Conditional Render allows us to render different components based on conditions.
*/

import React from "react";

export const ConditionalRender = ({ isLoggedIn, userName }) => {
  const welcomeMessage = <h2> Bienvenido {userName}</h2>;
  const loginMessage = <h2> Por favor inicia sesión </h2>;

  return (
    <>
      <h1>Conditional Render</h1>
      {/* No puede retornarse codigo JS directamente */}
      {isLoggedIn ? welcomeMessage : loginMessage}
    </>
  );
};
